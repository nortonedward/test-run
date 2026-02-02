import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ColorSwatch from './components/ColorSwatch.vue';
import PalettePreview from './components/PalettePreview.vue';
import UiButton from './components/UiButton.vue';
import UiAlert from './components/UiAlert.vue';

/* Three full Sanzo Wada bundle options — choose one to apply */
const bundleA = {
  title: 'Bundle A: Warm & Earthy',
  subtitle: 'Off-white, Etruscan Red, Ochraceous Salmon — serene, art-forward',
  surfaces: [
    { label: 'Background', hex: '#ebd999', wada: 'Ivory Buff' },
    { label: 'Surface', hex: '#fffef9', wada: 'Warm paper' },
    { label: 'Foreground', hex: '#362304', wada: 'Vandyke Brown' },
    { label: 'Muted', hex: '#5c7a6d', wada: 'Mineral Gray (dark)' },
    { label: 'Border', hex: '#b89a9d', wada: 'Fawn (dark)' },
  ],
  semantic: [
    { label: 'Primary', hex: '#c98e63', wada: 'Ochraceous Salmon (deep)' },
    { label: 'Primary accent', hex: '#ffcfc4', wada: 'Seashell Pink' },
    { label: 'Secondary', hex: '#c9303e', wada: 'Etruscan Red' },
    { label: 'Success', hex: '#549a7e', wada: 'Artemesia Green (deep)' },
    { label: 'Error', hex: '#a10b2b', wada: 'Carmine Red' },
    { label: 'Warning', hex: '#e8dd7a', wada: 'Naples Yellow (deep)' },
    { label: 'Info', hex: '#202d85', wada: 'Violet Blue' },
  ],
};

const bundleB = {
  title: 'Bundle B: Cool & Calm',
  subtitle: 'Pale King\'s Blue, Cerulian Blue, Glaucous Green — serene, calming',
  surfaces: [
    { label: 'Background', hex: '#e8f5f3', wada: 'Pale King\'s Blue tint' },
    { label: 'Surface', hex: '#fafcfb', wada: 'Cool paper' },
    { label: 'Foreground', hex: '#1b3644', wada: 'Slate Color' },
    { label: 'Muted', hex: '#5c8a73', wada: 'Andover Green' },
    { label: 'Border', hex: '#a6e6db', wada: 'Light Glaucous Blue' },
  ],
  semantic: [
    { label: 'Primary', hex: '#29bdad', wada: 'Cerulian Blue' },
    { label: 'Primary accent', hex: '#b3e8c2', wada: 'Glaucous Green' },
    { label: 'Secondary', hex: '#5c8a73', wada: 'Andover Green' },
    { label: 'Success', hex: '#00d973', wada: 'Benzol Green' },
    { label: 'Error', hex: '#a10b2b', wada: 'Carmine Red' },
    { label: 'Warning', hex: '#f5f5b8', wada: 'Sulpher Yellow' },
    { label: 'Info', hex: '#202d85', wada: 'Violet Blue' },
  ],
};

const bundleC = {
  title: 'Bundle C: Violet & Deep',
  subtitle: 'Grayish Lavender, Dark Soft Violet, Veronia Purple — art, bold',
  surfaces: [
    { label: 'Background', hex: '#f0eef5', wada: 'Lavender tint' },
    { label: 'Surface', hex: '#faf9fc', wada: 'Soft paper' },
    { label: 'Foreground', hex: '#1b3644', wada: 'Slate Color' },
    { label: 'Muted', hex: '#7e3075', wada: 'Veronia Purple' },
    { label: 'Border', hex: '#bfabcc', wada: 'Grayish Lavender B' },
  ],
  semantic: [
    { label: 'Primary', hex: '#4d52de', wada: 'Dark Soft Violet' },
    { label: 'Primary accent', hex: '#b8b8ff', wada: 'Grayish Lavender A' },
    { label: 'Secondary', hex: '#531745', wada: 'Violet Carmine' },
    { label: 'Success', hex: '#56aa69', wada: 'Pistachio Green' },
    { label: 'Error', hex: '#a32100', wada: 'Brick Red' },
    { label: 'Warning', hex: '#ffb852', wada: 'Cream Yellow' },
    { label: 'Info', hex: '#008aa1', wada: 'Antwarp Blue' },
  ],
};

