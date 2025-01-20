<template>
  <div>
    <v-app-bar :elevation="2" class="bg-grey-darken-4">
      <v-spacer></v-spacer>
      <NuxtLink to="/">
      <v-btn value="home">
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>
       </NuxtLink>
      <NuxtLink to="/favourites"><v-btn value="favorites">
        <v-icon>mdi-heart</v-icon>
        <span>Favorites</span>
      </v-btn></NuxtLink>
      <v-spacer></v-spacer>
  </v-app-bar>
  </div>
</template>

<script setup>

</script>

<style>

</style>