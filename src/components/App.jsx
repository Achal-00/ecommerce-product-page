import React, { useState, createContext } from "react";
import Navbar from "./navigation/Navbar";
import Container from "./body/Container";

export const ItemContext = createContext();

const App = () => {
  const [noOfItems, setNoOfItems] = useState(0);

  return (
    <ItemContext.Provider value={{ noOfItems, setNoOfItems }}>
      <div className="main-container">
        <div className="overlay"></div>
        <Navbar />
        <Container />
      </div>
    </ItemContext.Provider>
  );
};

export default App;
