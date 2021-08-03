import './Techs.css';
import SectionTitle from "../SectionTitle/SectionTitle";

const Techs = () => {
  return (
    <section className="techs">
      <a name="techs">
        <SectionTitle text="Технологии"/>
      </a>
      <h1 className="techs__title">7 технологий</h1>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте. Чтобы раскрыть полный функционал сайта - авторизируйтесь.</p>
      <ul className="techs__items">
        <li className="techs__item transparence">HTML</li>
        <li className="techs__item transparence">CSS</li>
        <li className="techs__item transparence">JS</li>
        <li className="techs__item transparence">React</li>
        <li className="techs__item transparence">Git</li>
        <li className="techs__item transparence">Express.js</li>
        <li className="techs__item transparence">MongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;