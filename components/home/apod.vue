<template>
  <div class="img-container">
    <v-btn icon="mdi-heart" color="pink" class="favourite-btn" @click="favourite()" @load="console.log('hello')"></v-btn>
    <v-img :src="displayedImg">
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </v-img>
  </div>
</template>

<script setup>
const displayedImg = ref(null)
const store = useCacheStore()
const favouriteStore = useFavouritesStore()
let obj = null
  onMounted(async () => {
    let today = new Date()
    let data = await getApod()
    obj = data
    displayedImg.value = data.hdurl
  })


  async function getApod() {
    let today = new Date()
    let res = store.checkCache(today.toISOString().split('T')[0])
    if(!res) {
      const { data, status, error, refresh, clear } = await useFetch('https://api.nasa.gov/planetary/apod?api_key=If82SEomvWXamJN6ZcrPGTOehE369OYYVQnrSBdx')
      if(error.value) {
        //to demo global error handling and plugins, try catch should be used in most situations
        throw new Error(error.value.message)
      }
      if(data.value) {
        useCacheStore.addToCache(data.value)
        res = data.value
      }
    }
    return res
  }

  function favourite() {
    favouriteStore.addFavourite(obj)
  }
</script>

<style scoped>

.img-container {
  position: relative !important;
}

.favourite-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 3;
}

@media only screen and (min-width: 1280px) {
  .img-container {
    margin-left: 200px;
    margin-right: 200px;
  }
}

</style>