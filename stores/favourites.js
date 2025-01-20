import  {useSnackbarStore } from '@/stores/snackbar'

export const useFavouritesStore = defineStore('Favourites', () => {
  const favourites = reactive([])

  initialize()

  function initialize() {
    if (process.client) {
      let savedFavs = localStorage.getItem('favouitesList')
      let parsed = JSON.parse(savedFavs)
      if(savedFavs) favourites.push(...parsed)
    }
  }

  function addFavourite(obj) {
    const snackbarStore = useSnackbarStore()
    for(let i = 0; i < favourites.length; i++) {
      if(favourites[i].date == obj.date) {
        snackbarStore.showSnackBar('picture already favourited', 'info')
        return
      }
    }
    favourites.push(obj)
    let parsed = JSON.stringify(favourites)
    localStorage.setItem('favouitesList', parsed)
    snackbarStore.showSnackBar('picture favourited!', 'info')
  }

  return {favourites, addFavourite}
})
