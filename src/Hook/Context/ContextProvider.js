import React, { useReducer } from 'react'
export const context = React.createContext();
let initialCart = [];

let cartReducer = (state, action) => {
    switch (action.type) {
        case "addCart": {
            let index = state.findIndex(item => item.id === action.product.id);
            if (index !== -1) {
                state[index].quantity += 1;
                return { ...state }
            }
            return [...state, { ...action.product, quantity: 1 }]
        };
        default: return false
    }
}
export default function ContextProvider(props) {
    let [cart, dispatch] = useReducer(cartReducer, initialCart);
    //store giống như rootReducer 
    const store = {
        cartReducer: [cart, dispatch]
    }
    return (
        //dùng content bao bọc tất cả component bên trong (cụ thể là App)
        <context.Provider value={store}>
            {props.children}
        </context.Provider>

    )
}
