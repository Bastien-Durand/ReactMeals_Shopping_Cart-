import { useContext } from "react";
import styles from "./CartItem.module.css";
import { MenuOrderingContext } from "../store/MenuOrderingContext";

const CartItem = (props) => {
  const { name, description, price, id, quantity } = props;

  const { itemsOrdered, setItemsOrdered } = useContext(MenuOrderingContext);

  const updateCart = (quantity) => {
    const item = {
      id,
      name,
      description,
      price,
      quantity,
    };

    setItemsOrdered((prevState) => {
      return { ...prevState, [id]: item };
    });
  };

  return (
    <div className={styles.itemContainer}>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <span>${price}</span>
      </div>
      <div>
        <p className={styles.quantity}>
          Quantity{" "}
          <input
            type="number"
            min="0"
            className={styles.input}
            value={quantity ?? 0}
          />
        </p>
        <div className={styles.buttonContainer}>
          <button
            className={styles.cartButton}
            onClick={() => updateCart(parseInt(quantity) - 1)}
          >
            -
          </button>
          <button
            className={styles.cartButton}
            onClick={() => updateCart(parseInt(quantity) + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
