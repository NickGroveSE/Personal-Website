import d from"./ContentQuery.c1f9362f.js";import{m as c,q as l,v as p}from"./entry.677388f1.js";import"./asyncData.3b857a6f.js";import"./query.42e6a445.js";import"./preview.5f821b5d.js";const u=(r,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),y=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=l(),{path:f,query:o}=r,m={...o||{},path:f||(o==null?void 0:o.path)||"/"};return p(d,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:n})=>t.default({list:e,refresh:a,isPartial:n,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):u("not-found",e==null?void 0:e.data)}})}}),S=y;export{S as default};