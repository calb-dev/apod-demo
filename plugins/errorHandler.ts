import  {useSnackbarStore } from '@/stores/snackbar'

export default defineNuxtPlugin((nuxtApp) => 
    {  
        nuxtApp.vueApp.config.errorHandler = (error, context) => {
            const snackbarStore = useSnackbarStore()
            //log error to an api
            snackbarStore.showSnackBar('An error has occurred, please try again', 'error')
        }
    })