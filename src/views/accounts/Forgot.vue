<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <card header="Forgot password">
          <template #logo>
            <logo />
          </template>

          <forms-forgot />
        </card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import Card from "../../components/Card.vue";
import Logo from "../../components/Logo.vue";
import FormsForgot from "../../components/forms/Forgot.vue";
import { IonPage, IonContent } from "@ionic/vue";

export default {
  name: "forgot",

  components: { Card, FormsForgot, IonContent, IonPage, Logo },
};
</script>

<style scoped>
#container {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>