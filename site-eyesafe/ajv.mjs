import{validateFieldsNatively as r,toNestErrors as e}from"@hookform/resolvers";import o from"ajv";import a from"ajv-errors";import{appendErrors as s}from"react-hook-form";var t=function(r,e){return r.forEach(function(r){"required"===r.keyword&&(r.instancePath+="/"+r.params.missingProperty)}),r.reduce(function(r,o){var a=o.instancePath.substring(1).replace(/\//g,".");if(r[a]||(r[a]={message:o.message,type:o.keyword}),e){var t=r[a].types,i=t&&t[o.keyword];r[a]=s(a,e,r,o.keyword,i?[].concat(i,o.message||""):o.message)}return r},{})},i=function(s,i,n){return void 0===n&&(n={}),function(c,m,u){try{var l=new o(Object.assign({},{allErrors:!0,validateSchema:!0},i));a(l);var v=l.compile(Object.assign({$async:n&&"async"===n.mode},s)),d=v(c);return u.shouldUseNativeValidation&&r({},u),Promise.resolve(d?{values:c,errors:{}}:{values:{},errors:e(t(v.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)})}catch(r){return Promise.reject(r)}}};export{i as ajvResolver};
//# sourceMappingURL=ajv.module.js.map
