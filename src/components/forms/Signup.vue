<template>
  <form @submit.prevent="submit">
    <ion-item>
      <ion-label position="floating">Name</ion-label>
      <ion-input type="name" v-model="credentials.name" />
      <ion-text v-if="$store.state.errors.error.name" color="danger">
        <small>
          <b>{{ $store.state.errors.error.name[0] }}</b>
        </small>
      </ion-text>
    </ion-item>

    <ion-item>
      <ion-label position="floating">Email</ion-label>
      <ion-input type="email" v-model="credentials.email" />
      <ion-text v-if="$store.state.errors.error.email" color="danger">
        <small>
          <b>{{ $store.state.errors.error.email[0] }}</b>
        </small>
      </ion-text>
    </ion-item>

    <ion-item>
      <ion-label position="floating">Password</ion-label>
      <ion-input type="password" v-model="credentials.password" />
      <ion-text v-if="$store.state.errors.error.password" color="danger">
        <small>
          <b>{{ $store.state.errors.error.password[0] }}</b>
        </small>
      </ion-text>
    </ion-item>

    <ion-item>
      <ion-label position="floating">Password confirmation</ion-label>
      <ion-input type="password" v-model="credentials.password_confirmation" />
    </ion-item>

    <ion-button color="light" type="submit">Signup</ion-button>
  </form>
</template>


<script>
import { loadingController } from "@ionic/core";
export default {
  data: () => ({
    credentials: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  }),

  methods: {
    async submit() {
      const loading = await loadingController.create({
        message: "Please wait...",
      });

      await loading.present();

      this.axios
        .post("api/signup", this.credentials)
        .then(() => loading.dismiss())
        .catch(() => loading.dismiss());
    },
  },
};
</script>