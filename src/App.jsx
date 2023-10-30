import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Meals/Menu";
import { MenuOrderingContext } from "./components/store/MenuOrderingContext";
import { useState } from "react";

const App = () => {
  const [itemsOrdered, setItemsOrdered] = useState();
  console.log("itemsOrdered", itemsOrdered);
  return (
    <>
      <MenuOrderingContext.Provider value={{ itemsOrdered, setItemsOrdered }}>
        <Header />
        <Menu />
      </MenuOrderingContext.Provider>
    </>
  );
};

export default App;
