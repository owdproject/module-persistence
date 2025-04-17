# Open Web Desktop Module: Pinia LocalForage

This module enables `localforage` within Pinia to store states persistently.

## Installation

To install the module, run:

```sh
npm install @owdproject/module-pinia-localforage localforage pinia-plugin-persistedstate-2
```

## Usage

Define the module in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@owdproject/module-pinia-localforage']
});
```

## Features
- Configures `pinia-plugin-persistedstate-2` to use `localforage`
- Enables persistent storage for Pinia stores
- Works seamlessly with Nuxt

## License
This project is released under the [MIT License](LICENSE).

