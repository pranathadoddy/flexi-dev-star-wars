import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PersonDetail() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if(!person){
      axios.get(`https://swapi.dev/api/people/${id}/`)
      .then(response => {
        setPerson(response.data);
        fetchDetails(response.data);
      })
      .catch(error => console.log(error));
    }
    
  }, []);

  const fetchDetails = (data) => {
    data.films.forEach(film => axios.get(film).then(response => setFilms(prev => [...prev, response.data])));
    data.species.forEach(specie => axios.get(specie).then(response => setSpecies(prev => [...prev, response.data])));
    data.starships.forEach(starship => axios.get(starship).then(response => setStarships(prev => [...prev, response.data])));
    data.vehicles.forEach(vehicle => axios.get(vehicle).then(response => setVehicles(prev => [...prev, response.data])));
  };

  if (!person) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">{person.name}</h1>
      <p><strong>Birth Year:</strong> {person.birth_year}</p>
      <p><strong>Gender:</strong> {person.gender}</p>
      <p><strong>Height:</strong> {person.height}</p>
      <p><strong>Mass:</strong> {person.mass}</p>
      
      <h2 className="text-3xl font-semibold mt-4">Films</h2>
      <ul className="list-disc list-inside">
        {films.map(film => (
          <li key={film.url}>{film.title}</li>
        ))}
      </ul>

      <h2 className="text-3xl font-semibold mt-4">Species</h2>
      <ul className="list-disc list-inside">
        {species.map(specie => (
          <li key={specie.url}>{specie.name}</li>
        ))}
      </ul>

      <h2 className="text-3xl font-semibold mt-4">Starships</h2>
      <ul className="list-disc list-inside">
        {starships.map(starship => (
          <li key={starship.url}>{starship.name}</li>
        ))}
      </ul>

      <h2 className="text-3xl font-semibold mt-4">Vehicles</h2>
      <ul className="list-disc list-inside">
        {vehicles.map(vehicle => (
          <li key={vehicle.url}>{vehicle.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PersonDetail;