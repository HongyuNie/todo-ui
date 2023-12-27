import React, { useState } from 'react'

function ListTodoComponent() {
    
    const dummyData = [
        {
            "id":1,
            "title":"Learn Core Java",
            "description":"Learn Core Java As Much As You Can",
            "completed":false
        },
        {
            "id":2,
            "title":"Learn Spring Boot",
            "description":"Learn Spring Boot As Much As You Can",
            "completed":false
        },
        {
            "id":1,
            "title":"Learn Core Java",
            "description":"Learn React As Much As You Can",
            "completed":false
        }
    ]

    const[todos, setTodos] = useState(dummyData); //todos - state variable, dummyData - initial value pass to useState Hook


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