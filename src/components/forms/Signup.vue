<template>
  <form @submit.prevent="submit">
    <ion-col>
      <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input
          type="name"
          :value="credentials.name"
          @input="credentials.name = $event.target.value"
        />
      </ion-item>
      <ion-text v-if="$store.state.errors.error.name" color="danger">
        <small>
          <b>{{ $store.state.errors.error.name.toString() }}</b>
        </small>
      </ion-text>
    </ion-col>

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

    <ion-col>
      <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input
          type="password"
          :value="credentials.password"
          @input="credentials.password = $event.target.value"
        />
      </ion-item>
      <ion-text v-if="$store.state.errors.error.password" color="danger">
        <small>
          <b>{{ $store.state.errors.error.password.toString() }}</b>
        </small>
      </ion-text>
    </ion-col>

    <ion-col>
      <ion-item>
        <ion-label position="floating">Password confirmation</ion-label>
        <ion-input
          type="password"
          :value="credentials.password_confirmation"
          @input="credentials.password_confirmation = $event.target.value"
        />
      </ion-item>
    </ion-col>

    <ion-row>
      <ion-col>
        <ion-router-link href="accounts/login">
          Already, have an account?
        </ion-router-link>
      </ion-col>
    </ion-row>

    <ion-col>
      <ion-button color="light" type="submit">Signup</ion-button>
    </ion-col>
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
        .post("api/register", this.credentials)
        .then(() => loading.dismiss())
        .catch(() => loading.dismiss());
    },
  },
};
</script>