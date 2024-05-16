import React, { useState } from "react";
import "../styles/css/styles.css";
import Header from "./Header";

const Editor = ({ content, setContent }) => {
  return (
    <div id="editor-container">
      <Header text="Editor" />
      <textarea
        id="editor"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Editor;
