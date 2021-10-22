<template>
  <form @submit.prevent="submit">
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

    <ion-button color="light" type="submit">Reset</ion-button>
  </form>
</template>


<script>
import { loadingController } from "@ionic/core";
import { useRoute } from "vue-router";

export default {
  data: () => {
    const route = useRoute();

    return {
      credentials: {
        password: "",
        password_confirmation: "",
        ...route.query,
      },
    };
  },

  methods: {
    async submit() {
      const loading = await loadingController.create({
        message: "Please wait...",
      });

      await loading.present();

      this.axios
        .post("api/reset", this.credentials)
        .then(() => loading.dismiss())
        .catch(() => loading.dismiss());
    },
  },
};
</script>