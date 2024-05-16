import React, { useState } from "react";
import "../styles/css/styles.css";
import Header from "./Header";
import defaultText from "../data/default.txt";

const Editor = ({ content, setContent }) => {
  return (
    <div id="editor-container">
      <Header text="Editor" />
      <textarea id="editor" value={defaultText}></textarea>
    </div>
  );
};

export default Editor;
