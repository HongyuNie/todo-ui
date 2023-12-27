import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../services/TodoService';

function ListTodoComponent() {

    const[todos, setTodos] = useState([]); // now todos state variable initial value is []
    
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

  return (
    <div className='container'>
        <h2 className='text-center'>List of Todos</h2>
        <div>
            <table className='table table-dark table-bordered table-striped table-hover'>
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