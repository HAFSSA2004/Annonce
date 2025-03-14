import { createContext, useState, useEffect } from "react";

export const AdsContext = createContext();

export const AdsProvider = ({ children }) => {
  const [ads, setAds] = useState([]);

  // Fetch ads from the backend on load
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setAds(data))
      .catch((error) => console.error("Error fetching ads:", error));
  }, []);

  // Function to add a new ad
  const addAd = (newAd) => {
    setAds((prevAds) => [...prevAds, newAd]); // Update the state with the new ad
  };

  return (
    <AdsContext.Provider value={{ ads, addAd }}>
      {children}
    </AdsContext.Provider>
  );
};
