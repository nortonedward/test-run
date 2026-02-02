import{_ as s}from"./UiAlert-CIt0S3NC.js";import"./iframe-Dky8xwok.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-fNskMoFt.js";const l={component:s,title:"UI/UiAlert",argTypes:{variant:{control:"select",options:["success","warning","error","info"]}}},r={args:{variant:"info"},render:a=>({components:{UiAlert:s},setup(){return{args:a}},template:`
      <UiAlert v-bind="args" class="max-w-md">
        <p>This is an alert message.</p>
      </UiAlert>
    `})};var e,n,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const c=["Default"];export{r as Default,c as __namedExportsOrder,l as default};
