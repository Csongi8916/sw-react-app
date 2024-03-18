import { useState, useEffect } from 'react';
import { fetchCharacters, fetchPlanet } from '../../http.js';
import Card from '../Card/Card.jsx';
import classes from './CardContainer.module.scss';

function CardContainer() {
  const [isFetching, setIsFetching] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState();

  let imageId = 0;

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const availableCharacters = await fetchCharacters();
        const characters = await Promise.all(availableCharacters.map(async (character) => {
          const planet = await fetchPlanet(character.homeworld);
          return { ...character, planet };
        }));
        debugger;
        console.log(characters);
        setCharacters(characters);
      } catch (error) {
        setError({
          message:
            error.message || 'Could not fetch places, please try again later.',
        });
      } finally {
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <section className={classes.flexContainer}>
      {characters.map((character) => (
        <Card character={character} imageId={++imageId} className={classes.swCard} />
      ))}
    </section>
  );
}

export default CardContainer;
