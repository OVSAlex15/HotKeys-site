!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@hookform/resolvers")):"function"==typeof define&&define.amd?define(["exports","@hookform/resolvers"],o):o((e||self).hookformResolversNope={},e.hookformResolvers)}(this,function(e,o){var r=function e(o,r,t){return void 0===r&&(r={}),void 0===t&&(t=""),Object.keys(o).reduce(function(r,s){var n=t?t+"."+s:s,i=o[s];return"string"==typeof i?r[n]={message:i}:e(i,r,n),r},r)};e.nopeResolver=function(e,t){return void 0===t&&(t={abortEarly:!1}),function(s,n,i){var f=e.validate(s,n,t);return f?{values:{},errors:o.toNestErrors(r(f),i)}:(i.shouldUseNativeValidation&&o.validateFieldsNatively({},i),{values:s,errors:{}})}}});
//# sourceMappingURL=nope.umd.js.map
