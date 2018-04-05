import Link from 'next/link'
// import Router from 'next/router'
import Head from 'next/head'
import '../scss/style.scss'

export default () =>
  <div>
    <Head>
      <title>Welcome to loopnext</title>
    </Head>
    <div className='app-navbar'>
      <div className='logo'>LoopNext</div>
      <div className='links'>
        <Link href='/login'>
          <a className='link'>Login</a>
        </Link>
        <Link href='/login'>
          <a className='link'>Signup</a>
        </Link>
      </div>
    </div>
    <div className='app-body'>
      <div>App body</div>
    </div>
    <div className='app-footer'>
      <div>App footer</div>
    </div>
  </div>
