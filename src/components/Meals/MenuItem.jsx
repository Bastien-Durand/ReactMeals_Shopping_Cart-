import styles from "./MenuItem.module.css";
import { useState, useContext, useEffect } from "react";
import { MenuOrderingContext } from "../store/MenuOrderingContext";

//name amount price
const MenuItem = (props) => {
  const { name, price, description, id } = props;

  const { itemsOrdered, setItemsOrdered } = useContext(MenuOrderingContext);

  const priceToFixed = `$${price.toFixed(2)}`;

  const [internalQuantity, setInternalQuantity] = useState(0);

  const onChangeHandler = (e) => {
    setInternalQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id,
      name,
      description,
      price,
      quantity: internalQuantity,
    };

    setItemsOrdered((prevState) => {
      return { ...prevState, [id]: item };
    });
  };

  useEffect(() => {
    setInternalQuantity(itemsOrdered?.[id]?.quantity);
  }, [itemsOrdered, id]);

  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <div className={styles.cartItem}>
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <span>{priceToFixed}</span>
          </div>
          <div>
            <p className={styles.quantity}>
              Quantity{" "}
              <input
                type="number"
                min="0"
                name="quantity"
                className={styles.input}
                onChange={onChangeHandler}
                value={internalQuantity ?? 0}
              />
            </p>

            <button>+ Add Item</button>
          </div>
        </div>
        <hr />
      </form>
    </>
  );
};
export default MenuItem;
