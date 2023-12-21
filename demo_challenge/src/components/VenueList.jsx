// VenueList.js

const VenueList = ({ venues }) => {
  return (
    <div>
      <h4>Search Results:</h4>
      <ul>
        {venues.map((venue) => (
          <li key={venue.fsq_id}>
            <strong>{venue.name}</strong>
            <p>
              {venue.location && venue.location.formatted_address
                ? venue.location.formatted_address
                : "Address not available"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VenueList;
