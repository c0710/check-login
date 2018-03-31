const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

export function counter (state = 10, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export function increment () {
  return {type: INCREMENT}
}
export function decrement () {
  return {type: DECREMENT}
}
export function incrementAsync () {
  // thunk插件的用处， 这里可以返回函数
  return dispatch => {
    setTimeout(() => {
      // 异步结束后， 手动dispatch
      dispatch(increment())
    }, 1000)
  }
}