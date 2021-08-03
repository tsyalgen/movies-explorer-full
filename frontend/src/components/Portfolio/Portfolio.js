import './Portfolio.css';
import icon from "../../images/link-icon.svg"

const Portfolio = () => {
  return(
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link transparence">
          <a href="https://tsyalgen.github.io/how-to-learn/" target="_blank"
             className="portfolio__link_type_link" rel="noreferrer noopener">
            <p className="portfolio__link_type_text">Статичный сайт</p>
            <img className="portfolio__link_type_img" src={icon} alt="иконка ссылки" />
          </a>
        </li>
        <li className="portfolio__link transparence">
          <a href="https://tsyalgen.github.io/russian-travel/" target="_blank"
             className="portfolio__link_type_link" rel="noreferrer noopener">
            <p className="portfolio__link_type_text">Адаптивный сайт</p>
            <img className="portfolio__link_type_img" src={icon} alt="иконка ссылки" />
          </a>
        </li>
        <li className="portfolio__link transparence">
          <a href="https://tsyalgen.students.nomoredomains.club/" target="_blank"
             className="portfolio__link_type_link" rel="noreferrer noopener">
            <p className="portfolio__link_type_text">Одностраничное приложение</p>
            <img className="portfolio__link_type_img" src={icon} alt="иконка ссылки" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;