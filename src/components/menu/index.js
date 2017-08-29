const template = `<nav class="container">
    <ul>
      <li v-for="item in items" class="pull-left">
        <a :title="item.label" class="nav button "><i class="fa fa-cogs"></i> {{ item.label }}</a>
      </li>
    </ul>
    <div ref="groupCanvas"></div>
  </nav>
`
import { menuItems } from '../../models/index'
import fabric from 'fabric'

export default {
  name: 'menu',
  props: ['width', 'height'],
  components: {
  },
  data () {
    return {
      items: menuItems
    }
  },
  computed: {
    myWidth: function() {
      return this.width
    },
    myHeight: function() {
      return this.height
    }
  },
  methods: {
    updateCanvas: function () {
      console.log('update')
      this.$refs.groupCanvas.innerHTML = ''
      this.$refs.groupCanvas.innerHTML = `<canvas id="canvas" width="${this.myWidth}" height="${this.myHeight}">`
      let canvas = new fabric.Canvas('canvas')
      let rect = new fabric.Rect({
        top : 100,
        left : 100,
        width : 60,
        height : 70,
        fill : 'red',
        selectable:false
      })
      canvas.add(rect)
    }
  },
  mounted(){
  },
  template: template
}
