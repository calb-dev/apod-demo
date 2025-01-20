<template>
  <div>
    <v-img></v-img>
    <span></span>
  </div>
</template>

<script lang="ts" setup>
  onMounted(async () => {
    const { data, status, error, refresh, clear } = await useFetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    if(error) {
      //to demo global error handling and plugins, try catch should be used in most situations
      throw new Error('Api Faliure')
    }
  })
</script>

<style>

</style>