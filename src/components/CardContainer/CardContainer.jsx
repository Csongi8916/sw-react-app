import { useState, useEffect } from 'react';
import { fetchCharacters, fetchPlanet } from '../../http.js';
import Card from '../Card/Card.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import classes from './CardContainer.module.scss';
import nextBtnImg from '../../assets/next-ico.png';
import prevBtnImg from '../../assets/prev-ico.png';

function CardContainer() {
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState();

  let imageId = 0;
  let pageIndex = 0;

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const availableCharacters = await fetchCharacters(currentPage);
        const characters = await Promise.all(availableCharacters.map(async (character) => {
          const planet = await fetchPlanet(character.homeworld);
          return { ...character, planet };
        }));
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
  }, [currentPage]);

  const handleNextCharacter = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePrevCharacter = () => {
    if (currentPage === 1) {
      alert('There is not other previous pages!');
      return;
    }
    setCurrentPage(currentPage - 1);
  }

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
      <>
        <section className={classes.flexContainer}>
          {characters.map((character) => (
            <Card character={character} imageId={++imageId} className={classes.swCard} />
          ))}
        </section>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <h3>Actual Page Number: {currentPage}</h3>
        </div>
        <div className={classes.paginationArea}>
          <button className={classes.paginastionBtn} onClick={handlePrevCharacter}>
            <img src={prevBtnImg} alt="Next" />
          </button>
          <button className={classes.paginastionBtn} onClick={handleNextCharacter}>
            <img src={nextBtnImg} alt="Next" />
          </button>
        </div>
      </>
      )}
    </>
  );
}

export default CardContainer;
