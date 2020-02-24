import React from "react";
import "./App.css";
import Title from "./components/Title";
import Events from "./components/Events";

class App extends React.Component {
  render() {
    return (
      <>
        <Title />
        <Events />
      </>
    );
  }
}
export default App;
