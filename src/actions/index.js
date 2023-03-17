export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}

export const increment5 = () => {
    return {
        type: 'INCREMENT5',
        value: 5,
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}

export const increase = (value) => {
    return {
        type: 'INCREASE',
        value: value,
    }
}
