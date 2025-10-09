import { useState, useEffect } from 'react'
import './App.css'

function booboo() {

  window.location.reload();
  
}

function App() {
  const [all_crimes, setCrimes] = useState([
    "Resisting Arrest",
    "Violation of Court Order",
    "Homicide",
    "Kidnapping",
    "Robbery",
    "Carjacking",
    "Assault",
    "Battery",
    "Assault w/ Deadly Weapon",
    "Child Abuse",
    "Disturbing the Peace",
    "Brandishing a Weapon",
    "Grand Theft",
    "Vandalism",
    "Trespassing",
    "Minor possessing alcohol",
    "Public Intoxication",
    "Hit and Run, Injury",
    "Speeding",
    "DUI",
    "Possession of Marijuana",
    "Possession of Paraphernalia",
    "Mental Case",
    "Arson",
    "Violating Geneva convention",
    "Cannibalism"
  ]);
  var [dogs, setDogs] = useState([]);
  useEffect(() => {
    const url = "https://dog.ceo/api/breeds/image/random/5";
    fetch(url)
      .then((r) => r.json())
      .then((response) => {
        setDogs(response.message);
      });
  }, []);
  var [correct_crimes, setCorrectCrimes] = useState([
    all_crimes[Math.floor(Math.random() * all_crimes.length)],
    all_crimes[Math.floor(Math.random() * all_crimes.length)],
    all_crimes[Math.floor(Math.random() * all_crimes.length)],
    all_crimes[Math.floor(Math.random() * all_crimes.length)],
    all_crimes[Math.floor(Math.random() * all_crimes.length)]
  ]);
  var player_crimes = ([...correct_crimes]);
  var clicked_crime = false;


  return (
    <div className="App">
      <h1>Dogs and their Crimes!</h1>
      <div class='flex-container'>
        <div class='grid-container'>
          {dogs &&
          dogs.map((dog) => (
            <div key={dog}>
              <img src={dog} />
            </div>
          ))}

        </div>
        <div class='grid-container'>
          {player_crimes &&
          player_crimes.map((crime) => (
            <button class='crime' key={crime}>
              {crime}
            </button>
          ))}
        </div>
        <button onClick={() => booboo()}> GIVE ME NEW DOGS!</button>
      </div>
    </div>
  )
}

export default App
