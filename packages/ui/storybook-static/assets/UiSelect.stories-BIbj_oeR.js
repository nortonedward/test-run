import{d as c,c as u,r as m,n as f,u as b,o as v,a as g}from"./iframe-C6wfPixk.js";import{c as S}from"./cn-fNskMoFt.js";import"./preload-helper-Dp1pzeXC.js";const U=["value","disabled"],y="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground shadow-[var(--shadow-button)] transition-shadow duration-[var(--duration-normal)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 appearance-none bg-no-repeat",n=c({__name:"UiSelect",props:{modelValue:{},disabled:{type:Boolean},class:{}},emits:["update:modelValue"],setup(e,{emit:a}){const d=a;return(s,t)=>(v(),u("select",{value:e.modelValue,disabled:e.disabled,class:f(b(S)(y,"ui-select-chevron",s.$props.class)),onChange:t[0]||(t[0]=p=>d("update:modelValue",p.target.value))},[m(s.$slots,"default")],42,U))}});n.__docgenInfo={exportName:"default",displayName:"UiSelect",description:"",tags:{},props:[{name:"modelValue",description:"Bound value for v-model.",required:!1,type:{name:"string"}},{name:"disabled",description:"Disables interaction.",required:!1,type:{name:"boolean"}},{name:"class",description:"Additional classes merged via cn().",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"default"}],sourceFiles:["/Users/edwardnorton/Development/test-run/packages/ui/src/components/UiSelect.vue"]};const w={component:n,title:"UI/UiSelect",argTypes:{disabled:{control:"boolean"}}},o={args:{disabled:!1},render:e=>({components:{UiSelect:n},setup(){const a=g("");return{args:e,value:a}},template:`
      <UiSelect v-model="value" :disabled="args.disabled" class="max-w-xs">
        <option value="" disabled>Choose...</option>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="c">Option C</option>
      </UiSelect>
    `})};var l,r,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => ({
    components: {
      UiSelect
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <UiSelect v-model="value" :disabled="args.disabled" class="max-w-xs">
        <option value="" disabled>Choose...</option>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="c">Option C</option>
      </UiSelect>
    \`
  })
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,w as default};
