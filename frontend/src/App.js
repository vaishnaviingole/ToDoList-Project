import React from "react";
import ReactDOM from "react-dom";
import Item from "../Component/Item";
import "./App.css";
const App= ()=>{
    return(
        <div className="app">
          <Item/>
        </div>
    )
}
const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);