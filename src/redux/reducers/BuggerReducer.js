const stateDefault = {
    listBugger: [
        { id: 1, name: "beef" },
        { id: 2, name: "cheese" },
        { id: 3, name: "salad" },
    ]
}
const BuggerReducer = (state = stateDefault, action) => {
    return { ...state }
}
export default BuggerReducer