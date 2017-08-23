System.config({
  transpiler: 'plugin-babel',
  packages: {
      '.': {
          defaultJSExtensions: 'js'
      }
  },
  map: {
    'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    'vue': './node_modules/vue/dist/vue.js',
    'vue-router': './node_modules/vue-router/dist/vue-router.js',
    'vuex': './node_modules/vuex/dist/vuex.js',
    'fabric': './node_modules/fabric/dist/fabric.require.js'
  }
});
