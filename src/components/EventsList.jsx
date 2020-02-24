import React, { Component } from "react";
import EventsCard from "./EventsCard";
import EventsMap from "./EventsMap";

class EventsList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=D0AG4QZZ2Fb9Kk0pR6K8ZDeUVHIoyDt6"
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
    return (
      <>
        <EventsMap events={this.state.events} />
        {this.state.events.map(event => {
          return <EventsCard event={event} key={event.id} />;
        })}
      </>
    );
  }
}

export default EventsList;
