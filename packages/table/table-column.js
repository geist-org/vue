import './table.styl'

const getDefaultColumns = (options) => {
  const column = Object.keys(options).reduce((total, key) => {
    if (options.hasOwnProperty(key) && typeof options[key] !== 'undefined') {
      total[key] = options[key]
    }
    return total
  }, {})
  if (!column.minWidth) column.minWidth = 80
  column.realWidth = column.width === undefined ? column.minWidth : column.width
  return column
}

const formatWidth = (width, isMin) => {
  if (width === undefined) return width
  let intWidth = ~~width
  if (Number.isNaN(intWidth)) intWidth = !isMin ? null : 80
  return intWidth
}
export default {
  name: 'zi-table-column',

  props: {
    prop: String,
    label: String,
    width: [String, Number],
    minWidth: [String, Number],
  },

  data: () => ({
    defaultConfig: {},
  }),

  watch: {
    label(newVal) {
      if (this.defaultConfig) this.defaultConfig.label = newVal
    },

    prop(newVal) {
      if (this.defaultConfig) this.defaultConfig.prop = newVal
    },

    width(newVal) {
      if (this.defaultConfig) this.defaultConfig.width = formatWidth(newVal, false)
    },

    minWidth(newVal) {
      if (this.defaultConfig) this.defaultConfig.width = formatWidth(newVal, true)
    },
  },

  render() {
    return <div></div>
  },

  computed: {
    isOwner() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'zi-table') {
        parent = parent.$parent
      }
      return parent
    },
  },

  created() {
    const width = formatWidth(this.width, false)
    const minWidth = formatWidth(this.minWidth, true)
    const column = getDefaultColumns({
      label: this.label,
      prop: this.prop,
      width,
      minWidth,
    })
    let renderCell = function(h, data) {
      return <div class="table-cell">{ data.row[data.column.prop] }</div>
    }
    column.renderCell = (h, data) => {
      if (this.$scopedSlots.default) renderCell = () => this.$scopedSlots.default(data)
      return renderCell(h, data, this._renderProxy)
    }
    this.defaultConfig = column
  },

  mounted() {
    const store = this.isOwner.store
    store.commit('insertColumns', this.defaultConfig)
  },
}
