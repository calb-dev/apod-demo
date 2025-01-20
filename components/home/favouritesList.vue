<template>
  <div>
    <VNavigationDrawer expand-on-hover rail location="right">
      <div class="icon-container">
        <v-icon>mdi-heart</v-icon>
      </div>
      <v-list>
        <v-list-item  v-for="obj in favouriteList" :key="obj.date " 
        :prepend-avatar="obj.hdurl" :title="obj.date">
        </v-list-item>
      </v-list>
    </VNavigationDrawer>
  </div>
</template> 

<script lang="ts" setup>
const store = useFavouritesStore()
const favouriteList = ref(store.favourites)
</script>

<style>

.icon-container {
  text-align: center;
  margin-top: 10px;
}

</style>