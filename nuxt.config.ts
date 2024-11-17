// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', 'nuxt-primevue', '@pinia/nuxt', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', ['@vee-validate/nuxt', {
    autoImports: true,
    componentNames: {
      Form: 'Form',
      Field: 'Field',
      FieldArray: 'FieldArray',
      ErrorMessage: 'ErrorMessage',
    },
  }]],
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://awesome-lib.css' },
        {
          rel: "stylesheet", href: "https://fonts.cdnfonts.com/css/futura-std-4"
        }
      ],
    }
  },
  // buildModules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://127.0.0.1:8080/api/',
      API_KEY: process.env.NODE_ENV == 'prod' ? 'AAA' : 'BBB',
      API_BASE_URL: process.env.API_BASE_URL,
    }
  },
  primevue: {
    /* Options */

    // if you want to make unstyled mode change option to true and uncomment importPt
    options: {
      unstyled: true
    },
    importPT: { from: path.resolve(__dirname, './presets/wind/') },

    components: {
      include: '*'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/axios.ts', '~/plugins/toast.ts'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts'
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  routeRules: {
    '/api/**': {
      proxy: { to: process.env.API_BASE_URL }
    }
  },
  // $env: {
  //   baseURL: process.env.BASE_URL || 'http://127.0.0.1:8080/api/',
  // }
})