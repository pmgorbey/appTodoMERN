import React from 'react';

import './AuthPage.scss';

const LoginPage = () => {
  return (
        <React.Fragment>
            <div className="container">
                <div className="auth-page">

                        {/* AUTHORIZATION */}
                        <h3>Authorization</h3>
                        <form className='form form-login'>
                          <div className="row">

                            {/* EMAIL */}
                            <div className="input-field col s12">
                              <input
                                type='text'
                                name='email'
                                className='validate'
                              />
                              <label htmlFor='email'>Email</label>
                            </div>

                            {/* PASSWORD */}
                            <div className="input-field col s12">
                              <input
                                type='password'
                                name='password'
                                className='validate'
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
                            <a href="/register" className="btn-outline btn-reg">Have not an account ?</a>
                          </div>
                        </form>
   
                </div>
            </div>
        </React.Fragment>
  )
}

export default LoginPage;