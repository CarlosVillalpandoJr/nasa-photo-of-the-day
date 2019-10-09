import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photo from './components/Photo';
import PhotoInfo from './components/PhotoInfo'
import "./App.css";

function App() {
  const [photoData, setPhotoData] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => setPhotoData(res.data))
      .catch(error => {
        console.log('The data was not returned', error)
      })
    }, [])
    
    console.log(photoData)
  return (
    <div className="App">
      <h1>NASA PHOD</h1>
      <Photo image={photoData.url} /> 
      <PhotoInfo title={photoData.title} explanation={photoData.explanation}/>
    </div>
  );
}

export default App;
