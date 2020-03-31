import React, { useContext, useCallback, useState } from 'react'
import TodosContext from '../../../../state/todos/Context'
import TodoItem from './components/TodoItem/TodoItem'
import TodoModal from './components/TodoModal/TodoModal'
import * as TodosActions from '../../../../state/todos/actions'
import styles from './TodoList.module.css'

function TodoList() {

    const { todos, dispatchToTodos } = useContext(TodosContext)

    const [showModal, setShowModal] = useState(false)

    const [currentId, setCurrentId] = useState(null)

    const handleModalOpen = useCallback((id) => {
        setCurrentId(id)
        setShowModal(true)
    }, [])

    const handleModalClose = useCallback(() => {
        setShowModal(false)
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
            {showModal && (
                <TodoModal 
                    todoId={currentId}
                    onModalClose={handleModalClose} 
                    onTitleUpdate={handleTitleUpdate} 
                />
            )}
        </main>        
    )

}

export default TodoList