import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import * as localforage from 'localforage'

export default defineNuxtPlugin({
    name: 'owd-plugin-pinia-localforage',
    parallel: true,
    async setup() {
        const pinia = usePinia()

        pinia.use(
            createPersistedStatePlugin({
                persist: false,
                storage: {
                    getItem: async (key) => {
                        return localforage.getItem(key)
                    },
                    setItem: async (key, value) => {
                        return localforage.setItem(key, value)
                    },
                    removeItem: async (key) => {
                        return localforage.removeItem(key)
                    },
                },
            }),
        )
    }
})