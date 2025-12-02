import Modal from "../UI/Modal.jsx";
import Buttons from "../UI/Buttons.jsx";
import { useDispatch, useSelector } from "react-redux";
import { ModalAction } from "../../store/Modal-Slice.jsx";
import { CartAction } from "../../store/Carts-Slice.jsx";

export default function AddRemove() {
  const ModalStatus = useSelector((store) => store.Modal.modalStatus);
  const cartData = useSelector((store) => store.Carts.CartMeals);
  const dispatch = useDispatch();
  const price = cartData.reduce((acc, item) => {
    return acc + +item.price * item.Selected;
  }, 0);
  return (
    <>
      {ModalStatus === "add" && (
        <Modal>
          <ul>
            <h2>Your Cart</h2>
            {cartData.map((item) => {
              return (
                <li key={item.id} className="cart-item">
                  <p>{item.name}</p>
                  <div className="cart-item-actions">
                    <button onClick={() => dispatch(CartAction.addCart(item))}>
                      +
                    </button>
                    <p>{item.Selected}</p>
                    <button
                      onClick={() => dispatch(CartAction.removeCart(item))}
                    >
                      -
                    </button>
                  </div>
                </li>
              );
            })}
            <h3 className="price">{price.toFixed(2)}$</h3>
            <div className="buttons">
              <Buttons
                onClick={() => dispatch(ModalAction.closing())}
                className="close"
              >
                Close
              </Buttons>
              {cartData.length > 0 && (
                <Buttons
                  className="text-button"
                  onClick={() => dispatch(ModalAction.opening("Form"))}
                  type="seubmit"
                >
                  Go To Checkout
                </Buttons>
              )}
            </div>
          </ul>
        </Modal>
      )}
    </>
  );
}
