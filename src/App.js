import React, { useState, useEffect } from "react";
import { Grid, Container, Image, Header, Icon } from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
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
    <Grid
      textAlign="center"
      style={{ height: "100vh", width: "90%", margin: "20px auto" }}
      verticalAlign="middle"
    >
      <Header as="h1">
        <Icon name="space shuttle" />
        <Header.Content>{nasaPhoto.title}</Header.Content>
      </Header>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image src={nasaPhoto.url} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Container>{nasaPhoto.explanation}</Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    // <div className="App">
    //   {/* <p>
    //     Read through the instructions in the README.md file to build your NASA
    //     app! Have fun !
    //   </p> */}
    //   <h3>{nasaPhoto.explanation}</h3>
    //   <img src={nasaPhoto.url} />
    // </div>
  );
}

export default App;
