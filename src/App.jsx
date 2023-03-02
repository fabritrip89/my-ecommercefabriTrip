import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  // const [greeting, setGreeting] = useState("Hola mundo");

  return (
    <>
      <NavBar />
      <ItemListContainer texto ='To the Moon'/>

    </>
  );
}

export default App;
