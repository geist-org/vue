<template lang="pug">
.zi-toggle(@click="clickHandler" :class="[{ checked: !!model, disabled }, size]")
  .inner(:style="{ width: innerSwitchRect, height: innerSwitchRect }")
</template>

<script>
export default {
  name: 'zi-toggle',
  beforeMount() {
    const basic = '2px';
    switch (this.size) {
      case 'mini':
        this.innerSwitchRect=  `calc(.835rem - ${basic})`;
        break;
      case 'medium':  
        this.innerSwitchRect=  `calc(.875rem - ${basic})`;   
        break;
      case 'large':    
        this.innerSwitchRect=  `calc(1rem - ${basic})`; 
        break;           
      default:
        break;
    }
  },

  data: () => ({
    privateModel: undefined,
    innerSwitchRect: '',
  }),

  props: {
    value: [String, Number, Boolean],
    disabled: Boolean,
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['mini', 'medium', 'large'].indexOf(value) !== -1
      }
    }
  },

  computed: {
    model: {
      get() {
        return this.value === undefined ? this.privateModel : this.value
      },

      set(val) {
        this.privateModel = val
        this.$emit('input', val)
      },
    },
  },

  methods: {
    clickHandler() {
      this.model = !this.model
    },
  },
}
</script>

<style lang="stylus" src="./toggle.styl" />
