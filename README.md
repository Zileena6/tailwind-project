#### Vite & Tailwind project

[Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

```sh
npm create vite@latest my-project -- --template react
```

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Tailwind directives are instructions that decide how Tailwind CSS creates the styles for your website. They control the global styles, component styles, and utility classes.

#### Assets

- images from Undraw
  [Undraw Docs](https://undraw.co/)

#### Install More Libraries

```sh
npm i nanoid react-icons
```

#### Useful Tailwind Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold)

#### Repeating Styles

index.css

```css
@layer components {
  .align-element {
    @apply mx-auto max-w-7xl px-8;
  }
}
```

#### Colors

https://tailwindcss.com/docs/customizing-colors#default-color-palette

- Purple
- Slate
- Gray
