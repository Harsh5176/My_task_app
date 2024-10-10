import React, { useEffect, useState } from 'react';
import Card from './Card';  

const Allcards = () => {
  const [data, setData] = useState([]);

  // Fetch notes data from backend API
  useEffect(() => {
    fetch('http://localhost:5500/notes')
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(err => console.error("Error fetching notes:", err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.length > 0 ? (
          data.map((item, index,) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <Card
                id={item.id}
                Date={item.Date}
                Note={item.Note}
              />
            </div>
          ))
        ) : (
          <p className="text-center">No notes available.</p>
        )}
      </div>
    </div>
  );
}

export default Allcards;
