import  {useSnackbarStore } from '@/stores/snackbar'

export const useFavouritesStore = defineStore('Favourites', () => {
  const favourites = reactive([])

  initialize()

  function initialize() {
    if (process.client) {
      let savedFavs = localStorage.getItem('favouitesList')
      let parsed = JSON.parse(savedFavs)
      console.log(parsed)
      if(savedFavs) favourites.push(...parsed)
      console.log(favourites)
    }
  }

  function addFavourite(obj) {
    favourites.push(obj)
    let parsed = JSON.stringify(favourites)
    localStorage.setItem('favouitesList', parsed)
    const snackbarStore = useSnackbarStore()
    snackbarStore.showSnackBar('picture favourited!', 'info')
  }

  return {favourites, addFavourite}
})
