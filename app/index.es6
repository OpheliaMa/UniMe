import React from "react";
import ReactDOM from "react-dom";
import { HelloModule } from "./HelloModule";

ReactDOM.render(
    <HelloModule name="World"/>,
    document.getElementById("container")
);