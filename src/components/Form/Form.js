import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Form.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/semantic-ui.css'
import { CountryDropdown } from 'react-country-region-selector'

const Form = () => {

  var [disabledValue, setDisabled] = useState(true)
  const [errors, setErrors] = useState({});

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [role, setRole] = useState('')



  const validate = () => {

    let err = {}

    if (name === '') {
      err.name = 'El nombre es obligatorio'
    } else if (name.length < 2 && name.length > 0) {
      err.name = 'Debe ingresar al menos 2 letras'
    }

    if (lastName === '') {
      err.lastName = 'El apellido es obligatorio'
    } else if (lastName.length < 2 && lastName.length > 0) {
      err.lastName = 'Debe ingresar al menos 2 letras'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      err.email = 'El email no es válido, debe tener el siguiente formato: nombre@dominio.com';
    }

    if (role === '') {
      err.role = 'El rol es obligatorio'
    } else if (role.length < 2 && role.length > 0) {
      err.role = 'Debe ingresar al menos 2 letras'
    }

    if (country === '') {
      err.country = 'Debe seleccionar su país'
    } 

    if (phoneNum === '') {
      err.phoneNum = 'Debe ingresar un numero'
    }  else if(phoneNum.length < 8 && phoneNum.length > 0){
      err.phoneNum = 'Ingrese un numero válido'
    }

    setErrors(err)
    Object.keys(err).length === 0 ? setDisabled(false) : setDisabled(true)
    return Object.keys(err).length === 0;

  }


 

  const handleSubmit = (event) => {
    event.preventDefault()
    validate();
    axios({
      method: 'post',
      url: 'http://localhost:5000/',
      data:{
        name,
        lastName,
        email,
        country,
        phoneNum,
        role
      }
    }).then(console.log('Sent to DB'));
  }  

  return (
    <>
      <form className='form-main' onSubmit={handleSubmit}>
        <div className='fo-in'>
          <p>Nombre</p>
          <input name='name'
            onChange={e => (setName(e.target.value), validate())}
          />
          {errors.name && <span className='fade-in'>{errors.name}</span>}
        </div >
        <div className='fo-in'>
        <p>Apellido</p>
          <input name='lastName'
            onChange={e => (setLastName(e.target.value), validate())}
          />
          {errors.lastName && <span className='fade-in' >{errors.lastName}</span>}
        </div>
        <div className='fo-in' >
          <p>E-Mail del trabajo</p>
          <input name='email'
            onChange={e => (setEmail(e.target.value), validate())} />
          {errors.email && <span className='fade-in' >{errors.email}</span>}
        </div>

        <div className='fo-in' >
          <p>Pais</p>
          <CountryDropdown
          value={country}
          onChange={(val) => (setCountry(val), validate())} />
           {errors.country && <span className='fade-in' >{errors.country}</span>}
          </div>
        

        <div className='fo-in'>
        <p>Número de celular</p>
          <PhoneInput
            inputStyle={{ width: '100%', height: '60px' }}
            containerStyle={{ width: '100%', border: '1px #68737D solid', borderRadius: '5px' }}
            country={'ar'}
            onChange={phone => (setPhoneNum(phone), validate())}
          />
           {errors.phoneNum && <span className='fade-in' >{errors.phoneNum}</span>}
        </div>
        <div className='fo-in'>
        <p>Trabajo</p>
          <input name='role'
            onChange={e => (setRole(e.target.value), validate())} />
             {errors.role && <span className='fade-in' >{errors.role}</span>}
        </div>
        <button disabled={disabledValue} className='submit-button' type='submit'>Inscríbete</button>
      </form>
    </>
  )
}

export default Form