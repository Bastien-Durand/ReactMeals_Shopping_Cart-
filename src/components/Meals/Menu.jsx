import DUMMY_MEALS from "../data/dummyMeals";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.layout}>
      {DUMMY_MEALS.map((e) => (
        <MenuItem
          name={e.name}
          description={e.description}
          price={e.price}
          key={e.id}
          id={e.id}
        />
      ))}
    </div>
  );
};

export default Menu;
