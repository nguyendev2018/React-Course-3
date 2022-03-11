import { inDecreaseAmountType } from "../types/Bugger";

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
    switch (action.type) {
        case inDecreaseAmountType: {
            let listTable = [...state.TableBugger];
            let index = listTable.find(item => item.id === action.itemId);

        }

            break;

        default:
            break;
    }
    return { ...state }
}
export default BuggerReducer