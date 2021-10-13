//import { Box, List, ListItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
function App() {
  const [cast, setCast] = useState([]);
  const apiKey = "d2d1e21e8a8e48f592b0deb6d48f6571";
  //  const [loading, setLoading] = useState();
  const getCast = () => {
    return fetch("http://mediastack.lan:7878/api/v3/movie?apiKey=" + apiKey)
      .then((response) => response.json())
      .then((data) => setCast(data))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getCast();
  }, []);

  return (
    <div>
      {cast
        .filter((title) => title.id < 11)
        .map((home) => (
          <section className="buttons">
            <h1 className="button is-dark is-outlined is-rounded" key={home.id}>
              {home.title}
            </h1>
            {/* <img
            src={home.images[0].remoteUrl}
            alt={home.title}
            width="150"
            height="150"
          /> */}
          </section>
        ))}
    </div>
  );
}

export default App;
