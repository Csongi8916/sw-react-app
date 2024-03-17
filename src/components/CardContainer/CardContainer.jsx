import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../http.js';
import Card from '../Card/Card.jsx';

function CardContainer() {
  const [isFetching, setIsFetching] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const availableCharacters = await fetchCharacters();
        debugger;
        // const availableCharacters = [{name: 'sad'}, {name: 'abc'}]
        setIsFetching(false);
        setCharacters(availableCharacters);
      } catch (error) {
        setError({
          message:
            error.message || 'Could not fetch places, please try again later.',
        });
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <section>
      {console.log(characters)}
      {characters.map((character) => (
        <Card name={character.name} />
      ))}
    </section>  
  );
}

export default CardContainer;
