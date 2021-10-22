<template>
  <form @submit.prevent="submit">
    <ion-item>
      <ion-label position="floating">Email</ion-label>
      <ion-input
        type="email"
        :value="credentials.email"
        @input="credentials.email = $event.target.value"
      />
      <ion-text v-if="$store.state.errors.error.email" color="danger">
        <small>
          <b>{{ $store.state.errors.error.email.toString() }}</b>
        </small>
      </ion-text>
    </ion-item>

    <ion-button color="light" type="submit">Send</ion-button>
  </form>
</template>


<script>
import { loadingController } from "@ionic/core";

export default {
  data: () => ({ credentials: { email: "" } }),

  methods: {
    async submit() {
      const loading = await loadingController.create({
        message: "Please wait...",
      });

      await loading.present();

      this.axios
        .post("api/forgot", this.credentials)
        .then(() => loading.dismiss())
        .catch(() => loading.dismiss());
    },
  },
};
</script>