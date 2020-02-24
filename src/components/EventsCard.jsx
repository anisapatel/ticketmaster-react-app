import React from "react";

const EventsCard = ({ event }) => {
  return (
    <section>
      <h3>{event.name}</h3>
      {/* <p>{(event.dates.start.localDate) (event.dates.start.localTime)}</p> */}
    </section>
  );
};

export default EventsCard;
