import React, { useReducer } from "react";
const initialCart = [{ id: 1, name: "iPhone", price: 1000, quantity: 1 }];
const carReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      let cartUpdate = [...state];
      const indexCart = cartUpdate.findIndex(
        (itemCart) => itemCart.id == action.item.id
      );
      if (indexCart !== -1) {
        cartUpdate[indexCart].quantity++;
      } else {
        const addCart = { ...action.item, quantity: 1 };
        cartUpdate.push(addCart);
      }
      return cartUpdate;
    default:
      break;
  }
  return [...state];
};
// vi no la mang khong can phai re-render nen khong de trong function
let arrProduct = [
  { id: 1, name: "iPhone", price: 1000 },
  { id: 2, name: "note 10", price: 5000 },
  { id: 3, name: "Huawei 10", price: 5000 },
];
export default function DemoUseReducer() {
  let [cart, dispatch] = useReducer(carReducer, initialCart);
  console.log(cart);
  const itemClick = (item) => {
    const action = {
      type: "addToCart",
      item,
    };
    dispatch(action);
  };
  return (
    <div className="container">
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div key={index}>
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.price}</p>
              <button
                className="btn btn-success"
                onClick={() => {
                  itemClick(item);
                }}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
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
