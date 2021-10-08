import React from 'react'
import Div from '../../components/Div/Div'

import './Spring.css'
import logo from '../../Assets/logo.svg'

const Spring = () => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>
    <main className='App-main'>
      <Div />
      <button>Activate/Deactive phys-color</button>
    </main>
  </div>
  )
}

export default Spring