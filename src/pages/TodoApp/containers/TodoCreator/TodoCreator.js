import React, { useContext, useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import TodosContext from '../../../../state/todos/Context'
import * as todosActions from '../../../../state/todos/actions'
import * as yup from 'yup'

function TodoCreator() {

    const { todos, dispatchToTodos } = useContext(TodosContext)

    const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
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
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Nova tarefa'
                {...getFieldProps('title')} 
                autoComplete='off'
                ref={inputTitle}
                disabled={!isValid}
                />

                {touched.title && errors.title ? (
                    <small>{errors.title}</small>
                ) : null}

            <button type='submit' >Adicionar Tarefa</button>                
        </form>
    )

}

export default TodoCreator