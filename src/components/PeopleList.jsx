import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PeopleList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setPeople(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">People List</h1>
      <ul className="space-y-2">
        {people.map(person => (
          <li key={person.url}>
            <Link to={`/detail/${person.url.split('/')[5]}`} className="text-starwars-primary hover:text-starwars-secondary text-xl">{person.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;