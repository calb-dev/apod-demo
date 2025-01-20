export const useSnackbarStore = defineStore( 'SnackBar', () => {
  const type = ref('info')
  const message = ref('')
  function showSnackBar(newMessage, newType = 'info') {
      type.value = newType,
      message.value = newMessage
  }
  return {type, message, showSnackBar}
  }
)
