import React, { useReducer } from "react";
let productList = [
  { id: 1, name: "iphone 4", price: 2000, quantity: 1 },
  { id: 2, name: "iphone 5", price: 6000, quantity: 1 },
  { id: 3, name: "iphone 6", price: 2000, quantity: 1 },
];

const initialState = [{ id: 2, name: "iphone 5", price: 6000, quantity: 1 }];
const cartReducer = (state, action) => {
  switch (action.type) {
    case value:
      break;

    default:
      break;
  }
  return [...state];
};
export default function DemoUseReducer() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const handleClick = (item) => {
    const action = {
      type: "addToCart",
      item,
    };
    dispatch(action);
  };
  return (
    <div>
      {productList.map((item, index) => {
        return (
          <div key={index}>
            <h4 className="title">{item.name}</h4>
            <p className="price">{item.price}</p>
            <button
              onClick={() => {
                handleClick(item);
              }}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        );
      })}

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
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
