import{validateFieldsNatively as r,toNestErrors as o}from"@hookform/resolvers";import{TypeCheck as e}from"@sinclair/typebox/compiler";import{Value as s}from"@sinclair/typebox/value";import{appendErrors as t}from"react-hook-form";const a=(r,o)=>{const e={};for(;r.length;){const s=r[0],{type:a,message:i,path:n}=s,l=n.substring(1).replace(/\//g,".");if(e[l]||(e[l]={message:i,type:""+a}),o){const r=e[l].types,i=r&&r[""+a];e[l]=t(l,o,e,""+a,i?[].concat(i,s.message):s.message)}r.shift()}return e},i=t=>async(i,n,l)=>{const m=Array.from(t instanceof e?t.Errors(i):s.Errors(t,i));return l.shouldUseNativeValidation&&r({},l),m.length?{values:{},errors:o(a(m,!l.shouldUseNativeValidation&&"all"===l.criteriaMode),l)}:{errors:{},values:i}};export{i as typeboxResolver};
//# sourceMappingURL=typebox.modern.mjs.map
