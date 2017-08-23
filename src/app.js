const template = `<section class="container">
    <header class="header">
      <nav>
        <h1>Simbologia {{ $route.params.id }}</h1>
        <menu-items></menu-items>
      </nav>
    </header>
  </section>
`
import menuItems from './components/menu/index'

export default {
  name: 'app',
  components: {
    menuItems
  },
  data () {
    return {}
  },
  beforeMount () {

  },
  template: template
}
