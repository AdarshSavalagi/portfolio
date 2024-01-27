import React from "react";
import Navbar from "./Components/navbar";
import Container1 from "./Components/Container1";
import Footer from "./Components/Footer";
import MouseTracker from "./Components/MouseTracker";
import Container2 from "./Components/techstack";
import Spacer from "./Components/Spacer";

function App() {
  return (
    <>
     <Navbar/>
     <MouseTracker />
     <Spacer num='32'/>
     <Container1/>
     <Container2/>
     <Footer/>
    </>
  )
}

export default App;
