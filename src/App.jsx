import React from "react";
import "./styles/css/App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

const App = () => {
  return (
    <div id="app">
      <h1 id="title">Markdown Previewer</h1>
      <div id="container">
        <Editor />
        <Preview />
      </div>
    </div>
  );
};

export default App;
