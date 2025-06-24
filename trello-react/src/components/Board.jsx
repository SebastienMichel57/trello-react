import React, { useState } from "react";
import Column from "./Column";
import Task from "./Task";


function Board() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newDoing, setNewDoing] = useState("");
  const [newDone, setNewDone] = useState("");

function handleAddTodo() {
  if (newTodo.trim() === "") return

  const newTask = {
    id: Date.now(),
    title: newTodo
  }

  setTodoTasks([...todoTasks, newTask])
  setNewTodo("");
}

function handleAddDoing() {
  if (newDoing.trim() === "") return 
  
  const newTask = {
    id: Date.now(),
    title: newDoing
  }

  setDoingTasks([...doingTasks, newTask])
  setNewDoing("");
}

function handleAddDone() {
  if (newDone.trim() === "") return

  const newTask = {
    id: Date.now(),
    title: newDone
  }

  setDoneTasks([...doneTasks, newTask])
  setNewDone("");
}
  
  return (
    <div className="flex gap-4">
        <Column title="À faire">
            {todoTasks.map(task => (
            <Task key={task.id} title={task.title} />
            ))}
            <div className="mb-4">
              <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter"){handleAddTodo();}}} placeholder="Nouvelle Tâches..." className="w-full p-2 rounded text-black" />
              <button onClick={handleAddTodo} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Ajouter</button>
            </div>
        </Column>
        <Column title="En cours">
            {doingTasks.map(task => (
            <Task key={task.id} title={task.title} />
            ))}
            <div className="mb-4">
              <input type="text" value={newDoing} onChange={(e) => setNewDoing(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter"){handleAddDoing();}}} placeholder="Nouvelle Tâches..." className="w-full p-2 rounded text-black" />
              <button onClick={handleAddDoing} className="mt-2 bg-yellow-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Ajouter</button>
            </div>            
        </Column>
        <Column title="Terminé">
            {doneTasks.map(task => (
            <Task key={task.id} title={task.title} />
            ))}
            <div className="mb-4">
              <input type="text" value={newDone} onChange={(e) => setNewDone(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter"){handleAddDone();}}} placeholder="Nouvelle Tâches..." className="w-full p-2 rounded text-black" />
              <button onClick={handleAddDone} className="mt-2 bg-green-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Ajouter</button>
            </div>            
        </Column>
    </div>
  );
}


export default Board;




