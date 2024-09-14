import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from "./TicTacToeGame/Board"

function App() {

  return (
    <div>
       <h1 className="head">Tic Tac Toe Game</h1>
    <div className="App">
      <Board />
      </div> 
      </div>
  )
}

export default App
