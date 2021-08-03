import './MoviesCard.css';

function MoviesCard({ isSavedCards, movie, onDelete, onSave, checkLike }) {

  let isLiked = checkLike(movie);

  const cardLikeButtonClassName = (`card__like ${isLiked ? 'card__like_active' : ''} transparence`);

  const convertDuration = (duration) => {
    return (`${Math.trunc(duration/60)}ч ${duration%60}мин`)
  }

  function handleToggleCard() {
    isLiked ? onDelete(movie) : onSave(movie);
  }


  return(
    <div className="card">
      <div className="card__info">
        <div className="card__text">
          <h3 className="card__title">{movie.nameRU}</h3>
          <p className="card__duration">{convertDuration(movie.duration)}</p>
        </div>
        <button className={isSavedCards ? 'card__like_type_saved' : cardLikeButtonClassName}
                type="button"
                onClick={handleToggleCard}/>
      </div>
      <a className="card__link transparence" target="_blank" rel="noopener noreferrer" href={movie.trailer}>
        <img src={movie.image} alt={movie.nameRU} className="card__image"/>
      </a>
    </div>
  );
}

export default MoviesCard;