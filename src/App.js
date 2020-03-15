import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photo from './components/Photo';
import PhotoInfo from './components/PhotoInfo'
import "./App.css";
 
function App() {
  const [photoData, setPhotoData] = useState([])
  const [date, setDate] = useState('')

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(res => setPhotoData(res.data))
      .catch(error => {
        console.log('The data was not returned', error)
      })
    }, [date])
    
    const handleClick = (e) => {
      console.log(e.target.value)
      setDate(e.target.value)
    }

  return (
    <div className="App">
      <h1>NASA PHOD</h1>
      <Photo image={photoData.url} /> 
      <PhotoInfo title={photoData.title} explanation={photoData.explanation}/>
      <input type='date' name='Photo Date' onClick={handleClick}/>
    </div>
  );
}

export default App;
