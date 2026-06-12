import { addPlugin, createResolver } from '@nuxt/kit'
import { defineDesktopModule } from '@owdproject/core/kit/authoring'

export default defineDesktopModule({
  meta: {
    name: 'desktop-module-persistence',
    configKey: 'persistence',
  },
  setup() {
    const { resolve } = createResolver(import.meta.url)

    addPlugin({
      src: resolve('./runtime/plugin'),
      mode: 'client',
    })
  },
})
