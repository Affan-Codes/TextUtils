import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log(event)
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!","success")
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!","success")
  };
  const [text, setText] = useState("");
  return (
    <>
        <div className="container"   style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "black" : "white"
        }}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "grey" : "white"
              }}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Upper Case
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert to Lower Case
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>
            Clear
          </button>
        </div>
        <div className="container my-2" style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "black" : "white"}}>
          <h2>Your Text Summary</h2>
          <p>
            {text.split(" ").length - 1} words and {text.length} characters
          </p>
          <p>
            Approx. time to read : {(text.split(" ").length - 1) * 0.008}{" "}
            minutes
          </p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      
    </>
  );
}
