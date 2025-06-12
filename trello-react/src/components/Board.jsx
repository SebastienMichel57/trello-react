import React from "react";
import Column from "./Column";
import Task from "./Task";

function Board() {
  return (
    <div className="flex gap-4">
        <Column title="À faire">
            <Task title=" " />
                      
        </Column>
        <Column title="En cours">
            {/* Tâches en cours */}
        </Column>
        <Column title="Terminé">
            {/* Tâches terminées */}
        </Column>
    </div>
  );
}


export default Board;