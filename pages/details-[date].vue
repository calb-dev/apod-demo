<template>
  <div>
    <v-img :src="data.img"></v-img>
    <span>{{data.date}}</span>
    <span>{{ data.description }}</span>
  </div>
</template>

<script setup>
const date = useRoute().params.date

onMounted(async () => {
  const { data, status, error, refresh, clear } = await useFetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY?date=')
  if(error) {
      //to demo global error handling and plugins, try catch should be used in most situations
      throw new Error('Api Faliure')
    }
})
</script>

<style>

</style>