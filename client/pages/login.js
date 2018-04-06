// import Link from 'next/link'
// import Router from 'next/router'
import React, { Component } from 'react'
import Head from 'next/head'
import auth from '../lib/auth'
import '../scss/style.scss'

export default class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.state = {email: null, password: null}
  }

  render () {
    return (
      <div>
        <Head>
          <title>Login</title>
        </Head>
        <main className='text-center pt-5'>
          <form className='app-form-login' onSubmit={this._login}>
            <img
              className='mb-4'
              src='https://getbootstrap.com/assets/brand/bootstrap-solid.svg'
              alt='true'
              width={72} height={72} />
            <h1 className='h3 mb-3 font-weight-normal'>Please login</h1>
            <label htmlFor='inputEmail' className='sr-only'>Email</label>
            <input
              type='email' id='inputEmail' className='form-control'
              placeholder='Email address' required autoFocus />
            <label htmlFor='inputPassword' className='sr-only'>Password</label>
            <input
              type='password' id='inputPassword' className='form-control'
              placeholder='Password' required />
            <div className='pt-3'>
              <button
                className='btn btn-lg btn-primary btn-block'
                type='submit'>
                Login
              </button>
            </div>
            <p className='mt-5 mb-3 text-muted'>LoopNext © 2018</p>
          </form>
        </main>
      </div>
    )
  }

  _login = async (e) => {
    e.preventDefault()
    const {email, password} = this.state
    try {
      const loginSuccess = await auth.login(email, password)
      if (loginSuccess) {
        alert('Login success.')
      } else {
        alert('Incorrect email or password.')
      }
    } catch (e) {
      alert('Network error!')
    }
  }
}
