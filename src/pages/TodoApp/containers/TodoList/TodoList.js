import React, { useContext } from 'react'
import TodosContext from '../../../../state/todos/Context'
import styles from './TodoList.module.css'

function TodoList() {

    const { todos } = useContext(TodosContext)

    return(
        <main className={styles.container}>
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>{todo.title}</li>        
                    )
                })}
            </ul>
        </main>        
    )

}

export default TodoList