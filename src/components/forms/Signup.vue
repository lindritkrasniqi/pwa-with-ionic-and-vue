<template>
  <form @submit.prevent="submit">
    <ion-item>
      <ion-label position="floating">Name</ion-label>
      <ion-input
        type="name"
        :value="credentials.name"
        @input="credentials.name = $event.target.value"
      />
      <ion-text v-if="$store.state.errors.error.name" color="danger">
        <small>
          <b>{{ $store.state.errors.error.name.toString() }}</b>
        </small>
      </ion-text>
    </ion-item>

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

    <ion-item>
      <ion-label position="floating">Password confirmation</ion-label>
      <ion-input
        type="password"
        :value="credentials.password_confirmation"
        @input="credentials.password_confirmation = $event.target.value"
      />
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