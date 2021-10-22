<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <card header="Reset password">
          <forms-reset />
        </card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import Card from "../../components/Card.vue";
import FormsReset from "../../components/forms/Reset.vue";

export default {
  name: "reset",

  components: { Card, FormsReset },

  beforeRouteEnter: (to, from, next) => {
    if (!to.query.email || !to.query.token) next({ name: "accounts-login" });
    else next();
  },
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