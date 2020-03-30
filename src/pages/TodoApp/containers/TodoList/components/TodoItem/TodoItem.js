import React, { useState, useCallback, useEffect } from 'react'

function TodoItem({ id, title, completed, onDelete, onStatusUpdate }) {

    const [isChecked, setIsChecked] = useState(completed);

    const handleCheckChange = useCallback((evt) => {
        setIsChecked(evt.target.checked)
    }, [setIsChecked]);

    useEffect(() => {
        onStatusUpdate(id, isChecked)
    }, [isChecked, onStatusUpdate, id])

    return (
        <li>
            <span>{title}</span>
            <input type="checkbox" value={isChecked} onChange={handleCheckChange}/>
            <button onClick={onDelete}>Deletar</button>
        </li> 
    )

}

export default TodoItem