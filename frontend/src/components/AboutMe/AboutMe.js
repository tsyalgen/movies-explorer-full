import './AboutMe.css';
import SectionTitle from "../SectionTitle/SectionTitle";
import InfoBlock from "../InfoBlock/InfoBlock";
import me from "../../images/me.png";

const AboutMe = () => {
  return (
    <section className="about-me">
      <a name="student">
        <SectionTitle text="Студент"/>
      </a>
      <div className="about-me__info">
        <div className="about-me__text">
          <h2 className="about-me__name">Алексей</h2>
          <InfoBlock title="Веб-разработчик, 27 лет" text="Тут будет классный, креативный,
          лаконичный и  супер интересный текст обо мне, но когда я его придумаю хз."
                     className="about-me__description"/>
          <div className="about-me__links">
            <a className="about-me__link transparence" href="https://t.me/atsybin"
               rel="noreferrer noopener" target="_blank">Telegram</a>
            <a className="about-me__link transparence" href="https://github.com/tsyalgen"
               rel="noreferrer noopener" target="_blank">GitHub</a>
          </div>
        </div>
        <img className="about-me__photo" src={me} alt="фото разработчика"/>
      </div>
    </section>
  );
}

export default AboutMe;