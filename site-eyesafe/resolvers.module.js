import{get as r,set as e}from"react-hook-form";var t=function(e,t,i){if(e&&"reportValidity"in e){var n=r(i,t);e.setCustomValidity(n&&n.message||""),e.reportValidity()}},i=function(r,e){var i=function(i){var n=e.fields[i];n&&n.ref&&"reportValidity"in n.ref?t(n.ref,i,r):n.refs&&n.refs.forEach(function(e){return t(e,i,r)})};for(var n in e.fields)i(n)},n=function(t,n){n.shouldUseNativeValidation&&i(t,n);var f={};for(var a in t){var s=r(n.fields,a),u=Object.assign(t[a]||{},{ref:s&&s.ref});if(o(n.names||Object.keys(t),a)){var c=Object.assign({},r(f,a));e(c,"root",u),e(f,a,c)}else e(f,a,u)}return f},o=function(r,e){return r.some(function(r){return r.startsWith(e+".")})};export{n as toNestErrors,i as validateFieldsNatively};
//# sourceMappingURL=resolvers.module.js.map
