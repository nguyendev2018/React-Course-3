const burgerState = {
    listBurger: { salad: 1, cheese: 1, beef: 1 },
    menu: {
        salad: 10,
        cheese: 10,
        beef: 10
    },
    total: 85
}
const BuggerCyberReducer = (state = burgerState, action) => {
    return { ...state }
}
export default BuggerCyberReducer