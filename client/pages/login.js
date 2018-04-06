// import Link from 'next/link'
// import Router from 'next/router'
import Head from 'next/head'
import '../scss/style.scss'

export default () =>
  <div>
    <Head>
      <title>Login</title>
    </Head>
    <main className='text-center pt-5'>
      <form className='app-form-login'>
        <img
          className='mb-4'
          src='https://getbootstrap.com/assets/brand/bootstrap-solid.svg' alt='true'
          width={72} height={72} />
        <h1 className='h3 mb-3 font-weight-normal'>Please login</h1>
        <label htmlFor='inputEmail' className='sr-only'>Email address</label>
        <input
          type='email' id='inputEmail' className='form-control'
          placeholder='Email address' required autoFocus />
        <label htmlFor='inputPassword' className='sr-only'>Password</label>
        <input
          type='password' id='inputPassword' className='form-control'
          placeholder='Password' required />
        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' defaultValue='remember-me' /> Remember me
          </label>
        </div>
        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          Login
        </button>
        <p className='mt-5 mb-3 text-muted'>LoopNext © 2018</p>
      </form>
    </main>
  </div>
