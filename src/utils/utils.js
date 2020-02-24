exports.findCoordinates = array => {
  let locationArray = [];
  array.events.forEach(element => {
    let locations = [];
    locations.push(element._embedded.venues[0].location.latitude);
    locations.push(element._embedded.venues[0].location.longitude);
    const newObj = {
      venue: element._embedded.venues[0].name,
      coords: locations
    };
    locationArray.push(newObj);
  });
  return locationArray;
};
