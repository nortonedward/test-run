import{d as se,c as n,a as r,n as de,t as a,b as S,e as ue,o as t,F as be,r as ge}from"./iframe-Dky8xwok.js";import{_ as fe}from"./UiButton-Q2PtlWQY.js";import{_ as he}from"./UiAlert-CIt0S3NC.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-fNskMoFt.js";const pe={class:"flex flex-col gap-1 min-w-[8rem]"},ve={class:"text-sm font-medium text-foreground"},me={key:0,class:"text-xs text-muted"},we=["title"],o=se({__name:"ColorSwatch",props:{token:{},label:{default:void 0},description:{default:void 0},variant:{default:"fill"}},setup(e){const x=e,k=ue(()=>x.label??x.token.replace("--color-","").replace(/-/g," "));return(l,We)=>(t(),n("div",pe,[r("div",{class:"h-14 rounded-lg transition-colors",style:de(e.variant==="fill"?{backgroundColor:`var(${e.token})`,border:"1px solid var(--color-border)"}:{backgroundColor:"var(--color-surface)",border:`3px solid var(${e.token})`})},null,4),r("div",ve,a(k.value),1),e.description?(t(),n("div",me,a(e.description),1)):S("",!0),r("code",{class:"text-xs text-muted font-mono truncate",title:e.token},a(e.token),9,we)]))}});o.__docgenInfo={exportName:"default",displayName:"ColorSwatch",description:"",tags:{},props:[{name:"token",description:"CSS variable name (e.g. --color-primary)",required:!0,type:{name:"string"}},{name:"label",description:"Display label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"description",description:"Optional description",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"variant",description:"Show border instead of background (for light colors)",required:!1,type:{name:"union",elements:[{name:'"fill"'},{name:'"border"'}]},defaultValue:{func:!1,value:"'fill'"}}],sourceFiles:["/Users/edwardnorton/Development/test-run/packages/ui/src/components/ColorSwatch.vue"]};const xe={class:"space-y-4"},Se={class:"text-base font-semibold text-foreground"},ke={key:0,class:"text-xs text-muted mt-0.5"},ye={class:"flex flex-wrap gap-3"},Ce={class:"text-xs font-medium text-foreground"},Be={key:0,class:"text-[10px] text-muted"},Pe={class:"text-[10px] text-muted font-mono"},ie=se({__name:"PalettePreview",props:{title:{},subtitle:{},colors:{}},setup(e){return(x,k)=>(t(),n("div",xe,[r("div",null,[r("h3",Se,a(e.title),1),e.subtitle?(t(),n("p",ke,a(e.subtitle),1)):S("",!0)]),r("div",ye,[(t(!0),n(be,null,ge(e.colors,l=>(t(),n("div",{key:l.label,class:"flex flex-col gap-1 min-w-[7rem]"},[r("div",{class:"h-12 rounded-lg border border-black/8",style:de({backgroundColor:l.hex})},null,4),r("div",Ce,a(l.label),1),l.wada?(t(),n("div",Be,a(l.wada),1)):S("",!0),r("code",Pe,a(l.hex),1)]))),128))])]))}});ie.__docgenInfo={exportName:"default",displayName:"PalettePreview",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"subtitle",required:!1,type:{name:"string"}},{name:"colors",required:!0,type:{name:"Array",elements:[{name:"ColorDef"}]}}],sourceFiles:["/Users/edwardnorton/Development/test-run/packages/ui/src/components/PalettePreview.vue"]};const Ae={title:"Bundle A: Warm & Earthy",subtitle:"Ivory Buff, Etruscan Red, Ochraceous Salmon — serene, art-forward",surfaces:[{label:"Background",hex:"#ebd999",wada:"Ivory Buff"},{label:"Surface",hex:"#fffef9",wada:"Warm paper"},{label:"Foreground",hex:"#362304",wada:"Vandyke Brown"},{label:"Muted",hex:"#9fc2b2",wada:"Mineral Gray"},{label:"Border",hex:"#d1b0b3",wada:"Fawn"}],semantic:[{label:"Primary",hex:"#c9303e",wada:"Etruscan Red"},{label:"Primary accent",hex:"#ffcfc4",wada:"Seashell Pink"},{label:"Secondary",hex:"#d99e73",wada:"Ochraceous Salmon"},{label:"Success",hex:"#65a98f",wada:"Artemesia Green"},{label:"Error",hex:"#a10b2b",wada:"Carmine Red"},{label:"Warning",hex:"#faed8f",wada:"Naples Yellow"},{label:"Info",hex:"#202d85",wada:"Violet Blue"}]},Ue={title:"Bundle B: Cool & Calm",subtitle:"Pale King's Blue, Cerulian Blue, Glaucous Green — serene, calming",surfaces:[{label:"Background",hex:"#e8f5f3",wada:"Pale King's Blue tint"},{label:"Surface",hex:"#fafcfb",wada:"Cool paper"},{label:"Foreground",hex:"#1b3644",wada:"Slate Color"},{label:"Muted",hex:"#5c8a73",wada:"Andover Green"},{label:"Border",hex:"#a6e6db",wada:"Light Glaucous Blue"}],semantic:[{label:"Primary",hex:"#29bdad",wada:"Cerulian Blue"},{label:"Primary accent",hex:"#b3e8c2",wada:"Glaucous Green"},{label:"Secondary",hex:"#5c8a73",wada:"Andover Green"},{label:"Success",hex:"#00d973",wada:"Benzol Green"},{label:"Error",hex:"#a10b2b",wada:"Carmine Red"},{label:"Warning",hex:"#f5f5b8",wada:"Sulpher Yellow"},{label:"Info",hex:"#202d85",wada:"Violet Blue"}]},Ge={title:"Bundle C: Violet & Deep",subtitle:"Grayish Lavender, Dark Soft Violet, Veronia Purple — art, bold",surfaces:[{label:"Background",hex:"#f0eef5",wada:"Lavender tint"},{label:"Surface",hex:"#faf9fc",wada:"Soft paper"},{label:"Foreground",hex:"#1b3644",wada:"Slate Color"},{label:"Muted",hex:"#7e3075",wada:"Veronia Purple"},{label:"Border",hex:"#bfabcc",wada:"Grayish Lavender B"}],semantic:[{label:"Primary",hex:"#4d52de",wada:"Dark Soft Violet"},{label:"Primary accent",hex:"#b8b8ff",wada:"Grayish Lavender A"},{label:"Secondary",hex:"#531745",wada:"Violet Carmine"},{label:"Success",hex:"#56aa69",wada:"Pistachio Green"},{label:"Error",hex:"#a32100",wada:"Brick Red"},{label:"Warning",hex:"#ffb852",wada:"Cream Yellow"},{label:"Info",hex:"#008aa1",wada:"Antwarp Blue"}]},Le={title:"Design/Color Palette",parameters:{docs:{description:{component:"Sanzo Wada Dictionary of Color Combinations — Serenity · Calming · Art · Bold. Dark Soft Violet, Vistoris Lake, Artemesia Green, Carmine Red, Golden Yellow, Violet Blue."}}}},c={render:()=>({components:{ColorSwatch:o},template:`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Surfaces</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-background" label="Background" description="Page background" />
          <ColorSwatch token="--color-background-top" label="Background top" description="Gradient start" />
          <ColorSwatch token="--color-surface" label="Surface" description="Cards, panels" />
          <ColorSwatch token="--color-foreground" label="Foreground" description="Primary text" />
          <ColorSwatch token="--color-muted" label="Muted" description="Secondary text" />
          <ColorSwatch token="--color-border" label="Border" description="Dividers, outlines" />
        </div>
      </div>
    `})},s={render:()=>({components:{ColorSwatch:o},template:`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Primary (Dark Soft Violet)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-primary" label="Primary" />
          <ColorSwatch token="--color-primary-hover" label="Primary hover" />
          <ColorSwatch token="--color-primary-accent" label="Primary accent" description="Grayish Lavender A" />
          <ColorSwatch token="--color-primary-foreground" label="Primary foreground" />
        </div>
      </div>
    `})},d={render:()=>({components:{ColorSwatch:o},template:`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Main CTA Accent</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-accent" label="Accent" />
          <ColorSwatch token="--color-accent-top" label="Accent top" description="Gradient" />
          <ColorSwatch token="--color-accent-hover" label="Accent hover" />
          <ColorSwatch token="--color-accent-hover-top" label="Accent hover top" />
          <ColorSwatch token="--color-accent-foreground" label="Accent foreground" />
        </div>
      </div>
    `})},i={render:()=>({components:{ColorSwatch:o},template:`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Secondary (Vistoris Lake)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-secondary" label="Secondary" />
          <ColorSwatch token="--color-secondary-hover" label="Secondary hover" />
          <ColorSwatch token="--color-secondary-accent" label="Secondary accent" description="Grayish Lavender B" />
          <ColorSwatch token="--color-secondary-foreground" label="Secondary foreground" />
        </div>
      </div>
    `})},u={render:()=>({components:{ColorSwatch:o},template:`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Success (Artemesia Green)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-success" label="Success" />
          <ColorSwatch token="--color-success-hover" label="Success hover" />
          <ColorSwatch token="--color-success-accent" label="Success accent" description="Glaucous Green" />
          <ColorSwatch token="--color-success-foreground" label="Success foreground" />
        </div>
      </div>
    `})},b={render:()=>({components:{ColorSwatch:o},template:`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Error (Carmine Red)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-error" label="Error" />
          <ColorSwatch token="--color-error-hover" label="Error hover" />
          <ColorSwatch token="--color-error-accent" label="Error accent" description="Light rose" />
          <ColorSwatch token="--color-error-foreground" label="Error foreground" />
        </div>
      </div>
    `})},g={render:()=>({components:{ColorSwatch:o},template:`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Warning (Golden Yellow)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-warning" label="Warning" />
          <ColorSwatch token="--color-warning-hover" label="Warning hover" />
          <ColorSwatch token="--color-warning-accent" label="Warning accent" description="Pale Lemon Yellow" />
          <ColorSwatch token="--color-warning-foreground" label="Warning foreground" />
        </div>
      </div>
    `})},f={render:()=>({components:{ColorSwatch:o},template:`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Info (Violet Blue)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-info" label="Info" />
          <ColorSwatch token="--color-info-hover" label="Info hover" />
          <ColorSwatch token="--color-info-accent" label="Info accent" description="Grayish Lavender A" />
          <ColorSwatch token="--color-info-foreground" label="Info foreground" />
        </div>
      </div>
    `})},h={render:()=>({components:{ColorSwatch:o},template:`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Alert backgrounds (translucent)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-primary-bg" label="Primary bg" />
          <ColorSwatch token="--color-secondary-bg" label="Secondary bg" />
          <ColorSwatch token="--color-success-bg" label="Success bg" />
          <ColorSwatch token="--color-error-bg" label="Error bg" />
          <ColorSwatch token="--color-warning-bg" label="Warning bg" />
          <ColorSwatch token="--color-info-bg" label="Info bg" />
        </div>
      </div>
    `})},p={render:()=>({components:{ColorSwatch:o},template:`
      <div class="space-y-10">
        <div>
          <h2 class="text-xl font-bold text-foreground mb-6">Complete palette</h2>
          <p class="text-muted mb-6">Sanzo Wada — Serenity · Calming · Art · Bold. Dark Soft Violet, Vistoris Lake, Artemesia Green, Carmine Red, Golden Yellow, Violet Blue.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Surfaces</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-background" label="Background" />
            <ColorSwatch token="--color-surface" label="Surface" />
            <ColorSwatch token="--color-foreground" label="Foreground" />
            <ColorSwatch token="--color-muted" label="Muted" />
            <ColorSwatch token="--color-border" label="Border" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Primary</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-primary" label="Primary" />
            <ColorSwatch token="--color-primary-hover" label="Primary hover" />
            <ColorSwatch token="--color-primary-accent" label="Primary accent" />
            <ColorSwatch token="--color-primary-foreground" label="Primary foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Accent (CTA)</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-accent" label="Accent" />
            <ColorSwatch token="--color-accent-hover" label="Accent hover" />
            <ColorSwatch token="--color-accent-foreground" label="Accent foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Secondary</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-secondary" label="Secondary" />
            <ColorSwatch token="--color-secondary-hover" label="Secondary hover" />
            <ColorSwatch token="--color-secondary-accent" label="Secondary accent" />
            <ColorSwatch token="--color-secondary-foreground" label="Secondary foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Success</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-success" label="Success" />
            <ColorSwatch token="--color-success-hover" label="Success hover" />
            <ColorSwatch token="--color-success-accent" label="Success accent" />
            <ColorSwatch token="--color-success-foreground" label="Success foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Error</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-error" label="Error" />
            <ColorSwatch token="--color-error-hover" label="Error hover" />
            <ColorSwatch token="--color-error-accent" label="Error accent" />
            <ColorSwatch token="--color-error-foreground" label="Error foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Warning</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-warning" label="Warning" />
            <ColorSwatch token="--color-warning-hover" label="Warning hover" />
            <ColorSwatch token="--color-warning-accent" label="Warning accent" />
            <ColorSwatch token="--color-warning-foreground" label="Warning foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Info</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-info" label="Info" />
            <ColorSwatch token="--color-info-hover" label="Info hover" />
            <ColorSwatch token="--color-info-accent" label="Info accent" />
            <ColorSwatch token="--color-info-foreground" label="Info foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Alert backgrounds</h3>
          <div class="flex flex-wrap gap-6">
            <ColorSwatch token="--color-primary-bg" label="Primary bg" />
            <ColorSwatch token="--color-secondary-bg" label="Secondary bg" />
            <ColorSwatch token="--color-success-bg" label="Success bg" />
            <ColorSwatch token="--color-error-bg" label="Error bg" />
            <ColorSwatch token="--color-warning-bg" label="Warning bg" />
            <ColorSwatch token="--color-info-bg" label="Info bg" />
          </div>
        </div>
      </div>
    `})},v={parameters:{backgrounds:{default:"dark"}},render:()=>({components:{ColorSwatch:o},template:`
      <div class="dark bg-background p-8 rounded-lg min-h-[400px]">
        <h2 class="text-xl font-bold text-foreground mb-6">Dark mode palette</h2>
        <p class="text-muted mb-6">Toggle Storybook's background or add class "dark" to see dark theme tokens.</p>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-foreground mb-4">Surfaces</h3>
            <div class="flex flex-wrap gap-6">
              <ColorSwatch token="--color-background" label="Background" />
              <ColorSwatch token="--color-surface" label="Surface" />
              <ColorSwatch token="--color-foreground" label="Foreground" />
              <ColorSwatch token="--color-muted" label="Muted" />
              <ColorSwatch token="--color-border" label="Border" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-foreground mb-4">Semantic colors</h3>
            <div class="flex flex-wrap gap-6">
              <ColorSwatch token="--color-primary" label="Primary" />
              <ColorSwatch token="--color-primary-accent" label="Primary accent" />
              <ColorSwatch token="--color-success" label="Success" />
              <ColorSwatch token="--color-error" label="Error" />
              <ColorSwatch token="--color-warning" label="Warning" />
              <ColorSwatch token="--color-info" label="Info" />
            </div>
          </div>
        </div>
      </div>
    `})},m={parameters:{docs:{description:{story:"Three full Sanzo Wada palette bundles. Choose one to apply to tokens.css."}}},render:()=>({components:{PalettePreview:ie},setup:()=>({bundleA:Ae,bundleB:Ue,bundleC:Ge}),template:`
      <div class="space-y-12">
        <div>
          <h2 class="text-xl font-bold text-foreground mb-2">Choose a bundle</h2>
          <p class="text-muted">Three complete Sanzo Wada palette options. Pick one and we'll apply it.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div class="space-y-6 p-6 rounded-xl border border-border bg-surface">
            <div>
              <h3 class="text-lg font-semibold text-foreground">Bundle A</h3>
              <p class="text-sm text-muted mt-1">Warm & Earthy — Ivory Buff, Etruscan Red</p>
            </div>
            <PalettePreview title="Surfaces" :colors="bundleA.surfaces" />
            <PalettePreview title="Semantic" :colors="bundleA.semantic" />
          </div>
          <div class="space-y-6 p-6 rounded-xl border border-border bg-surface">
            <div>
              <h3 class="text-lg font-semibold text-foreground">Bundle B</h3>
              <p class="text-sm text-muted mt-1">Cool & Calm — Cerulian Blue, Glaucous Green</p>
            </div>
            <PalettePreview title="Surfaces" :colors="bundleB.surfaces" />
            <PalettePreview title="Semantic" :colors="bundleB.semantic" />
          </div>
          <div class="space-y-6 p-6 rounded-xl border border-border bg-surface">
            <div>
              <h3 class="text-lg font-semibold text-foreground">Bundle C</h3>
              <p class="text-sm text-muted mt-1">Violet & Deep — Dark Soft Violet, Veronia Purple</p>
            </div>
            <PalettePreview title="Surfaces" :colors="bundleC.surfaces" />
            <PalettePreview title="Semantic" :colors="bundleC.semantic" />
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div class="p-6 rounded-xl" style="background: #ebd999;">
            <p class="text-sm font-medium mb-2" style="color: #362304;">Bundle A preview</p>
            <div class="flex gap-2 flex-wrap">
              <div class="w-10 h-10 rounded" style="background: #c9303e;"></div>
              <div class="w-10 h-10 rounded" style="background: #d99e73;"></div>
              <div class="w-10 h-10 rounded" style="background: #65a98f;"></div>
              <div class="w-10 h-10 rounded" style="background: #202d85;"></div>
            </div>
          </div>
          <div class="p-6 rounded-xl" style="background: #e8f5f3;">
            <p class="text-sm font-medium mb-2" style="color: #1b3644;">Bundle B preview</p>
            <div class="flex gap-2 flex-wrap">
              <div class="w-10 h-10 rounded" style="background: #29bdad;"></div>
              <div class="w-10 h-10 rounded" style="background: #5c8a73;"></div>
              <div class="w-10 h-10 rounded" style="background: #00d973;"></div>
              <div class="w-10 h-10 rounded" style="background: #202d85;"></div>
            </div>
          </div>
          <div class="p-6 rounded-xl" style="background: #f0eef5;">
            <p class="text-sm font-medium mb-2" style="color: #1b3644;">Bundle C preview</p>
            <div class="flex gap-2 flex-wrap">
              <div class="w-10 h-10 rounded" style="background: #4d52de;"></div>
              <div class="w-10 h-10 rounded" style="background: #531745;"></div>
              <div class="w-10 h-10 rounded" style="background: #56aa69;"></div>
              <div class="w-10 h-10 rounded" style="background: #008aa1;"></div>
            </div>
          </div>
        </div>
      </div>
    `})},w={render:()=>({components:{UiButton:fe,UiAlert:he},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Buttons (all variants)</h3>
          <div class="flex flex-wrap gap-4">
            <UiButton variant="primary">Primary</UiButton>
            <UiButton variant="secondary">Secondary</UiButton>
            <UiButton variant="ghost">Ghost</UiButton>
            <UiButton variant="success">Success</UiButton>
            <UiButton variant="error">Error</UiButton>
            <UiButton variant="warning">Warning</UiButton>
            <UiButton variant="info">Info</UiButton>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Alerts</h3>
          <div class="flex flex-col gap-4">
            <UiAlert variant="success">Success — Artemesia Green</UiAlert>
            <UiAlert variant="warning">Warning — Golden Yellow</UiAlert>
            <UiAlert variant="error">Error — Carmine Red</UiAlert>
            <UiAlert variant="info">Info — Violet Blue</UiAlert>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Accent backgrounds</h3>
          <div class="flex flex-wrap gap-4">
            <div class="bg-primary-accent border border-primary rounded-lg px-4 py-3 text-primary">Primary accent</div>
            <div class="bg-secondary-accent border border-secondary rounded-lg px-4 py-3 text-secondary-foreground">Secondary accent</div>
            <div class="bg-success-accent border border-success rounded-lg px-4 py-3 text-success-foreground">Success accent</div>
            <div class="bg-error-accent border border-error rounded-lg px-4 py-3 text-error">Error accent</div>
            <div class="bg-warning-accent border border-warning rounded-lg px-4 py-3 text-warning-foreground">Warning accent</div>
            <div class="bg-info-accent border border-info rounded-lg px-4 py-3 text-info-foreground">Info accent</div>
          </div>
        </div>
      </div>
    `})};var y,C,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    template: \`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Surfaces</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-background" label="Background" description="Page background" />
          <ColorSwatch token="--color-background-top" label="Background top" description="Gradient start" />
          <ColorSwatch token="--color-surface" label="Surface" description="Cards, panels" />
          <ColorSwatch token="--color-foreground" label="Foreground" description="Primary text" />
          <ColorSwatch token="--color-muted" label="Muted" description="Secondary text" />
          <ColorSwatch token="--color-border" label="Border" description="Dividers, outlines" />
        </div>
      </div>
    \`
  })
}`,...(B=(C=c.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var P,A,U;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    template: \`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Primary (Dark Soft Violet)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-primary" label="Primary" />
          <ColorSwatch token="--color-primary-hover" label="Primary hover" />
          <ColorSwatch token="--color-primary-accent" label="Primary accent" description="Grayish Lavender A" />
          <ColorSwatch token="--color-primary-foreground" label="Primary foreground" />
        </div>
      </div>
    \`
  })
}`,...(U=(A=s.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var G,W,E;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    template: \`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Main CTA Accent</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-accent" label="Accent" />
          <ColorSwatch token="--color-accent-top" label="Accent top" description="Gradient" />
          <ColorSwatch token="--color-accent-hover" label="Accent hover" />
          <ColorSwatch token="--color-accent-hover-top" label="Accent hover top" />
          <ColorSwatch token="--color-accent-foreground" label="Accent foreground" />
        </div>
      </div>
    \`
  })
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var I,V,_;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    template: \`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Secondary (Vistoris Lake)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-secondary" label="Secondary" />
          <ColorSwatch token="--color-secondary-hover" label="Secondary hover" />
          <ColorSwatch token="--color-secondary-accent" label="Secondary accent" description="Grayish Lavender B" />
          <ColorSwatch token="--color-secondary-foreground" label="Secondary foreground" />
        </div>
      </div>
    \`
  })
}`,...(_=(V=i.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var D,L,F;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    template: \`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Success (Artemesia Green)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-success" label="Success" />
          <ColorSwatch token="--color-success-hover" label="Success hover" />
          <ColorSwatch token="--color-success-accent" label="Success accent" description="Glaucous Green" />
          <ColorSwatch token="--color-success-foreground" label="Success foreground" />
        </div>
      </div>
    \`
  })
}`,...(F=(L=u.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var M,R,Y;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    template: \`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Error (Carmine Red)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-error" label="Error" />
          <ColorSwatch token="--color-error-hover" label="Error hover" />
          <ColorSwatch token="--color-error-accent" label="Error accent" description="Light rose" />
          <ColorSwatch token="--color-error-foreground" label="Error foreground" />
        </div>
      </div>
    \`
  })
}`,...(Y=(R=b.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var T,z,$;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    template: \`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Warning (Golden Yellow)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-warning" label="Warning" />
          <ColorSwatch token="--color-warning-hover" label="Warning hover" />
          <ColorSwatch token="--color-warning-accent" label="Warning accent" description="Pale Lemon Yellow" />
          <ColorSwatch token="--color-warning-foreground" label="Warning foreground" />
        </div>
      </div>
    \`
  })
}`,...($=(z=g.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var q,N,O;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    template: \`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Info (Violet Blue)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-info" label="Info" />
          <ColorSwatch token="--color-info-hover" label="Info hover" />
          <ColorSwatch token="--color-info-accent" label="Info accent" description="Grayish Lavender A" />
          <ColorSwatch token="--color-info-foreground" label="Info foreground" />
        </div>
      </div>
    \`
  })
}`,...(O=(N=f.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var K,j,H;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    template: \`
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Alert backgrounds (translucent)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-primary-bg" label="Primary bg" />
          <ColorSwatch token="--color-secondary-bg" label="Secondary bg" />
          <ColorSwatch token="--color-success-bg" label="Success bg" />
          <ColorSwatch token="--color-error-bg" label="Error bg" />
          <ColorSwatch token="--color-warning-bg" label="Warning bg" />
          <ColorSwatch token="--color-info-bg" label="Info bg" />
        </div>
      </div>
    \`
  })
}`,...(H=(j=h.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var J,Q,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorSwatch
    },
    template: \`
      <div class="space-y-10">
        <div>
          <h2 class="text-xl font-bold text-foreground mb-6">Complete palette</h2>
          <p class="text-muted mb-6">Sanzo Wada — Serenity · Calming · Art · Bold. Dark Soft Violet, Vistoris Lake, Artemesia Green, Carmine Red, Golden Yellow, Violet Blue.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Surfaces</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-background" label="Background" />
            <ColorSwatch token="--color-surface" label="Surface" />
            <ColorSwatch token="--color-foreground" label="Foreground" />
            <ColorSwatch token="--color-muted" label="Muted" />
            <ColorSwatch token="--color-border" label="Border" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Primary</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-primary" label="Primary" />
            <ColorSwatch token="--color-primary-hover" label="Primary hover" />
            <ColorSwatch token="--color-primary-accent" label="Primary accent" />
            <ColorSwatch token="--color-primary-foreground" label="Primary foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Accent (CTA)</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-accent" label="Accent" />
            <ColorSwatch token="--color-accent-hover" label="Accent hover" />
            <ColorSwatch token="--color-accent-foreground" label="Accent foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Secondary</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-secondary" label="Secondary" />
            <ColorSwatch token="--color-secondary-hover" label="Secondary hover" />
            <ColorSwatch token="--color-secondary-accent" label="Secondary accent" />
            <ColorSwatch token="--color-secondary-foreground" label="Secondary foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Success</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-success" label="Success" />
            <ColorSwatch token="--color-success-hover" label="Success hover" />
            <ColorSwatch token="--color-success-accent" label="Success accent" />
            <ColorSwatch token="--color-success-foreground" label="Success foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Error</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-error" label="Error" />
            <ColorSwatch token="--color-error-hover" label="Error hover" />
            <ColorSwatch token="--color-error-accent" label="Error accent" />
            <ColorSwatch token="--color-error-foreground" label="Error foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Warning</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-warning" label="Warning" />
            <ColorSwatch token="--color-warning-hover" label="Warning hover" />
            <ColorSwatch token="--color-warning-accent" label="Warning accent" />
            <ColorSwatch token="--color-warning-foreground" label="Warning foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Info</h3>
          <div class="flex flex-wrap gap-6 mb-8">
            <ColorSwatch token="--color-info" label="Info" />
            <ColorSwatch token="--color-info-hover" label="Info hover" />
            <ColorSwatch token="--color-info-accent" label="Info accent" />
            <ColorSwatch token="--color-info-foreground" label="Info foreground" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Alert backgrounds</h3>
          <div class="flex flex-wrap gap-6">
            <ColorSwatch token="--color-primary-bg" label="Primary bg" />
            <ColorSwatch token="--color-secondary-bg" label="Secondary bg" />
            <ColorSwatch token="--color-success-bg" label="Success bg" />
            <ColorSwatch token="--color-error-bg" label="Error bg" />
            <ColorSwatch token="--color-warning-bg" label="Warning bg" />
            <ColorSwatch token="--color-info-bg" label="Info bg" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,oe;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => ({
    components: {
      ColorSwatch
    },
    template: \`
      <div class="dark bg-background p-8 rounded-lg min-h-[400px]">
        <h2 class="text-xl font-bold text-foreground mb-6">Dark mode palette</h2>
        <p class="text-muted mb-6">Toggle Storybook's background or add class "dark" to see dark theme tokens.</p>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-foreground mb-4">Surfaces</h3>
            <div class="flex flex-wrap gap-6">
              <ColorSwatch token="--color-background" label="Background" />
              <ColorSwatch token="--color-surface" label="Surface" />
              <ColorSwatch token="--color-foreground" label="Foreground" />
              <ColorSwatch token="--color-muted" label="Muted" />
              <ColorSwatch token="--color-border" label="Border" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-foreground mb-4">Semantic colors</h3>
            <div class="flex flex-wrap gap-6">
              <ColorSwatch token="--color-primary" label="Primary" />
              <ColorSwatch token="--color-primary-accent" label="Primary accent" />
              <ColorSwatch token="--color-success" label="Success" />
              <ColorSwatch token="--color-error" label="Error" />
              <ColorSwatch token="--color-warning" label="Warning" />
              <ColorSwatch token="--color-info" label="Info" />
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(oe=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,ae,le;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Three full Sanzo Wada palette bundles. Choose one to apply to tokens.css.'
      }
    }
  },
  render: () => ({
    components: {
      PalettePreview
    },
    setup: () => ({
      bundleA,
      bundleB,
      bundleC
    }),
    template: \`
      <div class="space-y-12">
        <div>
          <h2 class="text-xl font-bold text-foreground mb-2">Choose a bundle</h2>
          <p class="text-muted">Three complete Sanzo Wada palette options. Pick one and we'll apply it.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div class="space-y-6 p-6 rounded-xl border border-border bg-surface">
            <div>
              <h3 class="text-lg font-semibold text-foreground">Bundle A</h3>
              <p class="text-sm text-muted mt-1">Warm & Earthy — Ivory Buff, Etruscan Red</p>
            </div>
            <PalettePreview title="Surfaces" :colors="bundleA.surfaces" />
            <PalettePreview title="Semantic" :colors="bundleA.semantic" />
          </div>
          <div class="space-y-6 p-6 rounded-xl border border-border bg-surface">
            <div>
              <h3 class="text-lg font-semibold text-foreground">Bundle B</h3>
              <p class="text-sm text-muted mt-1">Cool & Calm — Cerulian Blue, Glaucous Green</p>
            </div>
            <PalettePreview title="Surfaces" :colors="bundleB.surfaces" />
            <PalettePreview title="Semantic" :colors="bundleB.semantic" />
          </div>
          <div class="space-y-6 p-6 rounded-xl border border-border bg-surface">
            <div>
              <h3 class="text-lg font-semibold text-foreground">Bundle C</h3>
              <p class="text-sm text-muted mt-1">Violet & Deep — Dark Soft Violet, Veronia Purple</p>
            </div>
            <PalettePreview title="Surfaces" :colors="bundleC.surfaces" />
            <PalettePreview title="Semantic" :colors="bundleC.semantic" />
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div class="p-6 rounded-xl" style="background: #ebd999;">
            <p class="text-sm font-medium mb-2" style="color: #362304;">Bundle A preview</p>
            <div class="flex gap-2 flex-wrap">
              <div class="w-10 h-10 rounded" style="background: #c9303e;"></div>
              <div class="w-10 h-10 rounded" style="background: #d99e73;"></div>
              <div class="w-10 h-10 rounded" style="background: #65a98f;"></div>
              <div class="w-10 h-10 rounded" style="background: #202d85;"></div>
            </div>
          </div>
          <div class="p-6 rounded-xl" style="background: #e8f5f3;">
            <p class="text-sm font-medium mb-2" style="color: #1b3644;">Bundle B preview</p>
            <div class="flex gap-2 flex-wrap">
              <div class="w-10 h-10 rounded" style="background: #29bdad;"></div>
              <div class="w-10 h-10 rounded" style="background: #5c8a73;"></div>
              <div class="w-10 h-10 rounded" style="background: #00d973;"></div>
              <div class="w-10 h-10 rounded" style="background: #202d85;"></div>
            </div>
          </div>
          <div class="p-6 rounded-xl" style="background: #f0eef5;">
            <p class="text-sm font-medium mb-2" style="color: #1b3644;">Bundle C preview</p>
            <div class="flex gap-2 flex-wrap">
              <div class="w-10 h-10 rounded" style="background: #4d52de;"></div>
              <div class="w-10 h-10 rounded" style="background: #531745;"></div>
              <div class="w-10 h-10 rounded" style="background: #56aa69;"></div>
              <div class="w-10 h-10 rounded" style="background: #008aa1;"></div>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(le=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ne,te,ce;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiButton,
      UiAlert
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Buttons (all variants)</h3>
          <div class="flex flex-wrap gap-4">
            <UiButton variant="primary">Primary</UiButton>
            <UiButton variant="secondary">Secondary</UiButton>
            <UiButton variant="ghost">Ghost</UiButton>
            <UiButton variant="success">Success</UiButton>
            <UiButton variant="error">Error</UiButton>
            <UiButton variant="warning">Warning</UiButton>
            <UiButton variant="info">Info</UiButton>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Alerts</h3>
          <div class="flex flex-col gap-4">
            <UiAlert variant="success">Success — Artemesia Green</UiAlert>
            <UiAlert variant="warning">Warning — Golden Yellow</UiAlert>
            <UiAlert variant="error">Error — Carmine Red</UiAlert>
            <UiAlert variant="info">Info — Violet Blue</UiAlert>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-4">Accent backgrounds</h3>
          <div class="flex flex-wrap gap-4">
            <div class="bg-primary-accent border border-primary rounded-lg px-4 py-3 text-primary">Primary accent</div>
            <div class="bg-secondary-accent border border-secondary rounded-lg px-4 py-3 text-secondary-foreground">Secondary accent</div>
            <div class="bg-success-accent border border-success rounded-lg px-4 py-3 text-success-foreground">Success accent</div>
            <div class="bg-error-accent border border-error rounded-lg px-4 py-3 text-error">Error accent</div>
            <div class="bg-warning-accent border border-warning rounded-lg px-4 py-3 text-warning-foreground">Warning accent</div>
            <div class="bg-info-accent border border-info rounded-lg px-4 py-3 text-info-foreground">Info accent</div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(ce=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ce.source}}};const Fe=["Surfaces","Primary","Accent","Secondary","Success","Error","Warning","Info","AlertBackgrounds","AllColors","DarkMode","BundleOptions","InContext"];export{d as Accent,h as AlertBackgrounds,p as AllColors,m as BundleOptions,v as DarkMode,b as Error,w as InContext,f as Info,s as Primary,i as Secondary,u as Success,c as Surfaces,g as Warning,Fe as __namedExportsOrder,Le as default};
