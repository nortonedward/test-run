import{d as l,c as d,r as m,n as u,u as p,o as g}from"./iframe-C6wfPixk.js";import{c as f}from"./cn-fNskMoFt.js";import"./preload-helper-Dp1pzeXC.js";const v="rounded-lg border px-4 py-3 shadow-[var(--shadow-card)] transition-colors duration-[var(--duration-normal)]",n=l({__name:"UiAlert",props:{variant:{default:"info"},class:{}},setup(r){const a=r,i={success:"border-success text-success [background:var(--color-success-bg)]",warning:"border-warning text-warning [background:var(--color-warning-bg)]",error:"border-error text-error [background:var(--color-error-bg)]",info:"border-info text-info [background:var(--color-info-bg)]"};return(c,b)=>(g(),d("div",{class:u(p(f)(v,i[a.variant],a.class)),role:"alert"},[m(c.$slots,"default")],2))}});n.__docgenInfo={exportName:"default",displayName:"UiAlert",description:"",tags:{},props:[{name:"variant",description:"Semantic variant (success, warning, error, info).",required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"warning"'},{name:'"error"'},{name:'"info"'}]},defaultValue:{func:!1,value:"'info'"}},{name:"class",description:"Additional classes merged via cn().",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/edwardnorton/Development/test-run/packages/ui/src/components/UiAlert.vue"]};const x={component:n,title:"UI/UiAlert",argTypes:{variant:{control:"select",options:["success","warning","error","info"]}}},e={args:{variant:"info"},render:r=>({components:{UiAlert:n},setup(){return{args:r}},template:`
      <UiAlert v-bind="args" class="max-w-md">
        <p>This is an alert message.</p>
      </UiAlert>
    `})};var s,o,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  },
  render: args => ({
    components: {
      UiAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiAlert v-bind="args" class="max-w-md">
        <p>This is an alert message.</p>
      </UiAlert>
    \`
  })
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,x as default};
