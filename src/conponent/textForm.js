import React, { useState } from "react";
//
//setstate used
//hooks used

function TextForm(props) {
  const handleupclick = () => {
    // console.log("uppaercase on cliced " + text);
    let newtext = text.toUpperCase();
    settext(newtext); //("you have click on hu gay handle on clicks ")
  };

  const handleloclick = () => {
    // console.log("uppaercase on cliced ");
    let newtext = text.toLowerCase();
    settext(newtext); //("you have click on hu gay handle on clicks ")
  };
  const handleclear = () => {
    let newtext = "";
    settext(newtext);
  };

  const handleRemove = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    navigator.clipboard.writeText(text.value);
    // console.log("my copy");
    // text.Select();
    // text.setselectionRange(0.9999);
  };

  // const handlePASTE = (event) => {

  // }

  const handleonchage = (event) => {
    console.log("on changrs");
    settext(event.target.value);
  };

  const [text, settext] = useState("enter text hare ");

  return (
    <>
      <div>
        <h1> {props.heading} </h1>
        <div className="mb-5">
          <label htmlFor="mybox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchage}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-1" onClick={handleupclick}>
          canvert to uppercase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleloclick}>
          canvert to lowercase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleclear}>
          clear wolds
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>
          Copy wolds
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleRemove}>
          extara remove
        </button>
        {/*  */}
      </div>
      <div className="container">
        <h3>YOUR WOLD</h3>
        <p>
          {text.split(" ").length} WOLDS, {text.length} chercterss{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minutes </p>
        <h3>preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
