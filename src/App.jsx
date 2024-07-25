//import { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";
import Home from "./components/Home";
//import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/*<Shop />*/}
      <FooterSection />
    </>
  );
}

export default App;
