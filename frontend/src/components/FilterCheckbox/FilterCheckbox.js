import './FilterCheckbox.css';

function FilterCheckbox ({handleShortMovies, isShortMovies}) {

  return (
    <div className="filter-checkbox">
      <input type="checkbox" name="checkbox" className="filter-checkbox__input"
             onChange={handleShortMovies}
             checked={isShortMovies}/>
    </div>
  );
}

export default FilterCheckbox;