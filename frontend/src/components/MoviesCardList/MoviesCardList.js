import {useEffect, useState} from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard /MoviesCard";
import Preloader from "../Preloader/Preloader";
import {ADD_MIN_MOVIES, ADD_MOVIES, MEDIUM_SCREEN_, MIN_MOVIES, MOVIES, SMALL_SCREEN} from "../../utils/constants";

const MoviesCardList = ({isSavedCards, movies, onDelete, onSave, checkLike, isFound, isLoading}) => {

  const [currentCount, setCurrentCount] = useState(() => {
    const width = window.innerWidth;
    if (width > SMALL_SCREEN) {
      return MOVIES;
    } else {
      return MIN_MOVIES;
    }
  });

  const [addCount, setAddCount] = useState(() => {
    const width = window.innerWidth;
    if (width > MEDIUM_SCREEN_) {
      return ADD_MOVIES;
    } else {
      return ADD_MIN_MOVIES;
    }
  });

  const [displayedMovies, setDisplayedMovies] = useState([]);

  function handleResize() {
    const width = window.innerWidth;
    if (width <= SMALL_SCREEN) {
      setCurrentCount(MIN_MOVIES);
      setAddCount(ADD_MIN_MOVIES);
    } else if (width < MEDIUM_SCREEN_) {
      setCurrentCount(MOVIES);
      setAddCount(ADD_MIN_MOVIES);
    } else {
      setCurrentCount(MOVIES);
      setAddCount(ADD_MOVIES);
    }
  }

  function renderAddCount() {
    const count = Math.min(movies.length, currentCount + addCount);
    const moviesForAdd = movies.slice(currentCount, count);
    setDisplayedMovies([...displayedMovies, ...moviesForAdd]);
    setCurrentCount(count);
  }

  function handleAddMoreMovies() {
    renderAddCount();
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    !isSavedCards && movies !== null ? setDisplayedMovies(movies.slice(0, currentCount)) : setDisplayedMovies(movies);
  }, [movies])


  return (
    <section className="movies-card-list">
      {isLoading ? <Preloader/> : (
        !isFound ? <h2 className="movies-card-list__not-found">Ничего не найдено</h2>
          :
          (movies !== null ?

              displayedMovies.map((movie) => {
                return (
                  <MoviesCard key={movie.movieId}
                              movie={movie}
                              isSavedCards={isSavedCards}
                              onDelete={onDelete}
                              onSave={onSave}
                              checkLike={checkLike}/>
                )
              })
              :
              <h2 className="movies-card-list__not-found">Введите запрос</h2>
          )
      )}
      {!isSavedCards && !isLoading && (movies !== null && movies.length > currentCount) &&
      <button className="movies-card-list__more-button transparence"
              type="button"
              onClick={handleAddMoreMovies}>Еще
      </button>
      }
    </section>
  );
}

export default MoviesCardList;