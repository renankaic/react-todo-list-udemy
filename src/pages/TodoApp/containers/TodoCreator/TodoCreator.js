import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik'
import TodosContext from '../../../../state/todos/Context'
import * as todosActions from '../../../../state/todos/actions'

function TodoCreator() {

    const { todos, dispatchToTodos } = useContext(TodosContext)

    useEffect(() => {
        console.log(todos)
    }, [todos])

    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (values) => {
            dispatchToTodos(todosActions.addTodo(values.title))
        }
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <input 
                type='text' 
                placeholder='Nova tarefa'
                {...formik.getFieldProps('title')} 
                autoComplete='off'
                />

            <button type='submit' >Adicionar Tarefa</button>                
        </form>
    )

}

export default TodoCreator