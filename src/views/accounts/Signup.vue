<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <card header="Sign up">
          <template #logo>
            <logo />
          </template>

          <forms-signup />
        </card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import Card from "../../components/Card.vue";
import Logo from "../../components/Logo.vue";
import FormsSignup from "../../components/forms/Signup.vue";
import { IonPage, IonContent } from "@ionic/vue";

export default {
  name: "signup",

  components: { Card, FormsSignup, IonPage, IonContent, Logo },
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