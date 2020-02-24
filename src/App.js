import React from "react";
import "./App.css";
import Title from "./components/Title";
import EventsList from "./components/EventsList";

class App extends React.Component {
  render() {
    return (
      <>
        <Title />
        <EventsList />
      </>
    );
  }
}
export default App;
