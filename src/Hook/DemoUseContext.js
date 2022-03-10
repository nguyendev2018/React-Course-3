import React, { useContext } from 'react'
import { context } from './Context/ContextProvider';
let arrProduct = [
    { id: 1, name: "Iphone", price: 1000 },
    { id: 2, name: "IphoneX", price: 2000 },
    { id: 3, name: "Iphone ProMax", price: 3000 },
]
export default function DemoUseContext(props) {
    let { cartReducer } = useContext(context);
    let [cart, dispatch] = cartReducer;
    //Giỏ hàng
    return (
        <div>

        </div>
    )
}
