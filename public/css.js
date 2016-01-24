import { CSSLoader, Plugins } from 'jspm-loader-css'
import vars from 'postcss-simple-vars'
import nested from 'postcss-nested'

const {fetch, bundle} = new CSSLoader([
    vars,
    nested,
    //Plugins.localByDefault,
    Plugins.extractImports,
    Plugins.scope,
    Plugins.autoprefixer()
], __moduleName);

export {fetch, bundle};


//Case for CSS modules

//  documents / vs webapps
// don't have to worry about variable naming, just like in JS
// optimisation style reuse
// reactCSSTransitionGroup

//transitionName
