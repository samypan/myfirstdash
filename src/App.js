//import { Box, List, ListItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
//import docstyle from "./App.css";

function App() {
  const [cast, setCast] = useState([]);
  const [image, setImage] = useState();
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

  const handleClick = (i) => {
    setImage(i);
  };
  return (
    <div>
      <section className=" buttons ">
        {cast
          .filter((title) => title.id < 11)
          .map((home) => (
            <div
              className=" button is-dark is-outlined is-rounded "
              key={home.id}
              onClick={() => handleClick(home.images[0].remoteUrl)}
            >
              {home.title}
            </div>
          ))}
      </section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Select a movie title to see the cover-art.
        <div class="box">
          <img src={image} width="200"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
