import useSignal from "./useSignal"

test("wrap initial state", () => {
  const state = useSignal("foo")
  expect(state()).toBe("foo")
})

test("update initial state", () => {
  const state = useSignal("foo")
  expect(state()).toBe("foo")
  state.set("bar")
  expect(state()).toBe("bar")
})
