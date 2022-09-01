import { defineNuxtConfig } from "nuxt";
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://www.google.com/recaptcha/enterprise.js?render=6LfQM8QhAAAAAFAliVvqFPO4ocdtecr9Jv4nXeV_",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      recaptcha_id: process.env.RECAPTCHA_ID,
      secret_key: process.env.SECRET_KEY,
      measurement_id: process.env.MEASUREMENT_ID,
    },
  },
});
