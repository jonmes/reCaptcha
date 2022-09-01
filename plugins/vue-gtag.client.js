import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  const getGDPR = localStorage.getItem('GDPR:accepted');
  const config = useRuntimeConfig()
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: config.secret
    },
    appName: 'HaHuJobs',
    enabled: getGDPR === 'true',
    pageTrackerScreenviewEnabled: true
  }, nuxtApp.vueApp.router);
});
