import React, { useContext, useCallback, useEffect } from 'react'
import TodosContext from '../../../../state/todos/Context'
import TodoItem from './components/TodoItem/TodoItem'
import * as TodosActions from '../../../../state/todos/actions'
import styles from './TodoList.module.css'

function TodoList() {

    const { todos, dispatchToTodos } = useContext(TodosContext)

    useEffect(() => {
        console.log(todos)
    }, [todos])

    const handleDelete = useCallback((id) => {
        dispatchToTodos(TodosActions.removeTodo(id))
    }, [dispatchToTodos])

    const handleStatusUpdate = useCallback((id, completed) => {
        dispatchToTodos(TodosActions.toggleTodoStatus(id, completed))
    }, [dispatchToTodos])

    return(
        <main className={styles.container}>
            <ul>
                {todos.map(todo => {
                    return (
                        <TodoItem 
                            key={todo.id} 
                            id={todo.id}
                            title={todo.title} 
                            completed={todo.completed}
                            onStatusUpdate={handleStatusUpdate}
                            onDelete={() => { handleDelete(todo.id) }}
                            /> 
                    )
                })}
            </ul>
        </main>        
    )

}

export default TodoList