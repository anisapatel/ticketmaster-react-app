import React from "react";

const EventsCard = ({ event }) => {
  return (
    <section>
      <h3>{event.name}</h3>
      <p>
        {event.dates.start.localDate}, {event.dates.start.localTime},
      </p>
      <p>{event._embedded.venues.name}</p>

      {event._embedded.venues.map(item => {
        return (
          <p key={item.id}>
            {item.name}, {item.city.name}, {item.postalCode}
          </p>
        );
      })}
      {event._embedded.attractions.map(item => {
        return <img src={item.images[0].url} alt={item.name} key={item.name} />;
      })}
    </section>
  );
};

export default EventsCard;
