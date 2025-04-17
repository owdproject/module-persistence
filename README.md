# Open Web Desktop Module: Pinia LocalForage

This module enables the usage of `pinia-plugin-persistedstate-2` with `localforage` for storing Pinia state persistently.

## Installation

To install the module, run:

```sh
npm install github:owdproject/module-pinia-localforage
```

## Usage

Define the module in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@owd-client/module-pinia-localforage']
});
```

## Features
- Configures `pinia-plugin-persistedstate-2` to use `localforage`
- Enables persistent storage for Pinia stores
- Works seamlessly with Nuxt

## License
This project is licensed under the MIT License.

