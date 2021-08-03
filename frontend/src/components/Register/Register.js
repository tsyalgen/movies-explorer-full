import './Register.css';
import {Link} from "react-router-dom";
import {useFormWithValidation} from "../../hooks/useFormValidation";

function Register({ onRegister }) {

  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation({});

  // const [userData, setUserData] = useState({
  //   email: '',
  //   password: '',
  //   name: '',
  // })

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({
  //     ...userData,
  //     [name]: value
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    onRegister(values.email, values.password, values.name);
    // resetForm();
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="register__form">
        <div className="register__input-section">
          <p className="register__input-label">Имя</p>
          <input onChange={handleChange} value={values.name || ''}
                 className={`register__input ${errors.name && 'register__input-error_field'}`} type="text"
                 placeholder="Имя" name="name"
                 minLength="1" maxLength="25" required />
          <span className="register__input-error">{errors.name || ''}</span>
          <p className="register__input-label">E-mail</p>
          <input onChange={handleChange} value={values.email || ''}
                 className={`register__input ${errors.email && 'register__input-error_field'}`} type="email"
                 placeholder="E-mail" name="email" required />
          <span className="register__input-error">{errors.email || ''}</span>
          <p className="register__input-label">Пароль</p>
          <input onChange={handleChange} value={values.password || ''}
                 className={`register__input ${errors.password && 'register__input-error_field'}`} type="password"
                 placeholder="Пароль" name="password"
                 minLength="3" maxLength="15" required />
          <span className="register__input-error">{errors.password}</span>
        </div>
        <div className="register__submit-section">
          <button className="register__submit transparence" type="submit" disabled={!isValid}>Зарегистрироваться</button>
          <div className="register__redirect">
            <p className="register__redirect-question">Уже зарегистрированы?</p>
            <Link to="/signin" className="register__link transparence">Войти</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;