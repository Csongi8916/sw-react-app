import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../http.js';
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
        setCharacters(availableCharacters);
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
        <Card name={character.name} imageId={++imageId} className={classes.swCard} />
      ))}
    </section>  
  );
}

export default CardContainer;
