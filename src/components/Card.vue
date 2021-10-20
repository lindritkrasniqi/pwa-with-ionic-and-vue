<template>
  <ion-card :color="color">
    <ion-card-header v-if="header">
      <ion-card-title v-text="header" :color="variant" />
    </ion-card-header>
    <ion-card-content>
      <slot name="logo" />

      <slot />
    </ion-card-content>
  </ion-card>
</template>

<script>
export default {
  props: ["color", "header", "variant"],
};
</script>