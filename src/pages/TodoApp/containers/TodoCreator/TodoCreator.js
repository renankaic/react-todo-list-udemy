import React, { useContext, useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import TodosContext from '../../../../state/todos/Context'
import * as todosActions from '../../../../state/todos/actions'
import * as yup from 'yup'

function TodoCreator() {

    const { todos, dispatchToTodos } = useContext(TodosContext)

    useEffect(() => {
        console.log(todos)
    }, [todos])
    
    const formik = useFormik({
        initialValues: {
            title: ''
        },
        validationSchema: yup.object({
            title: yup.string().required('O nome da tarefa é obrigatório!')
        }),
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

                {formik.touched.title && formik.errors.title ? (
                    <small>{formik.errors.title}</small>
                ) : null}

            <button type='submit' >Adicionar Tarefa</button>                
        </form>
    )

}

export default TodoCreator