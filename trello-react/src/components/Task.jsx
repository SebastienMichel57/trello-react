import React from 'react'


function Task({ title }) {
  return (
    <div className="bg-gray-700 p-3 rounded mb-2 shadow">
      <p className="text-sm">{title}</p>
    </div>
  )
}

export default Task
