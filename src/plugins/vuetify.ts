import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { VDateInput } from 'vuetify/labs/VDateInput'

const LightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#49a2f3',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'LightTheme',
      themes: {
        LightTheme
      }
    },
    display: { mobileBreakpoint: 'sm' },
    components: { VDateInput }
  })
  app.vueApp.use(vuetify)
})