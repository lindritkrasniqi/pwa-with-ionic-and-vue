<template>
  <form @submit.prevent="submit">
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

    <ion-col>
      <ion-button color="light" type="submit">Reset</ion-button>
    </ion-col>
  </form>
</template>


<script>
import {
  loadingController,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
  IonButton,
} from "@ionic/vue";

export default {
  components: {
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonText,
    IonButton,
  },

  data: () => {
    return {
      credentials: {
        password: "",
        password_confirmation: "",
      },
    };
  },

  methods: {
    async submit() {
      const loading = await loadingController.create({
        message: "Please wait...",
      });

      await loading.present();

      this.credentials = { ...this.credentials, ...this.$route.query };

      this.axios
        .post("api/reset", this.credentials)
        .then(() => {
          this.store
            .dispatch("auth/login", this.credentials)
            .then(() => {
              loading.dismiss();
              this.$router.push({ name: "home" });
            })
            .catch(() => loading.dismiss());
        })
        .catch(() => loading.dismiss());
    },
  },
};
</script>