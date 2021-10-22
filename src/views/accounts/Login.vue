<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <card header="Login">
          <forms-login />
        </card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import Card from "../../components/Card.vue";
import FormsLogin from "../../components/forms/Login.vue";
import { IonPage, IonContent } from "@ionic/vue";

export default {
  name: "Login",

  components: { Card, FormsLogin, IonPage, IonContent },
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