import{validateFieldsNatively as r,toNestErrors as e}from"@hookform/resolvers";const o=o=>async(s,a,t)=>{try{const e=await o(s);return t.shouldUseNativeValidation&&r({},t),{errors:{},values:e}}catch(r){if((r=>null!=r.errors)(r))return{values:{},errors:e((n=r,(n.errors||[]).reduce((r,e)=>(r[e.path.join(".")]={type:e.error.name,message:e.error.message},r),{})),t)};throw r}var n};export{o as computedTypesResolver};
//# sourceMappingURL=computed-types.modern.mjs.map
