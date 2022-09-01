<script setup>
const config = useRuntimeConfig();
const siteKey = config.public.recaptcha_id;

const check = () => {
  grecaptcha.enterprise
    .execute(siteKey, { action: "services" })
    .then(async (token) => {
      const resk = await useFetch("/api/recaptcha", {
        method: "post",
        body: {
          token,
        },
      });
    });
};
</script>
<template>
  <div>
    <h1>Form</h1>
    <button @click="check">Check</button>
  </div>
</template>
