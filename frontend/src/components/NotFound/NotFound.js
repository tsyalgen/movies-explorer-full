import './NotFound.css';
import { useHistory } from "react-router-dom";

function NotFound() {

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  }


  return(
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <button className="not-found__back transparence" type="button" onClick={goBack}>Назад</button>
    </main>
  );
}

export default NotFound;