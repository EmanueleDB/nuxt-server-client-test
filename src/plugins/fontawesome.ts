import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCheck,
  faTrashCan,
  faEdit,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTrashCan, faEdit, faCircleXmark)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
