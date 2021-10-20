<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <card header="Sign up" color="primary" variant="danger">
          <forms-signup />
        </card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import Card from "../../components/Card.vue";
import FormsSignup from "../../components/forms/Signup.vue";

export default {
  name: "signup",

  components: { Card, FormsSignup },
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