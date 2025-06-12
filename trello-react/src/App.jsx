import React from 'react'
import Board from './components/Board'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-8">📋 To-Do Trello</h1>
      <Board />
    </div>
  )
}

export default App

