import React from "react";
import "../styles/css/styles.css";
import Header from "./Header";
import ReactMarkdown from "react-markdown";

const Preview = ({ content }) => {
  return (
    <div id="preview-container">
      <Header text="Previewer" />
      <div id="preview">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
