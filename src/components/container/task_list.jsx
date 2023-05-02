import React from 'react';
import { LEVELS } from '../../models/levels.enum.js';
import { Task } from '../../models/task.class.js'
import TaskComponent from '../pure/task.jsx';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
    const changestate = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }
    return (
        <div>
            <div>
                <h1>Your Tasks:</h1> 
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;
