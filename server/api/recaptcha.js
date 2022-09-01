export default defineEventHandler(async (event) => {
    const body = await useBody(event);
    const config = useRuntimeConfig();
    const secret_key = config.public.secret_key;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${body.token}`;
    let response = null;
    await $fetch(verificationUrl, {
        method: "post",
    })
        .then((data) => {
            console.log("data responded", data);
            response = data;
        })
        .catch(() => {
            console.log("error");
            response = "error";
        });
    return { response };
});