import CartIcon from "./CartIcon";
import Cart from "../Cart/Cart";
import styles from "./HeaderCartButton.module.css";
import { MenuOrderingContext } from "../store/MenuOrderingContext";
import { useState, useContext } from "react";

const HeaderCartButton = () => {
  const { itemsOrdered, setItemsOrdered } = useContext(MenuOrderingContext);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  let counter = 0;
  if (itemsOrdered !== undefined) {
    counter = Object.keys(itemsOrdered).length;
  } else {
    counter = 0;
  }

  return (
    <div>
      {showModal && <Cart setShowModal={setShowModal} />}
      <div className={styles.bump}>
        <button className={styles.headerCartButton} onClick={handleClick}>
          <span className={styles.icon}>
            <CartIcon />
          </span>
          Your Cart
          <span className={styles.badge}>{counter}</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderCartButton;
