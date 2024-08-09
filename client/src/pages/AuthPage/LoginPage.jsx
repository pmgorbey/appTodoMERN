import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './AuthPage.scss';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  // Change Data
  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
    console.log({...form});
  }

  // Send Data to Backend
  const registerHandler = async () => {
    try {
      await axios.post('/api/auth/register', {...form}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => console.log(response));
      console.log(form);
    } catch(err) {
      console.log(err);
    }
  }

  return (
        <React.Fragment>
            <div className="container">
                <div className="auth-page">

                        {/* AUTHORIZATION */}
                        <h3>Authorization</h3>
                        <form className='form form-login' onSubmit={e => e.preventDefault()}>
                          <div className="row">

                            {/* EMAIL */}
                            <div className="input-field col s12">
                              <input
                                type='text'
                                name='email'
                                className='validate'
                                onChange={changeHandler}
                              />
                              <label htmlFor='email'>Email</label>
                            </div>

                            {/* PASSWORD */}
                            <div className="input-field col s12">
                              <input
                                type='password'
                                name='password'
                                className='validate'
                                onChange={changeHandler}
                              />
                              <label htmlFor='password'>Password</label>
                            </div>

                          </div>
                          <div className="row">
                            <button
                              className='wawes-effect wawes-light btn blue'
                            >
                              Sign In
                            </button>
                            <Link to="/register" className="btn-outline btn-reg">Have not an account ?</Link>
                          </div>
                        </form>
   
                </div>
            </div>
        </React.Fragment>
  )
}

export default LoginPage;