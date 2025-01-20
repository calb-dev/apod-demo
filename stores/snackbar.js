export const useSnackbarStore = defineStore( 'SnackBar', () => {
  const type = ref('info')
  const message = ref('')
  function showSnackBar(newMessage, newType = 'info') {
      type.value = newType,
      message.value = newMessage
      setTimeout(() => {
        message.value =''
      }, 100)
  }
  return {type, message, showSnackBar}
  }
)
