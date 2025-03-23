import React, { useEffect, useState } from "react";

function MyAdds() {
  const [ads, setAds] = useState([]); // Gérer les annonces en local
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupérer l'userId depuis localStorage
  const storedUserId = localStorage.getItem("userId");
  console.log("Stored userId:", storedUserId);

  useEffect(() => {
    if (!storedUserId) {
      setError("User ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    async function fetchAds() {
      try {
        console.log("Fetching ads for userId:", storedUserId);

        const response = await fetch(`http://localhost:8000/products/user/${storedUserId}`);

        if (!response.ok) throw new Error("Failed to fetch ads.");

        const data = await response.json();
        console.log("Ads received:", data);

        setAds(data); // Mettre à jour l'état local avec les annonces
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAds();
  }, [storedUserId]);

  if (loading) return <p>Loading ads...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  // Suppression des doublons basés sur `id`
  const uniqueAds = Array.from(new Map(ads.map((ad) => [ad.id, ad])).values());

  return (
    <div className="container my-4">
      <h1
        className="text-center mb-4"
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#2c3e50",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        My Ads
      </h1>

      <div className="ads-container row row-cols-1 row-cols-md-2 gap-4 justify-content-center">
        {uniqueAds.length === 0 ? (
          <p className="text-center text-muted">No ads found.</p>
        ) : (
          uniqueAds.map((ad) => {
            console.log("Rendering Ad:", ad);

            return (
              <div
                key={ad.id}
                className="col d-flex align-items-center justify-content-between border p-3 rounded shadow-sm bg-white"
              >
                <div className="d-flex align-items-center gap-3">
                  {ad.image ? (
                    <img
                      src={ad.image}
                      alt={ad.title || "Product Image"}
                      className="img-fluid rounded"
                      style={{ width: "120px", height: "120px", objectFit: "cover" }}
                    />
                  ) : (
                    <div className="bg-light rounded" style={{ width: "120px", height: "120px" }}></div>
                  )}
                  <div className="text-left">
                    <h5 className="mb-1 text-dark">{ad.title || "No Title"}</h5>
                    <p className="text-success fw-bold mb-1">Price: ${ad.price || "N/A"}</p>
                    <p className="mb-0">{ad.description || "No description available"}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default MyAdds;
