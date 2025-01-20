export default defineNuxtPlugin(() => {
  return {provide: {
      getApod: async (date: string) =>  {
        let baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=If82SEomvWXamJN6ZcrPGTOehE369OYYVQnrSBdx'
        if(date) {
            baseUrl = baseUrl + '&date=' + date
        }
        const { data: apiData, status, error, refresh, clear } = await useFetch(baseUrl)
        if(error.value) {
          //to demo global error handling and plugins, try catch should be used in most situations
          throw createError(error.value.message)
        }
        if(apiData.value) {
          return apiData.value
        }
      }
    }
  }
})