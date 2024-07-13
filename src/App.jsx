import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div className='flex justify-center items-center'>
        <h1 className='bg-red-400 rounded-2xl text-2xl font-bold py-4 px-3'>Redux Toolkit Project</h1>
      </div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
