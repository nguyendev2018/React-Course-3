const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    menu: {
        salad: 10,
        cheese: 10,
        beef: 10
    },
    total: 85
}
export const BuggerReducer = (state = burgerState, action) => {
    return { ...state }
}