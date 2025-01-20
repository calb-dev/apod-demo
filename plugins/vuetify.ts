import '@mdi/font/css/materialdesignicons.css'
import { VDateInput } from 'vuetify/labs/VDateInput'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    blueprint: md3,
    components: {
      VDateInput,
    },
    theme: {
      defaultTheme: 'dark'
    }
  })
  app.vueApp.use(vuetify)
})
