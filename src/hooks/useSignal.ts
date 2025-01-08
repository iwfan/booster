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

const initialState = 1
const state = useSignal(initialState)

console.log(state())
