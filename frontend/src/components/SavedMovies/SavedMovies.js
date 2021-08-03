import './SavedMovies.css';
import Footer from "../Footer/Footer";
import SearchMovies from "../SearchMovies/SearchMovies";
import {useEffect, useState} from "react";

function SavedMovies({
                       movies, onDelete, checkLike, onSearchSubmit,
                       isFound, handleShortMovies, isShortMovies,
                       getShortMovies, isLoading
                     }) {

  const [shortSavedMovies, setShortSavedMovies] = useState([]);

  useEffect(() => {
    if (isShortMovies) {
      setShortSavedMovies(getShortMovies(movies));
    }
  }, [isShortMovies, movies])
  return (
    <>
      <main className="movies">
        <SearchMovies isSavedCards={true}
                      movies={!isShortMovies ? movies : shortSavedMovies}
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

export default SavedMovies;