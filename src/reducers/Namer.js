const Namer = (state = 'John', action) => {
    switch (action.type) {
        case 'INCREMENT_name':
            return state + action.value
        case 'DECREMENT_name':
            return state.slice(0, state.length - 1)
        default:
            return state
    }
}
export default Namer;