import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todos } from './components/Todos'
import { Addtodo } from './components/Addtodo'

function App() {

  return (
    <>
      <center><h2>Todos</h2></center>
      <Addtodo />
      <Todos />
    </>
  )
}

export default App
