import React from "react";
import "../styles/css/styles.css";
import Header from "./Header";

const Preview = () => {
  return (
    <div id="preview-container">
      <Header text="Previewer" />
      <div id="preview">Preview</div>
    </div>
  );
};

export default Preview;
