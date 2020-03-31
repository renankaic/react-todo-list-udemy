import React, { useState, useCallback, useEffect } from 'react'

function TodoItem({ id, title, completed, onDelete, onStatusUpdate, onModalOpen }) {

    const [isChecked, setIsChecked] = useState(completed);

    const handleCheckChange = useCallback((evt) => {
        setIsChecked(evt.target.checked)
    }, [setIsChecked]);

    const handleDelete = useCallback((evt) => {
        onDelete(id)
    }, [onDelete, id])

    const handleTitleUpdate = useCallback(() => {
        onModalOpen(id)
    }, [onModalOpen,id])

    useEffect(() => {
        onStatusUpdate(id, isChecked)
    }, [isChecked, onStatusUpdate, id])

    return (
        <li>
            <span>{title}</span>
            <button onClick={handleTitleUpdate}>Editar</button>
            <input type="checkbox" value={isChecked} onChange={handleCheckChange}/>
            <button onClick={handleDelete}>Deletar</button>
        </li> 
    )

}

export default TodoItem