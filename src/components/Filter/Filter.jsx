import { useEffect, useState, useContext } from 'react';
import { fetchFilms, fetchPlanets } from '../../http.js';
import { CharacterContext } from '../../store/character-context.jsx';
import classes from './Filter.module.scss';

export default function Filter() {
  const { characters, filterCharacters } = useContext(CharacterContext);
  const [name, setName] = useState('');
  const [film, setFilm] = useState();
  const [planet, setPlanet] = useState();
  const [films, setFilms] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchFilmsAndPlanets() {
      try {
        const filmData = await fetchFilms();
        const planetData = await fetchPlanets();
        setFilms(filmData);
        setPlanets(planetData);
      } catch (error) {
        setError({
          message:
            error.message || 'Could not fetch places, please try again later.',
        });
      }
    }
    fetchFilmsAndPlanets();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
    filterCharacters(event.target.value);
  }

  const handleFilmChange = (event) => {
    setFilm(event.target.value);
  }

  const handlePlanetChange = (event) => {
    setPlanet(event.target.value);
  }

  return (
    <form className={classes.filterContainer}>
      <input type="text" placeholder='Name...' onChange={handleNameChange} />
      <label for="films">Films:</label>
      <select name="films" id="films" onChange={handleFilmChange}>
        {films.map((movie) => (
          <option value={movie.episode_id}>{movie.title}</option>
        ))}
      </select>
      <label for="planets">Planets:</label>
      <select name="planets" id="planets" onChange={handlePlanetChange}>
        {planets.map((planet) => (
          <option value={planet.name}>{planet.name}</option>
        ))}
      </select>
    </form>
  );
}
 