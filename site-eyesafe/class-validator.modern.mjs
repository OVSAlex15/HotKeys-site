import{toNestErrors as r,validateFieldsNatively as s}from"@hookform/resolvers";import{plainToClass as t}from"class-transformer";import{validateSync as e,validate as o}from"class-validator";const a=(r,s,t={},e="")=>r.reduce((r,t)=>{const o=e?`${e}.${t.property}`:t.property;if(t.constraints){const e=Object.keys(t.constraints)[0];r[o]={type:e,message:t.constraints[e]};const a=r[o];s&&a&&Object.assign(a,{types:t.constraints})}return t.children&&t.children.length&&a(t.children,s,r,o),r},t),n=(n,i={},c={})=>async(l,d,m)=>{const{transformer:p,validator:h}=i,u=t(n,l,p),f=await("sync"===c.mode?e:o)(u,h);return f.length?{values:{},errors:r(a(f,!m.shouldUseNativeValidation&&"all"===m.criteriaMode),m)}:(m.shouldUseNativeValidation&&s({},m),{values:c.rawValues?l:u,errors:{}})};export{n as classValidatorResolver};
//# sourceMappingURL=class-validator.modern.mjs.map
