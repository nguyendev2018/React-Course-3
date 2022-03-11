const stateDefault = {
    listBugger: [
        { id: 1, name: "beef" },
        { id: 2, name: "cheese" },
        { id: 3, name: "salad" },
    ],
    TableBugger: [
        { id: 1, name: "beef", price: 1000, amount: 1 },
        { id: 2, name: "cheese", price: 1000, amount: 1 },
        { id: 3, name: "salad", price: 1000, amount: 1 },
    ]
}
const BuggerReducer = (state = stateDefault, action) => {
    return { ...state }
}
export default BuggerReducer