import{toNestErrors as r,validateFieldsNatively as e}from"@hookform/resolvers";import{validate as s}from"superstruct";const o=(o,t,a={})=>(u,i,m)=>{const p=s(u,o,t);return p[0]?{values:{},errors:r((l=p[0],l.failures().reduce((r,e)=>(r[e.path.join(".")]={message:e.message,type:e.type})&&r,{})),m)}:(m.shouldUseNativeValidation&&e({},m),{values:a.raw?u:p[1],errors:{}});var l};export{o as superstructResolver};
//# sourceMappingURL=superstruct.modern.mjs.map
