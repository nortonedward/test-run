import{d as p,c as m,n as u,u as b,o as f,a as h}from"./iframe-C6wfPixk.js";import{c as g}from"./cn-fNskMoFt.js";import"./preload-helper-Dp1pzeXC.js";const k=["checked","disabled"],x="h-5 w-5 rounded border-2 border-border bg-surface accent-accent shadow-[var(--shadow-button)] transition-all duration-[var(--duration-normal)] focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",n=p({__name:"UiCheckbox",props:{modelValue:{type:Boolean},disabled:{type:Boolean},class:{}},emits:["update:modelValue"],setup(e,{emit:s}){const d=s;return(l,o)=>(f(),m("input",{type:"checkbox",checked:e.modelValue,disabled:e.disabled,class:u(b(g)(x,l.$props.class)),onChange:o[0]||(o[0]=i=>d("update:modelValue",i.target.checked))},null,42,k))}});n.__docgenInfo={exportName:"default",displayName:"UiCheckbox",description:"",tags:{},props:[{name:"modelValue",description:"Bound checked state for v-model.",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disables interaction.",required:!1,type:{name:"boolean"}},{name:"class",description:"Additional classes merged via cn().",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],sourceFiles:["/Users/edwardnorton/Development/test-run/packages/ui/src/components/UiCheckbox.vue"]};const U={component:n,title:"UI/UiCheckbox",argTypes:{disabled:{control:"boolean"}}},a={args:{disabled:!1},render:e=>({components:{UiCheckbox:n},setup(){const s=h(!1);return{args:e,checked:s}},template:`
      <label class="flex items-center gap-2 cursor-pointer">
        <UiCheckbox v-model="checked" :disabled="args.disabled" />
        <span>Accept terms</span>
      </label>
    `})};var t,r,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => ({
    components: {
      UiCheckbox
    },
    setup() {
      const checked = ref(false);
      return {
        args,
        checked
      };
    },
    template: \`
      <label class="flex items-center gap-2 cursor-pointer">
        <UiCheckbox v-model="checked" :disabled="args.disabled" />
        <span>Accept terms</span>
      </label>
    \`
  })
}`,...(c=(r=a.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,U as default};
