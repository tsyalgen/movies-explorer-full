import '../Register/Register.css';
import {Link} from "react-router-dom";
import {useFormWithValidation} from "../../hooks/useFormValidation";

function Login({ onLogin }) {

  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation({});

  // const [userData, setUserData] = useState({
  //   email: '',
  //   password: ''
  // });
  //
  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setUserData({
  //     ...userData,
  //     [name]: value
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    onLogin(values.email, values.password);
    // resetForm();
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="register__form">
        <div className="register__input-section">
          <p className="register__input-label">E-mail</p>
          <input onChange={handleChange} className={`register__input ${errors.email && 'register__input-error_field'}`}
                 type="email" placeholder="E-mail" name="email"
                 value={values.email || ''} required />
          <span className="register__input-error">{errors.email}</span>
          <p className="register__input-label">Пароль</p>
          <input onChange={handleChange} className={`register__input ${errors.password && 'register__input-error_field'}`}
                 type="password" placeholder="Пароль" name="password"
                 value={values.password || ''} required />
          <span className="register__input-error">{errors.password}</span>
        </div>
        <div className="register__submit-section">
          <button className="register__submit transparence" disabled={!isValid} type="submit">Войти</button>
          <div className="register__redirect">
            <p className="register__redirect-question">Еще не зарегистрированы?</p>
            <Link to="/signup" className="register__link transparence">Регистрация</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;