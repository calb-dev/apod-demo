<template>
  <div>
    <VContainer>
      <div class="container">
        <v-date-input label="Date input" v-model="date"  width="200" variant="solo"></v-date-input>
      </div>
        <HomeApod/>
      </VContainer>
    <HomeFavouritesList/>
    <snackbar />
  </div>
</template>

<script setup>
const date = ref(new Date())

watch(date, open)

async function open() {
  await navigateTo(`/details-${date.value.toString()}`)
}

</script>

<style>

.container {
  text-align: center;
  width: 100%;
  z-index: 2;
}

</style>