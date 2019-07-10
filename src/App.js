import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nasaPhoto, setNasaPhoto] = useState([]);
  console.log("nasaPhoto Log", nasaPhoto);

  const fetchNasaPhoto = () => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=Di0ZiC8Wm0h8bPQPo6iCu8byCqbJkgLvFpUL2swW&date=2012-03-14`
    )
      .then(res => res.json())
      // .then(res => console.log("RES LOG 1", res))
      .then(res => {
        setNasaPhoto(res);
      })
      // .then(res => setNasaPhoto(res.explanation))
      // .then(console.log("nasaPhoto after set", nasaPhoto))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchNasaPhoto();
  }, []);

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p> */}
      <h1>{nasaPhoto.explanation}</h1>
      <img src={nasaPhoto.url} />
    </div>
  );
}

export default App;
