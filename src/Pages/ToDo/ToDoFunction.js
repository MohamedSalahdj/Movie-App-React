import React, { useEffect, useState } from 'react';
import './todo.css';

function TaskContainer() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const getValue = (e) => {
        setInputValue(e.target.value)
    }
    const createTask = () => {
        setTasks([
            ...tasks,
            {taskName: inputValue, done:false}
        ])
        setInputValue('');
    }

    
    const doneTask = index => {
        console.log("checked")
        const updatedTasks = [...tasks];
            updatedTasks[index].done = true;
            setTasks(updatedTasks);
        console.log(tasks)
    };

    const deleteTask = index => {
        const updateTask = [...tasks];
        updateTask.splice(index, 1);
        setTasks(updateTask)
    };

    return (
        <div className="container mt-5">
        <div className="d-flex justify-content-around">
            <input
            style={{"width":"70%"}}
                type="text"
                className="form-control"
                placeholder="To do task"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={inputValue}
                onChange={(e) => getValue(e)}
            />
            <button
             style={{"width":"20%"}}
                type="button"
                className="btn btn-primary"
                onClick={() => createTask()}
            >
                Add
            </button>
        </div>


        <div className="row mt-5 w-75 mx-auto">
            {tasks.map((task, index)=> (
                <div className='d-flex justify-content-between mb-3'>
                    <div>
                        <input type="checkbox"  checked={task.done} className='me-2 align-text-top' onChange={() => doneTask(index)} />
                        <p className={task.done == true ? 'm-0 d-inline text-decoration-line-through text-success' : 'm-0 d-inline'}>{task.taskName}</p>
                    </div>
                    <div>
                        {/* <button id="done" className='btn btn-success me-3' onClick={() => doneTask(task)}>Done</button> */}
                        <button id="delete" className='btn btn-danger' onClick={() => deleteTask(task)}>Delete</button>
                    </div>
                </div>
            ))}
            

            </div>

              
        </div>
    );
}

export default TaskContainer;