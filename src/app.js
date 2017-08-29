const template = `
<v-layout v-resize="onResize" column align-center justify-center>
   <v-subheader>Simbologia {{ $route.params.id }}</v-subheader>
   <menu-items ref="menu" :width="width" :height="height"></menu-items>
   {{ windowSize }}
 </v-layout>
`
import menuItems from './components/menu/index'

export default {
  name: 'app',
  components: {
    menuItems
  },
  computed:{
    width: function () {
      return this.windowSize.x
    },
    height: function () {
      return this.windowSize.y
    }
  },
  data () {
    return {
      windowSize: {
        x: 600,
        y: 300
      }
    }
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      let menu = this.$refs.menu
      menu.updateCanvas()
    }
  },
  mounted() {
    this.onResize()
  },
  template: template
}
