// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     meta: {
  //       title: 'Nick Grove Dev'
  //     }
      
  //   }
  // },
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css'
  ],
  modules: [
    '@nuxt/content'
  ],
  content: {
    markdown: {
      anchorLinks: false,
    }
  }
})
