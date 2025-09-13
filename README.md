# Nuxt Eslint Config

## Installation

```bash
npm install @favorodera/nuxt-eslint-config
```

## Usage

```mjs
// eslint.config.mjs

import withNuxt from './.nuxt/eslint.config.mjs'
import config from '@favorodera/nuxt-eslint-config'

// CSS config file for Tailwind 4 linting
export default withNuxt(config('/app/assets/styles/index.css'))
```
