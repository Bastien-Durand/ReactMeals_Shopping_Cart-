import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import Image from "../../assets/meals.avif";
import Card from "../UI/Card";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles.mainimage}>
        <img src={Image} alt="Collection of different foods" />
      </div>
      <div>
        <Card />
      </div>
    </>
  );
};

export default Header;
