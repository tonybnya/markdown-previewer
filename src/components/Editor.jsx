import React from "react";
import "../styles/css/styles.css";
import Header from "./Header";

const Editor = () => {
  return (
    <div id="editor-container">
      <Header text="Editor" />
      <textarea id="editor" placeholder="Enter text..."></textarea>
    </div>
  );
};

export default Editor;
