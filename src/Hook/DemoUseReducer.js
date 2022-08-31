import React, { useReducer } from "react";
const initialCart = [{ id: 1, name: "Iphone", price: 1000, quantity: 1 }];
const carReducer = (state, action) => {
  return [...state];
};
export default function DemoUseReducer() {
  let [cart, dispatch] = useReducer(carReducer, initialCart);
  console.log(`cart`, cart);
  console.log(`dispatch`, dispatch);
  return (
    <div className="container">
      <h3>Cart</h3>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td> {item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
