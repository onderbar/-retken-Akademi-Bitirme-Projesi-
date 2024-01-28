// App.js
import React from "react";
import Navbar from "../src/components/navbar/navbar.js";
import Bant1 from "./components/bant1/bant1";
import Bant2 from "./components/bant2/bant2";
import İcon from "../src/components/İcon";
import Slayt from "./components/slayt/slayt.js";
import Footer from "./components/footer/footer.jsx";




import './App.css';


function App() {
  return (
    <div className="App">
 
      <Navbar />
      <Bant1/>
      <Bant2/>
      <İcon/>
      <Slayt/>
      <Footer/>
     




    </div>
  );
}

export default App;