const meta: Meta = {
  title: 'Design/Color Palette',
  parameters: {
    docs: {
      description: {
        component:
          'Sanzo Wada Bundle A: Warm & Earthy. Off-white, Etruscan Red, Ochraceous Salmon.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Surfaces: Story = {
  render: () => ({
    components: { ColorSwatch },
    template: `
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
    `,
  }),
};

export const Primary: Story = {
  render: () => ({
    components: { ColorSwatch },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Primary (Ochraceous Salmon)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-primary" label="Primary" />
          <ColorSwatch token="--color-primary-hover" label="Primary hover" />
          <ColorSwatch token="--color-primary-accent" label="Primary accent" description="Light salmon tint" />
          <ColorSwatch token="--color-primary-foreground" label="Primary foreground" />
        </div>
      </div>
    `,
  }),
};

export const Accent: Story = {
  render: () => ({
    components: { ColorSwatch },
    template: `
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
    `,
  }),
};

export const Secondary: Story = {
  render: () => ({
    components: { ColorSwatch },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Secondary (Etruscan Red)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-secondary" label="Secondary" />
          <ColorSwatch token="--color-secondary-hover" label="Secondary hover" />
          <ColorSwatch token="--color-secondary-accent" label="Secondary accent" description="Seashell Pink" />
          <ColorSwatch token="--color-secondary-foreground" label="Secondary foreground" />
        </div>
      </div>
    `,
  }),
};

export const Success: Story = {
  render: () => ({
    components: { ColorSwatch },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Success (Artemesia Green)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-success" label="Success" />
          <ColorSwatch token="--color-success-hover" label="Success hover" />
          <ColorSwatch token="--color-success-accent" label="Success accent" description="Glaucous Green" />
          <ColorSwatch token="--color-success-foreground" label="Success foreground" />
        </div>
      </div>
    `,
  }),
};

export const Error: Story = {
  render: () => ({
    components: { ColorSwatch },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Error (Carmine Red)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-error" label="Error" />
          <ColorSwatch token="--color-error-hover" label="Error hover" />
          <ColorSwatch token="--color-error-accent" label="Error accent" description="Light rose" />
          <ColorSwatch token="--color-error-foreground" label="Error foreground" />
        </div>
      </div>
    `,
  }),
};

export const Warning: Story = {
  render: () => ({
    components: { ColorSwatch },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Warning (Naples Yellow)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-warning" label="Warning" />
          <ColorSwatch token="--color-warning-hover" label="Warning hover" />
          <ColorSwatch token="--color-warning-accent" label="Warning accent" description="Sulpher Yellow" />
          <ColorSwatch token="--color-warning-foreground" label="Warning foreground" />
        </div>
      </div>
    `,
  }),
};

export const Info: Story = {
  render: () => ({
    components: { ColorSwatch },
    template: `
      <div class="space-y-6">
        <h3 class="text-lg font-semibold text-foreground">Info (Violet Blue)</h3>
        <div class="flex flex-wrap gap-6">
          <ColorSwatch token="--color-info" label="Info" />
          <ColorSwatch token="--color-info-hover" label="Info hover" />
          <ColorSwatch token="--color-info-accent" label="Info accent" description="Grayish Lavender A" />
          <ColorSwatch token="--color-info-foreground" label="Info foreground" />
        </div>
      </div>
    `,
  }),
};

export const AlertBackgrounds: Story = {
  render: () => ({
    components: { ColorSwatch },
    template: `
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
    `,
  }),
};

export const AllColors: Story = {
  render: () => ({
    components: { ColorSwatch },
    template: `
      <div class="space-y-10">
        <div>
          <h2 class="text-xl font-bold text-foreground mb-6">Complete palette</h2>
          <p class="text-muted mb-6">Bundle A: Warm & Earthy — Off-white, Etruscan Red, Ochraceous Salmon.</p>
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
    `,
  }),
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => ({
    components: { ColorSwatch },
    template: `
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
    `,
  }),
};

export const BundleOptions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Three full Sanzo Wada palette bundles. Choose one to apply to tokens.css.',
      },
    },
  },
  render: () => ({
    components: { PalettePreview },
    setup: () => ({ bundleA, bundleB, bundleC }),
    template: `
      <div class="space-y-12">
        <div>
          <h2 class="text-xl font-bold text-foreground mb-2">Choose a bundle</h2>
          <p class="text-muted">Three complete Sanzo Wada palette options. Pick one and we'll apply it.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div class="space-y-6 p-6 rounded-xl border border-border bg-surface">
            <div>
              <h3 class="text-lg font-semibold text-foreground">Bundle A</h3>
              <p class="text-sm text-muted mt-1">Warm & Earthy — Off-white, Ochraceous Salmon</p>
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
              <div class="w-10 h-10 rounded" style="background: #c98e63;"></div>
              <div class="w-10 h-10 rounded" style="background: #549a7e;"></div>
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
    `,
  }),
};

export const InContext: Story = {
  render: () => ({
    components: { UiButton, UiAlert },
    template: `
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
            <UiAlert variant="warning">Warning — Naples Yellow</UiAlert>
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
    `,
  }),
};
