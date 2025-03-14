import React, { useContext, useEffect } from 'react';
import { AdsContext } from './AdsContext';

function MyAdds() {
  const { ads } = useContext(AdsContext);

  useEffect(() => {
    console.log('Ads Data:', ads); // Log entire ads data for inspectionigczy
  }, [ads]);

  // Filter out duplicates based on a unique property like productN
  const uniqueAds = Array.from(new Map(ads.map((ad) => [ad.id, ad])).values());

  return (
    <div className="container my-4">
      <h1
        className="text-center mb-4"
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#2c3e50',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        My Ads
      </h1>

      <div className="ads-container row row-cols-1 row-cols-md-2 gap-4 justify-content-center">
        {uniqueAds.map((ad) => {
          console.log('Full Ad Object:', ad); // Log full ad object to inspect its structure
          return (
            <div
              key={`${ad.productN}-${ad.id}`} // Ensure the key is unique
              className="col d-flex align-items-center justify-content-between border p-3 rounded shadow-sm bg-white"
            >
              <div className="d-flex align-items-center gap-3">
                {ad.image ? (
                  <img
                    src={ad.image instanceof Blob ? URL.createObjectURL(ad.image) : ad.image}
                    alt={ad.productN || 'Product Image'}
                    className="img-fluid rounded"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                ) : (
                  <div
                    className="bg-light rounded"
                    style={{ width: '120px', height: '120px' }}
                  ></div>
                )}
                <div className="text-left">
                  <h5 className="mb-1 text-dark">{ad.productN ? ad.productN : 'No Product Name'}</h5>
                  <p className="text-success fw-bold mb-1">Price: ${ad.price || 'N/A'}</p>
                  <p className="mb-0">{ad.description || 'No description available'}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyAdds;
