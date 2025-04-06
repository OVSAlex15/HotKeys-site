var e=require("@hookform/resolvers"),n=require("fp-ts/Either"),t=require("fp-ts/function"),r=require("fp-ts/Option"),i=require("fp-ts/ReadonlyArray"),u=require("fp-ts/ReadonlyRecord"),o=require("fp-ts/Semigroup"),a=require("io-ts");function f(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach(function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}}),n.default=e,n}var c=/*#__PURE__*/f(n),p=/*#__PURE__*/f(r),s=/*#__PURE__*/f(i),l=/*#__PURE__*/f(u),d=/*#__PURE__*/f(o);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(null,arguments)}var y=function(e){return e.reduce(function(e,n,r){return t.pipe(n,c.fold(function(e){return(r>0?".":"")+e},function(e){return"["+e+"]"}),function(n){return""+e+n})},"")},v=["path"],g=[a.TaggedUnionType,a.UnionType,a.IntersectionType,a.ExactType,a.RefinementType],O=function(e){var n,r=t.pipe(n=e.context,s.filterMapWithIndex(function(e,t){var r=e-1,i=-1===r?void 0:n[r];return void 0===i||g.some(function(e){return i.type instanceof e})?p.none:p.some(t)}),s.map(function(e){return e.key}),s.map(function(e){return t.pipe(e,function(e){return parseInt(e,10)},c.fromPredicate(t.not(Number.isNaN),function(){return e}))}),s.toArray,y);return{message:t.pipe(e.message,c.fromNullable(e.context),c.mapLeft(t.flow(s.last,p.map(function(e){return"expected "+e.type.name+" but got "+JSON.stringify(e.actual)}),p.getOrElseW(function(){return t.absurd("Error context is missing name")}))),c.getOrElseW(t.identity)),type:t.pipe(e.context,s.last,p.map(function(e){return e.type.name}),p.getOrElse(function(){return"unknown"})),path:r}},b=function(e){return t.pipe(e,s.map(function(e){var n;return(n={})[e.path]={type:e.type,message:e.message},n}),function(e){return d.fold({concat:function(e,n){return Object.assign({},n,e)}})({},e)})},h={concat:function(e,n){var t;return m({},n,{types:m({},e.types,(t={},t[e.type]=e.message,t[n.type]=n.message,t))})}},x=function(e){return t.pipe(l.fromFoldableMap(h,s.Foldable)(e,function(e){return[e.path,e]}),l.map(function(e){return function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,v)}))};exports.ioTsResolver=function(n){return function(r,i,u){return t.pipe(r,n.decode,c.mapLeft((o=!u.shouldUseNativeValidation&&"all"===u.criteriaMode,function(e){var n=o?x:b;return t.pipe(e,s.map(O),n)})),c.mapLeft(function(n){return e.toNestErrors(n,u)}),c.fold(function(e){return{values:{},errors:e}},function(n){return u.shouldUseNativeValidation&&e.validateFieldsNatively({},u),{values:n,errors:{}}}));var o}};
//# sourceMappingURL=io-ts.js.map
