import React, { Component } from "react";
import EventsCard from "./EventsCard";

class Events extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=UK&apikey=D0AG4QZZ2Fb9Kk0pR6K8ZDeUVHIoyDt6"
    )
      .then(response => {
        return response.json();
      })
      .then(({ _embedded: { events } }) => {
        this.setState(currentState => {
          return { events };
        });
      });
  }

  render() {
    console.log(this.state.events);
    return (
      <>
        {this.state.events.map(event => {
          return <EventsCard event={event} key={event.id} />;
        })}
      </>
    );
  }
}

export default Events;
