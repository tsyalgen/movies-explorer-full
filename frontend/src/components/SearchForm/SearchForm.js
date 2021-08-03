import './SearchForm.css';
import icon from '../../images/icon.svg';
import iconWhite from '../../images/icon-white.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


function SearchForm({
                      handleSubmit, handleChange, text,
                      handleShortMovies, isShortMovies, errors, isValid, isLoading
                    }) {


  return (
    <section className="search-form">
      <div className={`search-form__container ${!isValid && 'search-form__container_error'}`}>
        <form className="search-form__form" onSubmit={handleSubmit} noValidate>
          <img src={icon} alt="иконка поиска" className="search-form__icon"/>
          <input className="search-form__input"
                 name="search"
                 type="text"
                 placeholder="Фильм"
                 minLength="1"
                 maxLength="250"
                 autoComplete="off"
                 value={text.search || ''}
                 onChange={handleChange}
                 required
                 disabled={isLoading}/>
          <button className="search-form__button transparence" disabled={!isValid || isLoading} type="submit"><img
            src={iconWhite}
            alt="иконка поиска"/>
          </button>
          <span className="search-form__border"/>
        </form>
        <div className="search-form__checkbox">
          <FilterCheckbox handleShortMovies={handleShortMovies}
                          isShortMovies={isShortMovies}/>
          <p className="search-form__shortfilms">Короткометражки</p>
        </div>
      </div>
      <span className="search-form__input-error">{errors.search}</span>
    </section>
  );
}

export default SearchForm;