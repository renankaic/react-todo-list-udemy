import React, { useState, useCallback, useEffect } from 'react'
import { ReactComponent as UpdateTitleIcon } from '../../../../../../assets/icons/update-title.svg'
import { ReactComponent as DeleteTodoIcon } from '../../../../../../assets/icons/delete-todo.svg'
import styles from './TodoItem.module.css'

function TodoItem({ id, title, completed, onDelete, onStatusUpdate, onModalOpen }) {

    const [isChecked, setIsChecked] = useState(completed);

    const handleCheckChange = useCallback((evt) => {
        setIsChecked(evt.target.checked)
    }, [setIsChecked]);

    const handleDelete = useCallback((evt) => {
        onDelete(id)
    }, [onDelete, id])

    const handleModalOpen = useCallback(() => {
        onModalOpen(id)
    }, [onModalOpen,id])

    useEffect(() => {
        onStatusUpdate(id, isChecked)
    }, [isChecked, onStatusUpdate, id])

    return (
        <li className={styles.item} >
            <span className={completed ? styles.completed : null}>{title}</span>
            <div className={styles.controlButtons}>
                <button onClick={handleModalOpen}>
                    <UpdateTitleIcon />
                </button>
                <input type="checkbox" value={isChecked} onChange={handleCheckChange}/>
                <button onClick={handleDelete}>
                    <DeleteTodoIcon />
                </button>
            </div>
        </li> 
    )

}

export default TodoItem