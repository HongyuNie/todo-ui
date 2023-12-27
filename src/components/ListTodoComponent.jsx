import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../services/TodoService';
import { useNavigate } from 'react-router-dom';

function ListTodoComponent() {

    const[todos, setTodos] = useState([]); // now todos state variable initial value is []

    const navigate = useNavigate();
    
    useEffect(()=>{
        listTodos();
    },[]);

    function listTodos() {
        getAllTodos().then((response)=>{
            setTodos(response.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    function addNewTodo() {
        navigate('/add-todo')
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Todos</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button>
        <div>
            <table className='table table-bordered table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Todo Title</th>
                        <th>Todo Description</th>
                        <th>Todo Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? "Yes" : "No"}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListTodoComponent