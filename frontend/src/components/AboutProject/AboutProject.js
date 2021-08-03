import './AboutProject.css';
import SectionTitle from "../SectionTitle/SectionTitle";
import InfoBlock from "../InfoBlock/InfoBlock";

const AboutProject = () => {
  return (
    <section className="about-project">
      <a name="project">
        <SectionTitle text="О проекте"/>
      </a>
      <div className="about-project__description">
        <InfoBlock title="Дипломный проект включал 5 этапов"
                   text="Составление плана, работу над бэкендом, вёрстку,
                   добавление функциональности и финальные доработки."/>
        <InfoBlock title="На выполнение диплома ушло 5 недель"
                   text="У каждого этапа был мягкий и жёсткий дедлайн,
                   которые нужно было соблюдать, чтобы успешно защититься."/>
      </div>
      <div className="about-project__graph">
        <div className="about-project__graph_type_backend">1 неделя</div>
        <div className="about-project__graph_type_frontend">4 недели</div>
        <div className="about-project__graph_type_text">Back-end</div>
        <div className="about-project__graph_type_text">Front-end</div>
      </div>

    </section>
  );
}

export default AboutProject;