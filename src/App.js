import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
