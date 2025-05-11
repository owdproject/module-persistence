import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import { defineNuxtPlugin } from "nuxt/app"
import { usePinia } from "#imports"

// this import will make the module work locally
import * as localforage from 'localforage'

// this import will make the module work when used as dependency
// import 'localforage'

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
                        const states = await localforage.getItem(key)

                        if (states) {
                            return JSON.stringify(states)
                        }

                        return states
                    },
                    setItem: async (key, value) => {
                        return localforage.setItem(key, JSON.parse(value))
                    },
                    removeItem: async (key) => {
                        return localforage.removeItem(key)
                    },
                },
            }),
        )
    }
})