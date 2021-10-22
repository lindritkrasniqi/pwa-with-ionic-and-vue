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
    <ion-item>
      <ion-label position="floating">Password</ion-label>
      <ion-input
        type="password"
        :value="credentials.password"
        @input="credentials.password = $event.target.value"
      />
      <ion-text v-if="$store.state.errors.error.password" color="danger">
        <small>
          <b>{{ $store.state.errors.error.password.toString() }}</b>
        </small>
      </ion-text>
    </ion-item>

    <ion-button color="light" type="submit">Login</ion-button>
  </form>
</template>


<script>
import { loadingController } from "@ionic/core";

export default {
  data: () => ({ credentials: { email: "", password: "" } }),

  methods: {
    async submit() {
      const loading = await loadingController.create({
        message: "Please wait...",
      });

      await loading.present();

      this.$store
        .dispatch("auth/login", this.credentials)
        .then(() => {
          loading.dismiss();
          this.$router.push({ name: "home" });
        })
        .catch(() => loading.dismiss());
    },
  },
};
</script>