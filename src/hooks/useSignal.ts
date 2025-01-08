const useSignal = <T = any>(value: T) => {
  return Object.assign(
    function get() {
      return value
    },
    {
      set(newValue: T) {
        value = newValue
        return newValue
      },
    }
  )
}

export default useSignal
