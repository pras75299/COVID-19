import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";

function App() {
  return (
    <div className="App">
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
