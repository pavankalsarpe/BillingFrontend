# React + TypeScript + Vite
# Billing Dashboard

A simple billing dashboard built with React, TypeScript, Redux Toolkit, and Tailwind CSS.

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm (comes with Node.js)

## Setup Instructions

1. Open terminal in `BillingProject`.
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Runs app in development mode with hot reload
- `npm run build` - Type-checks and creates production build
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint checks

## Tech Stack

- React 19
- TypeScript
- Redux Toolkit + React Redux
- Vite
- Tailwind CSS

## How It Works

The application is split into three UI sections:

- `Product List`: Shows fixed product data and allows adding items to the cart.
- `Cart`: Displays selected items with quantity increase/decrease controls.
- `Bill Summary`: Shows offer details, applied savings, subtotal, and final total.

State management uses Redux Toolkit:

- `cartSlice` stores cart items.
- Actions (`addToCart`, `increaseQuantity`, `decreaseQuantity`) update quantity and remove entries when quantity reaches zero.

Pricing and discount calculations are handled in `src/utils/pricing.ts`:

- Calculates subtotal from cart items.
- Applies eligible offers.
- Computes total savings and final payable amount.

## Project Structure

```text
src/
  app/
    store.ts
  components/
    ProductList.tsx
    Cart.tsx
    BillSummary.tsx
  features/
    cart/
      cartSlice.ts
  types/
    index.ts
  utils/
    pricing.ts
  App.tsx
  main.tsx
```

## Notes

- Currency is formatted using INR locale (`en-IN`).
- Products are currently defined as static data in `src/App.tsx`.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
