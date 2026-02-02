import{d as w,c as d,r as u,n as c,u as l,o as v}from"./iframe-C6wfPixk.js";import{c as m}from"./cn-fNskMoFt.js";import"./preload-helper-Dp1pzeXC.js";const U=["href"],x=["type","disabled"],h="inline-flex items-center justify-center gap-2 rounded-lg font-medium leading-tight transition-all duration-[var(--duration-normal)] [transition-timing-function:var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",r=w({__name:"UiButton",props:{variant:{default:"primary"},size:{default:"md"},type:{default:"button"},to:{},href:{},disabled:{type:Boolean},class:{}},setup(e){const n=e,o={sm:"min-h-[2.25rem] px-3 py-1.5 text-sm",md:"min-h-[2.75rem] px-4 py-2.5 text-base",lg:"min-h-[3.25rem] px-5 py-3 text-lg"},s={primary:"bg-[linear-gradient(to_bottom,var(--color-accent-top),var(--color-accent))] text-accent-foreground shadow-[var(--shadow-button)] border border-black/10 hover:bg-[linear-gradient(to_bottom,var(--color-accent-hover-top),var(--color-accent-hover))] hover:shadow-[var(--shadow-button-hover)] active:shadow-[var(--shadow-button)] active:translate-y-px",secondary:"border border-border bg-surface text-foreground shadow-[var(--shadow-button)] hover:border-muted hover:shadow-[var(--shadow-button-hover)] active:translate-y-px",ghost:"border border-transparent bg-transparent text-foreground hover:bg-muted/15 hover:border-muted/30 active:translate-y-px",success:"bg-success text-success-foreground shadow-[var(--shadow-button)] border border-black/10 hover:bg-success-hover hover:shadow-[var(--shadow-button-hover)] active:shadow-[var(--shadow-button)] active:translate-y-px",error:"bg-error text-error-foreground shadow-[var(--shadow-button)] border border-black/10 hover:bg-error-hover hover:shadow-[var(--shadow-button-hover)] active:shadow-[var(--shadow-button)] active:translate-y-px",warning:"bg-warning text-warning-foreground shadow-[var(--shadow-button)] border border-black/10 hover:bg-warning-hover hover:shadow-[var(--shadow-button-hover)] active:shadow-[var(--shadow-button)] active:translate-y-px",info:"bg-info text-info-foreground shadow-[var(--shadow-button)] border border-black/10 hover:bg-info-hover hover:shadow-[var(--shadow-button-hover)] active:shadow-[var(--shadow-button)] active:translate-y-px"};return(i,k)=>(e.to||e.href)&&!e.disabled?(v(),d("a",{key:0,href:e.href??e.to??"#",class:c(l(m)(h,o[e.size],s[e.variant],n.class))},[u(i.$slots,"default")],10,U)):(v(),d("button",{key:1,type:e.type,disabled:e.disabled,class:c(l(m)(h,o[e.size],s[e.variant],n.class))},[u(i.$slots,"default")],10,x))}});r.__docgenInfo={exportName:"default",displayName:"UiButton",description:"",tags:{},props:[{name:"variant",description:"Visual style; primary is main CTA, ghost is minimal.",required:!1,type:{name:"ButtonVariant"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",description:"Size affects padding and text scale.",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"type",description:"Button type when rendered as native button.",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"submit"'}]},defaultValue:{func:!1,value:"'button'"}},{name:"to",description:"Internal link destination (used as href when no router).",required:!1,type:{name:"string"}},{name:"href",description:"External link destination.",required:!1,type:{name:"string"}},{name:"disabled",description:"Disables interaction and reduces opacity.",required:!1,type:{name:"boolean"}},{name:"class",description:"Additional classes merged via cn().",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/edwardnorton/Development/test-run/packages/ui/src/components/UiButton.vue"]};const V={component:r,title:"UI/UiButton",argTypes:{variant:{control:"select",options:["primary","secondary","ghost","success","error","warning","info"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},t={args:{variant:"primary",size:"md",disabled:!1},render:e=>({components:{UiButton:r},setup(){return{args:e}},template:'<UiButton v-bind="args">Button</UiButton>'})},a={render:()=>({components:{UiButton:r},template:`
      <div class="flex flex-wrap gap-4">
        <UiButton variant="primary">Primary</UiButton>
        <UiButton variant="secondary">Secondary</UiButton>
        <UiButton variant="ghost">Ghost</UiButton>
        <UiButton variant="success">Success</UiButton>
        <UiButton variant="error">Error</UiButton>
        <UiButton variant="warning">Warning</UiButton>
        <UiButton variant="info">Info</UiButton>
      </div>
    `})};var b,p,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,y,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(B=(y=a.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const C=["Default","Variants"];export{t as Default,a as Variants,C as __namedExportsOrder,V as default};
