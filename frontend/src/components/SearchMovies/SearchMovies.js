import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {useState} from "react";
import {useFormWithValidation} from "../../hooks/useFormValidation";


function SearchMovies({
                        isSavedCards, movies, onSave, onDelete,
                        checkLike, onSearchSubmit, isFound,
                        isShortMovies, handleShortMovies, isLoading
                      }) {

  const {values, errors, isValid, handleChange} = useFormWithValidation({});

  // const [queryText, setQueryText] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    onSearchSubmit(values.search);
  }


  return (
    <>
      <SearchForm handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  text={values}
                  isShortMovies={isShortMovies}
                  handleShortMovies={handleShortMovies}
                  isValid={isValid}
                  errors={errors}
                  isLoading={isLoading}/>
      <MoviesCardList isSavedCards={isSavedCards}
                      movies={movies}
                      onSave={onSave}
                      onDelete={onDelete}
                      checkLike={checkLike}
                      isFound={isFound}
                      isLoading={isLoading}
      />
    </>
  )
}

export default SearchMovies;