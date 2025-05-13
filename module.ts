import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
    meta: {
        name: 'owd-module-pinia-localforage',
    },
    setup() {
        const {resolve} = createResolver(import.meta.url);

        addPlugin({
          src: resolve('./runtime/plugin'),
          mode: 'client'
        })
    }
})
