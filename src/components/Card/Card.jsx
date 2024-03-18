import { useState, useRef } from 'react';
import DetailModal from '../DetailModal/DetailModal.jsx';
import classes from './Card.module.scss';

export default function Card({
  character,
  imageId,
}) {
  const [open, setOpen] = useState(false);

  const handleCardClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DetailModal
        isOpen={open}
        title={character.name}
        onClose={handleClose}
        className={classes.modalImg}
      >
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Birth: {character.birth_year}</p>
        <p>Films number: {character.films.length}</p>
        <p>Planet: {character.planet.name}</p>
        <p>Terrain: {character.planet.terrain}</p>
        <p>Climate: {character.planet.climate}</p>
      </DetailModal>
      <div className={classes.card} onClick={handleCardClick}>
        <img src={`https://picsum.photos/id/${imageId}/300/300`} alt={'Picture: ' + character.name} />
        <div className={classes.name}>
          <h3>{character.name}</h3>
        </div>
      </div>
    </> 
  );
}
