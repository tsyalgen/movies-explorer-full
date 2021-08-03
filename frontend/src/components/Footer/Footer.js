import "./Footer.css";

const Footer = () => {
  return(
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__items">
        <p className="footer__date">&copy; {new Date().getFullYear()}</p>
        <div className="footer__links">
          <a className="footer__link transparence" href="https://praktikum.yandex.ru"
             rel="noreferrer noopener" target="_blank">Яндекс.Практикум</a>
          <a className="footer__link transparence" href="https://github.com/tsyalgen"
             rel="noreferrer noopener" target="_blank">GitHub</a>
          <a className="footer__link transparence" href="https://t.me/atsybin"
             rel="noreferrer noopener" target="_blank">Telegram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;