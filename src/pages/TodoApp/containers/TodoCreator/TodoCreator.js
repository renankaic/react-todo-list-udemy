import React, { useContext, useEffect, useRef } from 'react'
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
        onSubmit: (values, formikBag) => {
            dispatchToTodos(todosActions.addTodo(values.title))
            formikBag.setFieldValue('title', '')
        }
    })

    const inputTitle = useRef(null);

    useEffect(() => {
        inputTitle.current.focus()
    }, [inputTitle])

    return(
        <form onSubmit={formik.handleSubmit}>
            <input 
                type='text' 
                placeholder='Nova tarefa'
                {...formik.getFieldProps('title')} 
                autoComplete='off'
                ref={inputTitle}
                />

            <button type='submit' >Adicionar Tarefa</button>                
        </form>
    )

}

export default TodoCreator