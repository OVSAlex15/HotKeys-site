import{toNestErrors as r,validateFieldsNatively as o}from"@hookform/resolvers";import{ArkErrors as e}from"arktype";const s=(s,t,a={})=>(t,i,n)=>{const c=s(t);return c instanceof e?{values:{},errors:r((f=c,f.forEach(r=>Object.assign(r,{type:r.code})),f.byPath),n)}:(n.shouldUseNativeValidation&&o({},n),{errors:{},values:a.raw?t:c});var f};export{s as arktypeResolver};
//# sourceMappingURL=arktype.modern.mjs.map
