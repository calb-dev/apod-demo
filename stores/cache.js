export const useCacheStore = defineStore('Cache', () => {
  const cache = reactive([])

  function addToCache(obj) {
    cache.push(obj)
  }

  function checkCache(date) {
    return {hdurl: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'}
    cache.forEach((obj) => {
      if(obj.date == date) return obj
    })
    return null
  }

  return {addToCache, checkCache}
})
