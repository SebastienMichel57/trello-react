import React, { useState } from "react";
import Column from "./Column";
import Task from "./Task";


function Board() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

function handleAddTask() {
  if (newTaskTitle.trim() === "") return

  const newTask = {
    id: Date.now(),
    title: newTaskTitle
  }

  setTodoTasks([...todoTasks, newTask])
  setNewTaskTitle("");

}
  
  return (
    <div className="flex gap-4">
        <Column title="À faire">
            {todoTasks.map(task => (
            <Task key={task.id} title={task.title} />
            ))}
            <div className="mb-4">
              <input type="text" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter"){handleAddTask();}}} placeholder="Nouvelle Tâches..." className="w-full p-2 rounded text-black" />
              <button onClick={handleAddTask} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Ajouter</button>
            </div>
        </Column>
        <Column title="En cours">
            {doingTasks.map(task => (
            <Task key={task.id} title={task.title} />
            ))}
            
        </Column>
        <Column title="Terminé">
            {doneTasks.map(task => (
            <Task key={task.id} title={task.title} />
            ))}
           
        </Column>
    </div>
  );
}


export default Board;




