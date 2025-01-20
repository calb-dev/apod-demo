export const useCacheStore = defineStore('Cache', () => {
  const cache = reactive([])

  function addToCache(obj) {
    cache.push(obj)
  }

  function checkCache(date) {
    let checkingDate = new Date(date)
    for(let i = 0; i < cache.length; i++) {
        let cachedDate = new Date(cache[i].date)
        if(cachedDate.getTime() === checkingDate.getTime()) return cache[i]
    }
    return null
  }

  return {addToCache, checkCache}
})
