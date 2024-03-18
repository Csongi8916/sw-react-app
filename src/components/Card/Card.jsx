import classes from './Card.module.scss';

export default function Card({
  name,
  imageId,
  isLoading
}) {

  const handleCardClick = () => {
    alert();
  }

  return (
    <div className={classes.card} onClick={handleCardClick}>
      <img src={`https://picsum.photos/id/${imageId}/300/300`} alt={'Picture: ' + name} />
      <div className={classes.name}>
        <h3>{name}</h3>
      </div>
    </div>
  );
}
