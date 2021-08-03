import './Movies.css';
import Footer from "../Footer/Footer";
import SearchMovies from "../SearchMovies/SearchMovies";
import {useEffect, useState} from "react";

function Movies({
                  movies, onDelete, onSave, checkLike, onSearchSubmit,
                  isFound, handleShortMovies, isShortMovies, getShortMovies, isLoading
                }) {

  const [shortMovies, setShortMovies] = useState([]);

  useEffect(() => {
    if (isShortMovies && movies !== null) {
      setShortMovies(getShortMovies(movies));
    } else {
      setShortMovies(movies);
    }
  }, [isShortMovies])


  return (
    <>
      <main className="movies">
        <SearchMovies isSavedCards={false}
                      movies={isShortMovies && shortMovies !== null ? shortMovies : movies}
                      onSave={onSave}
                      onDelete={onDelete}
                      checkLike={checkLike}
                      onSearchSubmit={onSearchSubmit}
                      isFound={isFound}
                      handleShortMovies={handleShortMovies}
                      isShortMovies={isShortMovies}
                      isLoading={isLoading}/>

      </main>
      <Footer/>
    </>
  );
}

export default Movies;