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
            let index = listTable.findIndex(item => item.id === action.itemId);
            if (index !== -1) {
                if (action.trueOrFalse == true) {
                    listTable[index].amount += 1;
                    let getName = listTable[index].name;
                    state.listBugger = [...state.listBugger, name: getName]
                }

                else {
                    if (listTable[index].amount < 1) {
                        alert("phải lớn hơn 1")

                    }
                    else {

                        listTable[index].amount -= 1;
                    }
                }

            }
            state.TableBugger = listTable;
            return { ...state }

        }

            break;

        default:
            break;
    }
    return { ...state }
}
export default BuggerReducer