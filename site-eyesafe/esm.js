const{parse:t,stringify:e}=JSON,{keys:n}=Object,l=String,o="string",r={},s="object",c=(t,e)=>e,a=t=>t instanceof l?l(t):t,f=(t,e)=>typeof e===o?new l(e):e,i=(t,e,o,c)=>{const a=[];for(let f=n(o),{length:i}=f,p=0;p<i;p++){const n=f[p],i=o[n];if(i instanceof l){const l=t[i];typeof l!==s||e.has(l)?o[n]=c.call(o,n,l):(e.add(l),o[n]=r,a.push({k:n,a:[t,e,l,c]}))}else o[n]!==r&&(o[n]=c.call(o,n,i))}for(let{length:t}=a,e=0;e<t;e++){const{k:t,a:n}=a[e];o[t]=c.call(o,t,i.apply(null,n))}return o},p=(t,e,n)=>{const o=l(e.push(n)-1);return t.set(n,o),o},u=(e,n)=>{const l=t(e,f).map(a),o=l[0],r=n||c,p=typeof o===s&&o?i(l,new Set,o,r):o;return r.call({"":p},"",p)},h=(t,n,l)=>{const r=n&&typeof n===s?(t,e)=>""===t||-1<n.indexOf(t)?e:void 0:n||c,a=new Map,f=[],i=[];let u=+p(a,f,r.call({"":t},"",t)),h=!u;for(;u<f.length;)h=!0,i[u]=e(f[u++],y,l);return"["+i.join(",")+"]";function y(t,e){if(h)return h=!h,e;const n=r.call(this,t,e);switch(typeof n){case s:if(null===n)return n;case o:return a.get(n)||p(a,f,n)}return n}},y=e=>t(h(e)),g=t=>u(e(t));export{g as fromJSON,u as parse,h as stringify,y as toJSON};
