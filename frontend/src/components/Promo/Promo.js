import './Promo.css';
import promo from '../../images/promo.svg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__background" />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={promo} alt="изображение практикума" className="promo__logo" />
    </section>
  );
}

export default Promo;