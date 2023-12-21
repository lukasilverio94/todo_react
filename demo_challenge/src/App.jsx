import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = function App() {
  const [query, setQuery] = useState("");
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  };

  const getVenues = async () => {
    setIsLoading(true);

    try {
      const searchParams = new URLSearchParams({
        query,
        ll: userLocation,
        open_now: "true",
        sort: "DISTANCE",
      });

      const response = await axios.get(
        `https://api.foursquare.com/v3/places/search?${searchParams}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "fsq317bfrgGeFKS7DDCGMcyScOq7G+Yuh8BY4mBqVCelq5M=",
          },
        }
      );

      setVenues(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchClick = () => {
    getVenues();
  };

  return (
    <>
      <h3>Search Venues: </h3>
      <input
        type="text"
        placeholder="Enter your query..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>

      {isLoading && <p>Loading...</p>}

      {venues.length > 0 && (
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
      )}

      {venues.length === 0 && !isLoading && (
        <p>No venues found. Try a different search.</p>
      )}
    </>
  );
};

export default App;
