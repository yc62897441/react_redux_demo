const Counter = (state = 1, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1

        case 'INCREMENT5':
            return state + 5

        case 'DECREMENT':
            return state - 1

        case 'INCREASE':
            const newState = state + Number(action.value)
            return newState

        default:
            return state
    }
}
export default Counter
