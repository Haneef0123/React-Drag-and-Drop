import React from "react";
import "./App.css";
import List from "./Components/List";

function App() {
  const [fruitItems, setFruitItems] = React.useState([
    "Apple",
    "Banana",
    "Orange",
  ]);

  return (
    <div className="app">
      <div className="list-container">
        <List items={fruitItems} setItems={setFruitItems} />
      </div>
    </div>
  );
}

export default App;
