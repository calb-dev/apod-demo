<template>
  <div>
    <v-snackbar
      location="top"
      v-model="visible"
      :color = "type == 'error' ? 'red' :''"
    >
  {{ text }}
  </v-snackbar>
  </div>
</template>

<script setup>
import  {useSnackbarStore } from '~/stores/snackbar'
const store = useSnackbarStore()
const text = ref()
const visible = ref(false)
const type = ref('info')
store.$subscribe(() => {
  if(store.message) {
    visible.value = true
    text.value = store.message
    type.value = store.type
  }
})
</script>

<style>

</style>