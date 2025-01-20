<template>
  <div class="img-container">
    <v-btn icon="mdi-heart" color="pink" class="favourite-btn" @click="favourite()" v-if="loaded"></v-btn>
    <v-img :src="data.hdurl" max-height="500" @load="loaded = true">
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </v-img>
    <div v-if="loaded">
      <h4 class="info">{{ data.title }}</h4>
      <span class="info">{{ data.explanation }}</span>
    </div>
  </div>
</template>

<script setup>
//this is close to a duplicate of apod, this is not good practice and done to show examples of dynamic routing
const date = useRoute().params.date
const { $getApod } = useNuxtApp()
const store = useCacheStore()
const favouriteStore = useFavouritesStore()
const data = ref(null)
const loaded = ref(false)
let parsedDate = new Date(date)
let res = store.checkCache(parsedDate.toISOString().split('T')[0])
if(!res) {
  data.value = await $getApod(parsedDate.toISOString().split('T')[0])
  store.addToCache(data.value) 
} else {
  data.value = res
}


function favourite() {
  favouriteStore.addFavourite(data.value)
}
</script>

<style scoped>

.img-container {
  position: relative !important;
  margin: 50px;
}

.favourite-btn {
  position: absolute;
  right: auto;
  left: auto;
  margin: auto;
  top: 10px;
  z-index: 1;
}

.info {
  margin: 10px;
}

@media only screen and (min-width: 1280px) {
  .img-container {
    text-align: center;
    margin-left: 200px;
    margin-right: 200px;
  }
}

</style>