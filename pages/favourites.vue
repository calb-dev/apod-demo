<template>
  <div class="container">
    <div v-for="obj in favouriteList" :key="obj.date ">
      <NuxtLink :to="`/details-${obj.date}`">
        <v-img :src="obj.hdurl" class="img" height="200" width="200" cover></v-img>
        <span>{{ obj.date }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const store = useFavouritesStore()
const favouriteList = ref(store.favourites)

</script>

<style scoped>
.container {
  display: flex;
  margin: 50px;
  overflow: auto;
  flex-wrap: wrap;
  text-align: center;
}

.img {
  margin: 10px;
}

</style>