import{d as h,o as r,c as l,a as d,F as _,r as x,g as c,u as m,t as U,f as w,e as y,h as C}from"./iframe-Dky8xwok.js";import{c as p}from"./cn-fNskMoFt.js";import"./preload-helper-Dp1pzeXC.js";const V={class:"flex gap-1 border-b border-border p-1",role:"tablist"},k=["aria-selected","onClick"],B={class:"mt-4",role:"tabpanel"},D="px-4 py-2 rounded-lg font-medium transition-all duration-[var(--duration-normal)] [transition-timing-function:var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",i=h({__name:"UiTabs",props:{tabs:{},modelValue:{default:""},class:{}},emits:["update:modelValue"],setup(n,{emit:v}){const s=n,g=v,o=y(()=>{var e;return s.modelValue||((e=s.tabs[0])==null?void 0:e.id)});function T(e){g("update:modelValue",e)}return(e,q)=>(r(),l("div",{class:c(m(p)("flex flex-col",s.class))},[d("div",V,[(r(!0),l(_,null,x(n.tabs,t=>(r(),l("button",{key:t.id,type:"button",role:"tab","aria-selected":o.value===t.id,class:c(m(p)(D,o.value===t.id?"bg-surface text-foreground shadow-[var(--shadow-button)]":"hover:bg-surface/50 text-muted hover:text-foreground")),onClick:A=>T(t.id)},U(t.label),11,k))),128))]),d("div",B,[w(e.$slots,o.value)])],2))}});i.__docgenInfo={exportName:"default",displayName:"UiTabs",description:"",tags:{},props:[{name:"tabs",description:"Array of tab definitions.",required:!0,type:{name:"Array",elements:[{name:"Tab"}]}},{name:"modelValue",description:"Bound active tab id for v-model.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"class",description:"Additional classes merged via cn().",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"activeId",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/edwardnorton/Development/test-run/packages/ui/src/components/UiTabs.vue"]};const I=[{id:"one",label:"Tab One"},{id:"two",label:"Tab Two"},{id:"three",label:"Tab Three"}],E={component:i,title:"UI/UiTabs"},a={render:()=>({components:{UiTabs:i},setup(){return{active:C("one"),tabs:I}},template:`
      <UiTabs v-model="active" :tabs="tabs" class="max-w-md">
        <template #one>
          <p>Content for tab one.</p>
        </template>
        <template #two>
          <p>Content for tab two.</p>
        </template>
        <template #three>
          <p>Content for tab three.</p>
        </template>
      </UiTabs>
    `})};var u,b,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiTabs
    },
    setup() {
      const active = ref('one');
      return {
        active,
        tabs
      };
    },
    template: \`
      <UiTabs v-model="active" :tabs="tabs" class="max-w-md">
        <template #one>
          <p>Content for tab one.</p>
        </template>
        <template #two>
          <p>Content for tab two.</p>
        </template>
        <template #three>
          <p>Content for tab three.</p>
        </template>
      </UiTabs>
    \`
  })
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const O=["Default"];export{a as Default,O as __namedExportsOrder,E as default};
