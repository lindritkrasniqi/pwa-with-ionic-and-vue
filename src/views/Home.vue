<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-buttons slot="end">
            <ion-button color="danger" @click.prevent="logout">
              Log out
            </ion-button>
          </ion-buttons>
          <ion-title>Dashboard</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <card header="Dashboard" color="primary" variant="danger">
          <ion-text>
            Welcome, <i>{{ $store.state.auth.user.name }}</i>!
          </ion-text>
        </card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import Card from "../components/Card.vue";
import { loadingController } from "@ionic/vue";

export default {
  name: "Home",

  components: { Card },

  methods: {
    async logout() {
      const loading = await loadingController.create({
        message: "Please wait...",
      });

      loading.present();

      this.$store
        .dispatch("auth/logout")
        .then(() => loading.dismiss())
        .catch(() => loading.dismiss());
    },
  },
};
</script>
