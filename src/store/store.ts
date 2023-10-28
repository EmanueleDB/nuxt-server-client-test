import type State from '../types/state'

export const useStore = defineStore('store', {
  state: (): State => ({
    testState: {},
  }),

  actions: {},
})
