import{validateFieldsNatively as r,toNestErrors as e}from"@hookform/resolvers";const s=(s,o={})=>(t,i,n)=>{const a=[],c=s(t,Object.assign({},{errors:a},o)),l=((r,e={})=>r.reduce((r,e)=>{const s=e.indexOf(":"),o=e.slice(1,s),t=e.slice(s+1).trim();return r[o]={message:t},r},e))(a);return c?(n.shouldUseNativeValidation&&r(l,n),{values:t,errors:{}}):{values:{},errors:e(l,n)}};export{s as typanionResolver};
//# sourceMappingURL=typanion.modern.mjs.map
