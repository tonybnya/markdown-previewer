import React from "react";
import "../styles/css/styles.css";
import Header from "./Header";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const Preview = ({ content }) => {
  return (
    <div id="preview-container">
      <Header text="Previewer" />
      <div id="preview">{content}</div>
      {/* <div id="preview">{marked.parse(content)}</div> */}
    </div>
  );
};

export default Preview;
