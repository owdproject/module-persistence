import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import localforage from 'localforage'

export default defineNuxtPlugin({
    parallel: true,
    async setup() {
        const pinia = usePinia()

        pinia.use(
            createPersistedStatePlugin({
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