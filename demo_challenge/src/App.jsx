import { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import VenueList from "./components/VenueList";

const apiKey = "fsq317bfrgGeFKS7DDCGMcyScOq7G+Yuh8BY4mBqVCelq5M=";

function App() {
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
            Authorization: apiKey,
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
    <div className="container-sm py-3 d-flex flex-column">
      <SearchForm
        query={query}
        handleInputChange={handleInputChange}
        handleSearchClick={handleSearchClick}
      />
      {/* Loading while wait request */}
      {isLoading && <p>Loading...</p>}

      {venues.length > 0 && <VenueList venues={venues} />}
      {venues.length === 0 && !isLoading && (
        <p>No venues found. Try a different search.</p>
      )}
    </div>
  );
}

export default App;
