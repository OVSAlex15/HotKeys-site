import{toNestErrors as r,validateFieldsNatively as e}from"@hookform/resolvers";import s from"vest/promisify";const o=(r,e)=>{const s={};for(const o in r)s[o]||(s[o]={message:r[o][0],type:""}),e&&(s[o].types=r[o].reduce((r,e,s)=>(r[s]=e)&&r,{}));return s},t=(t,a,i={})=>async(a,n,m)=>{const l="sync"===i.mode?t(a,m.names,n):await s(t)(a,m.names,n);return l.hasErrors()?{values:{},errors:r(o(l.getErrors(),!m.shouldUseNativeValidation&&"all"===m.criteriaMode),m)}:(m.shouldUseNativeValidation&&e({},m),{values:a,errors:{}})};export{t as vestResolver};
//# sourceMappingURL=vest.modern.mjs.map
