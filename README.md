# unocss-shadcn [![npm version](https://img.shields.io/npm/v/unocss-shadcn?color=red&logo=npm)](https://www.npmjs.com/package/unocss-shadcn) [![npm downloads](https://img.shields.io/npm/dt/unocss-shadcn?color=red&logo=npm)](https://www.npmjs.com/package/unocss-shadcn) [![MIT license](https://img.shields.io/github/license/retronew/unocss-shadcn)]() [![GitHub stars](https://img.shields.io/github/stars/retronew/unocss-shadcn?color=blue)](https://github.com/retronew/unocss-shadcn)

A collection of UnoCSS utilities for shadcn/vue

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)

## Getting Started

### Installation

1. Install the package with `pnpm`:

   ```sh
   pnpm install -D unocss-shadcn
   ```

2. Add the preset to your UnoCSS configuration file (typically `uno.config.ts` or similar):

   ```javascript
   import { defineConfig } from 'unocss';
   import { presetShadcn } from 'unocss-shadcn';

   export default defineConfig({
     presets: [
       presetShadcn(),
       // other presets...
     ],
     // other configurations...
   });
   ```