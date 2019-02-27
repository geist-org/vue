export default {
  name: 'zi-table-column',

  props: {
    prop: String,
    label: String,
    width: String,
  },

  beforeCreate() {
    this.row = {}
    this.column = {}
    this.$index = 0
  },

  created() {
    const column = {
      label: this.label,
      prop: this.prop,
      width: this.width,
      renderCell: null,
      renderHeader: null,
    }

    this.column = column
    this.$options.render = h => h('div', this.$slots.default)
  },

  mounted() {
    const owner = this.owner
    if (this.$scopedSlots.default) {
      this.column.renderCell = (h, data) => {
        return () => this.$scopedSlots.default(data)
      }
    }

    if (this.$scopedSlots.header) {
      this.column.renderHeader = (h, data) => {
        return () => this.$scopedSlots.header(data)
      }
    }
    owner.store.commit('insertColumn', this.column)
  },

  computed: {
    owner() {
      let parent = this.$parent;
      while (parent && !parent.tableId) {
        parent = parent.$parent;
      }
      return parent;
    },
  },
}
