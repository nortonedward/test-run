import{d as u,c,n as m,u as f,o as g,a as b}from"./iframe-C6wfPixk.js";import{c as y}from"./cn-fNskMoFt.js";import"./preload-helper-Dp1pzeXC.js";const h=["type","value","placeholder","disabled"],v="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground shadow-[var(--shadow-button)] transition-shadow duration-[var(--duration-normal)] placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",o=u({__name:"UiInput",props:{modelValue:{},type:{default:"text"},placeholder:{},disabled:{type:Boolean},class:{}},emits:["update:modelValue"],setup(t,{emit:s}){const e=t,p=s;return(I,l)=>(g(),c("input",{type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,class:m(f(y)(v,e.class)),onInput:l[0]||(l[0]=i=>p("update:modelValue",i.target.value))},null,42,h))}});o.__docgenInfo={exportName:"default",displayName:"UiInput",description:"",tags:{},props:[{name:"modelValue",description:"Bound value for v-model.",required:!1,type:{name:"string"}},{name:"type",description:"Input type (text, email, password, etc.).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"placeholder",description:"Placeholder text.",required:!1,type:{name:"string"}},{name:"disabled",description:"Disables interaction.",required:!1,type:{name:"boolean"}},{name:"class",description:"Additional classes merged via cn().",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/Users/edwardnorton/Development/test-run/packages/ui/src/components/UiInput.vue"]};const _={component:o,title:"UI/UiInput",argTypes:{disabled:{control:"boolean"}}},a={args:{placeholder:"Type something...",disabled:!1},render:t=>({components:{UiInput:o},setup(){const s=b("");return{args:t,modelValue:s}},template:`
      <UiInput
        v-model="modelValue"
        :placeholder="args.placeholder"
        :disabled="args.disabled"
      />
    `})};var r,n,d;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something...',
    disabled: false
  },
  render: args => ({
    components: {
      UiInput
    },
    setup() {
      const modelValue = ref('');
      return {
        args,
        modelValue
      };
    },
    template: \`
      <UiInput
        v-model="modelValue"
        :placeholder="args.placeholder"
        :disabled="args.disabled"
      />
    \`
  })
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const w=["Default"];export{a as Default,w as __namedExportsOrder,_ as default};
