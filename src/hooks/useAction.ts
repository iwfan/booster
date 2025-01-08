type ActionFn = () => Promise<void>

const useAction = (fn: ActionFn) => {
  // const [isRuning, setIsRuning] = useState(false)

  fn()
}

export default useAction
