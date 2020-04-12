import React, { useContext, useCallback, useState } from 'react'
import TodosContext from '../../../../state/todos/Context'
import TodoItem from './components/TodoItem/TodoItem'
import TodoModal from './components/TodoModal/TodoModal'
import * as TodosActions from '../../../../state/todos/actions'
import FilterContext from '../../../../state/filter/Context'
import styles from './TodoList.module.css'
import filteredList from '../../../../utils/functions.js'

function TodoList() {

    const { todos, dispatchToTodos } = useContext(TodosContext)

    const [currentId, setCurrentId] = useState(null)

    const handleModalOpen = useCallback((id) => {
        setCurrentId(id)
    }, [])

    const handleModalClose = useCallback(() => {
        setCurrentId(null)
    }, [])

    const getTile = useCallback((id) => {
        let currentTitle = ''

        todos.some(todo => {
            if (todo.id === id){
                currentTitle = todo.title
                return true                
            }
            return false
        })

        return currentTitle
    }, [todos])

    const handleTitleUpdate = useCallback((id, title) => {
        dispatchToTodos(TodosActions.toggleTodoTitle(id, title));
    }, [dispatchToTodos])
    
    const handleStatusUpdate = useCallback((id, completed) => {
        dispatchToTodos(TodosActions.toggleTodoStatus(id, completed))
    }, [dispatchToTodos])

    const handleDelete = useCallback((id) => {
        dispatchToTodos(TodosActions.removeTodo(id))
    }, [dispatchToTodos])

    const { filter } = useContext(FilterContext)    

    return(
        <main className={styles.container}>
            <ul>
                {filteredList(todos,filter).map(todo => {
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
                    onModalClose={handleModalClose} 
                    onTitleUpdate={handleTitleUpdate} 
                    findTitle={getTile}
                />
            )}
        </main>        
    )

}

export default TodoList