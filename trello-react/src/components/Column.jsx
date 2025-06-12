import React from "react";

function Column({ title, children }) {
  return (
    <div className="bg-gray-800 p-4 rounded w-1/3">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      {children}
    </div>
  )
}

export default Column;