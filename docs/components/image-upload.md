# Image Upload

File input with drag-and-drop, preview, and optional aspect ratio. Uses native File API and FileReader.

<PropsTable component="UiImageUpload" />

## Live preview

<ImageUploadDemo />

## Usage

```vue
<UiImageUpload v-model="imageUrl" aspect="square" />
<UiImageUpload v-model="imageUrl" aspect="wide" :max-size="5 * 1024 * 1024" />
```
