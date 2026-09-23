import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './components/Counter'
import GlobalCounter from './components/GlobalCounter'

function App() {

  return (
    <>
      <Counter />
      <Counter />
      <Counter />
      <GlobalCounter />
      <GlobalCounter />
      <GlobalCounter />


    </>
  )
}

export default App
