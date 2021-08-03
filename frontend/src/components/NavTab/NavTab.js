import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="navtab">
      <p><a href="/#project" className="navtab__link transparence">О проекте</a></p>
      <p><a href="/#techs" className="navtab__link transparence">Технологии</a></p>
      <p><a href="/#student" className="navtab__link transparence">Студент</a></p>
    </nav>
  );
}

export default NavTab;