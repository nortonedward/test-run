import{d as c,c as u,n as p,u as m,o as b,a as v}from"./iframe-C6wfPixk.js";import{c as f}from"./cn-fNskMoFt.js";import"./preload-helper-Dp1pzeXC.js";const g=["value","checked","disabled"],U="h-5 w-5 rounded-full border-2 border-border bg-surface accent-accent shadow-[var(--shadow-button)] transition-all duration-[var(--duration-normal)] focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",n=c({__name:"UiRadio",props:{modelValue:{},value:{},disabled:{type:Boolean},class:{}},emits:["update:modelValue"],setup(e,{emit:s}){const t=s;return(d,l)=>(b(),u("input",{type:"radio",value:e.value,checked:e.modelValue===e.value,disabled:e.disabled,class:p(m(f)(U,d.$props.class)),onChange:l[0]||(l[0]=x=>t("update:modelValue",e.value))},null,42,g))}});n.__docgenInfo={exportName:"default",displayName:"UiRadio",description:"",tags:{},props:[{name:"modelValue",description:"Bound value for v-model.",required:!1,type:{name:"string"}},{name:"value",description:"Value of this radio option.",required:!0,type:{name:"string"}},{name:"disabled",description:"Disables interaction.",required:!1,type:{name:"boolean"}},{name:"class",description:"Additional classes merged via cn().",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/Users/edwardnorton/Development/test-run/packages/ui/src/components/UiRadio.vue"]};const O={component:n,title:"UI/UiRadio",argTypes:{disabled:{control:"boolean"}}},a={args:{disabled:!1},render:e=>({components:{UiRadio:n},setup(){const s=v("a");return{args:e,value:s}},template:`
      <div class="flex flex-col gap-2">
        <label class="flex items-center gap-2 cursor-pointer">
          <UiRadio v-model="value" value="a" :disabled="args.disabled" />
          <span>Option A</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <UiRadio v-model="value" value="b" :disabled="args.disabled" />
          <span>Option B</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <UiRadio v-model="value" value="c" :disabled="args.disabled" />
          <span>Option C</span>
        </label>
      </div>
    `})};var o,i,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => ({
    components: {
      UiRadio
    },
    setup() {
      const value = ref('a');
      return {
        args,
        value
      };
    },
    template: \`
      <div class="flex flex-col gap-2">
        <label class="flex items-center gap-2 cursor-pointer">
          <UiRadio v-model="value" value="a" :disabled="args.disabled" />
          <span>Option A</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <UiRadio v-model="value" value="b" :disabled="args.disabled" />
          <span>Option B</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <UiRadio v-model="value" value="c" :disabled="args.disabled" />
          <span>Option C</span>
        </label>
      </div>
    \`
  })
}`,...(r=(i=a.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const V=["Default"];export{a as Default,V as __namedExportsOrder,O as default};
