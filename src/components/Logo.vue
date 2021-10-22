<template>
  <ion-router-link @click.prevent="$router.push({ name: 'home' })">
    <div>
      <ion-avatar>
        <img src="assets/icon/favicon.png" />
      </ion-avatar>
      <sub>Ionic</sub>
    </div>
  </ion-router-link>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

sub {
  font-size: 27px !important;
  color: var(--ion-color-primary-tint);
}
</style>