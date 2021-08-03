import './Profile.css';
import React, {useEffect, useState} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../../hooks/useFormValidation";

function Profile({onUpdate, onSignOut}) {

  const currentUser = React.useContext(CurrentUserContext);
  const {values, errors, isValid, handleChange} =
    useFormWithValidation({name: currentUser.name, email: currentUser.email});

  const [valuesEqual, setValuesEqual] = useState(true);


  function handleEqual() {
    currentUser.name === values.name && currentUser.email === values.email ?
      setValuesEqual(true)
      :
      setValuesEqual(false)
  }

  React.useEffect(() => {
    handleEqual();
  }, [handleChange]);




  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({
  //     ...userData,
  //     [name]: value
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    onUpdate(values.email, values.name);
  }

  useEffect(()  => {
    values.name = currentUser.name;
    values.email = currentUser.email;
  }, [currentUser])

  return (
    <main className="profile">
      <h2 className="profile__hello">Привет, {currentUser.name}</h2>
      <form className="profile__form" onSubmit={handleSubmit}>

        <div className="profile__item">
          <p className="profile__item_type_text">Имя</p>
          <input className={`profile__item_type_input ${errors.name && 'profile__item-error_field'}`}
                 name="name"
                 type="text"
                 placeholder="Имя"
                 required
                 value={values.name || ''}
                 onChange={handleChange}
                 minLength="2"
                 maxLength="30"/>
          <span className="profile__item-error">{errors.name}</span>
        </div>
        <div className="profile__item">
          <p className="profile__item_type_text">E-mail</p>
          <input className={`profile__item_type_input ${errors.email && 'profile__item-error_field'}`}
                 name="email"
                 type="email"
                 placeholder="Email"
                 required
                 value={values.email || ''}
                 onChange={handleChange}/>
          <span className="profile__item-error">{errors.email}</span>
        </div>
        <button className="profile__edit-button transparence"
                type="submit"
                disabled={!isValid || valuesEqual}>Редактировать
        </button>
      </form>
      <button onClick={onSignOut} className="profile__sign-out transparence">Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;