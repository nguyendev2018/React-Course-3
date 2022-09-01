import React, { useReducer } from "react";
let productList = [
  { id: 1, name: "iphone 4", price: 2000, quantity: 1 },
  { id: 2, name: "iphone 5", price: 6000, quantity: 1 },
  { id: 3, name: "iphone 6", price: 2000, quantity: 1 },
];
const arrayList = productList.map((item, index) => {
  return (
    <div key={index}>
      <h4 className="title">{item.name}</h4>
      <p className="price">{item.price}</p>
      <button className="btn btn-primary">Add </button>
    </div>
  );
});
const initialState = [{ id: 2, name: "iphone 5", price: 6000, quantity: 1 }];
const cartReducer = (state, action) => {
  console.log(state);
  return [...state];
};
export default function DemoUseReducer() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <div>
      <div>{arrayList}</div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {cart.map((item, index) => {
              return <td></td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
