import React, { useContext, useCallback, useState } from 'react'
import TodosContext from '../../../../state/todos/Context'
import TodoItem from './components/TodoItem/TodoItem'
import TodoModal from './components/TodoModal/TodoModal'
import * as TodosActions from '../../../../state/todos/actions'
import styles from './TodoList.module.css'

function TodoList() {

    const { todos, dispatchToTodos } = useContext(TodosContext)

    const [currentId, setCurrentId] = useState(null)

    const [currentTitle, setCurrentTitle] = useState('')

    const handleModalOpen = useCallback((id, title) => {
        setCurrentId(id)
        setCurrentTitle(title)
    }, [])

    const handleModalClose = useCallback(() => {
        setCurrentId(null)
        setCurrentTitle('')
    }, [])

    const handleTitleUpdate = useCallback((id, title) => {
        dispatchToTodos(TodosActions.toggleTodoTitle(id, title));
    }, [dispatchToTodos])
    
    const handleStatusUpdate = useCallback((id, completed) => {
        dispatchToTodos(TodosActions.toggleTodoStatus(id, completed))
    }, [dispatchToTodos])

    const handleDelete = useCallback((id) => {
        dispatchToTodos(TodosActions.removeTodo(id))
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
                            onDelete={handleDelete}
                            onModalOpen={handleModalOpen}
                        /> 
                    )
                })}
            </ul>
            {currentId && (
                <TodoModal 
                    todoId={currentId}
                    title={currentTitle}
                    onModalClose={handleModalClose} 
                    onTitleUpdate={handleTitleUpdate} 
                />
            )}
        </main>        
    )

}

export default TodoList