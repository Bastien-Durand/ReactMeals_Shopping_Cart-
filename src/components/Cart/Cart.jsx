import DUMMY_MEALS from "../data/dummyMeals";
import { useContext, useState } from "react";
import { MenuOrderingContext } from "../store/MenuOrderingContext";
import CartItem from "./CartItem";
import styles from "./CartModal.module.css";

const Cart = (props) => {
  const { itemsOrdered, setItemsOrdered } = useContext(MenuOrderingContext);

  console.log("HERE: ", DUMMY_MEALS);
  console.log("Context", itemsOrdered);
  if (!itemsOrdered) {
    return <div>Cart is empty</div>;
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
