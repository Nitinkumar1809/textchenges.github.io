import React from "react";
import Navbar from "./conponent/Navbar";
import TextForm from "./conponent/textForm";


const App = () => {
  return (
    <>
      <Navbar />
      <div className="container my-1">
        <TextForm heading="ANY WOLD TYPAS" />
     
      </div>
    </>
  );
}

export default App;
