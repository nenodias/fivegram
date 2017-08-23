const template = `<nav class="container">
    <ul>
      <li v-for="item in items" class="pull-left">
        <a :title="item.label" class="nav button "><i class="fa fa-cogs"></i> {{ item.label }}</a>
      </li>
    </ul>
    <canvas width="600" height="300" id="canvas"></canvas>
  </nav>
`
import { menuItems } from '../../models/index'
import fabric from 'fabric'

export default {
  name: 'menu',
  components: {
  },
  data () {
    return {
      items:menuItems
    }
  },
  mounted(){
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
  },
  template: template
}
