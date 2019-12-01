// rollup.config.js
import vue from 'rollup-plugin-vue'

// import cjs from 'rollup-plugin-commonjs'

// For setting the NODE Env to production
import replace from 'rollup-plugin-replace'

// Mininimize generated UMD code for UNPKG
import uglify from 'rollup-plugin-uglify-es'

// Parsing of command line arguments - See https://devhints.io/minimist
import minimist from 'minimist'

// More efficient transpiling than Bable
import buble from 'rollup-plugin-buble'
// import babel from 'rollup-plugin-babel'

// Ability to resolve imports that do not provide extensions
import resolve from 'rollup-plugin-node-resolve'

const argv = minimist(process.argv.slice(2))

const config = {
  input: 'src/plugin.js',
  output: {
    name: 'VueScheduler',
    exports: 'named'
  },
  plugins: [
    resolve({
      main: true,
      extensions: ['.js', '.vue']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true
      }
    }),
    // cjs(),
    buble({ objectAssign: 'Object.assign' })
    // babel({ runtimeHelpers: true })
  ]
  // external: ['lodash']
}

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(
    uglify({
      sourceMap: false,
      ie8: false
    })
  )
}

export default config
