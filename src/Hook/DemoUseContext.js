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
    const addCart = (itemClick) => {
        const action = {
            type: "addCart",
            item: itemClick
        }
        dispatch(action)
    }
    return (
        <div className="container">
            <div className="row">
                {arrProduct.map((item, index) => {
                    return <div className="col-4" key={index}>
                        <div className="card text-left">
                            <h4 className="card-title">
                                {item.name}
                            </h4>
                            <p className="card-text">
                                {item.quantity}
                            </p>

                            <button onClick={() => {
                                addCart(item)
                            }} className='btn btn-success'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                })}
            </div>
        </div>

    )
}
