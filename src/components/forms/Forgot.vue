<template>
  <form @submit.prevent="submit">
    <ion-col>
      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input
          type="email"
          :value="credentials.email"
          @input="credentials.email = $event.target.value"
        />
      </ion-item>
      <ion-text v-if="$store.state.errors.error.email" color="danger">
        <small>
          <b>{{ $store.state.errors.error.email.toString() }}</b>
        </small>
      </ion-text>
    </ion-col>

    <ion-row>
      <ion-col>
        <ion-button type="submit">Send</ion-button>
      </ion-col>
      <ion-col>
        <ion-router-link href="accounts/login">
          I think, I remember!
        </ion-router-link>
      </ion-col>
    </ion-row>
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