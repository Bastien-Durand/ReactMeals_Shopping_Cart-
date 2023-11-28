import DUMMY_MEALS from "../data/dummyMeals";
import { useContext } from "react";
import { MenuOrderingContext } from "../store/MenuOrderingContext";
import CartItem from "./CartItem";
import styles from "./CartModal.module.css";

const Cart = (props) => {
  const { itemsOrdered, setItemsOrdered } = useContext(MenuOrderingContext);

  if (!itemsOrdered) {
    return <div style={{ textAlign: "center" }}>Cart is empty</div>;
  }
  return (
    <div>
      <div
        className={styles.backdrop}
        onClick={() => {
          props.setShowModal(false);
          document.body.style.overflow = "unset";
        }}
      >
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <h1 className={styles.cartTitle}>Shopping Cart</h1> <hr />
          {Object.values(itemsOrdered)?.map((e) => {
            return (
              <CartItem
                name={e.name}
                description={e.description}
                price={e.price}
                key={e.id}
                id={e.id}
                quantity={e.quantity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
