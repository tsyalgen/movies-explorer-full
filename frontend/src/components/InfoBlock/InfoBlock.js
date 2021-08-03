import './InfoBlock.css';

const InfoBlock = ({ title, text }) => {
  return (
    <div className="info-block">
      <h3 className="info-block__title">{title}</h3>
      <p className="info-block__text">{text}</p>
    </div>
  );
}

export default InfoBlock;