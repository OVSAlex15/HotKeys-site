var e=require("@hookform/resolvers"),r=require("@typeschema/main"),s=require("react-hook-form"),a=function(e,r){for(var a={};e.length;){var t=e[0];if(t.path){var o=t.path.join(".");if(a[o]||(a[o]={message:t.message,type:""}),r){var i=a[o].types,n=i&&i[""];a[o]=s.appendErrors(o,r,a,"",n?[].concat(n,t.message):t.message)}e.shift()}}return a};exports.typeschemaResolver=function(s,t,o){return void 0===o&&(o={}),function(t,i,n){try{return Promise.resolve(r.validate(s,t)).then(function(r){return n.shouldUseNativeValidation&&e.validateFieldsNatively({},n),r.success?{errors:{},values:o.raw?t:r.data}:{values:{},errors:e.toNestErrors(a(r.issues,!n.shouldUseNativeValidation&&"all"===n.criteriaMode),n)}})}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=typeschema.js.map
