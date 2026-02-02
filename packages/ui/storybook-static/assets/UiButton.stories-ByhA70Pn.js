import{_ as r}from"./UiButton-Q2PtlWQY.js";import"./iframe-Dky8xwok.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-fNskMoFt.js";const d={component:r,title:"UI/UiButton",argTypes:{variant:{control:"select",options:["primary","secondary","ghost","success","error","warning","info"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},t={args:{variant:"primary",size:"md",disabled:!1},render:c=>({components:{UiButton:r},setup(){return{args:c}},template:'<UiButton v-bind="args">Button</UiButton>'})},n={render:()=>({components:{UiButton:r},template:`
      <div class="flex flex-wrap gap-4">
        <UiButton variant="primary">Primary</UiButton>
        <UiButton variant="secondary">Secondary</UiButton>
        <UiButton variant="ghost">Ghost</UiButton>
        <UiButton variant="success">Success</UiButton>
        <UiButton variant="error">Error</UiButton>
        <UiButton variant="warning">Warning</UiButton>
        <UiButton variant="info">Info</UiButton>
      </div>
    `})};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false
  },
  render: args => ({
    components: {
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<UiButton v-bind="args">Button</UiButton>'
  })
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var e,s,u;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiButton
    },
    template: \`
      <div class="flex flex-wrap gap-4">
        <UiButton variant="primary">Primary</UiButton>
        <UiButton variant="secondary">Secondary</UiButton>
        <UiButton variant="ghost">Ghost</UiButton>
        <UiButton variant="success">Success</UiButton>
        <UiButton variant="error">Error</UiButton>
        <UiButton variant="warning">Warning</UiButton>
        <UiButton variant="info">Info</UiButton>
      </div>
    \`
  })
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const l=["Default","Variants"];export{t as Default,n as Variants,l as __namedExportsOrder,d as default};
