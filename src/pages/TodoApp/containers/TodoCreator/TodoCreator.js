import React, { useContext, useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import TodosContext from '../../../../state/todos/Context'
import * as todosActions from '../../../../state/todos/actions'
import * as yup from 'yup'
import styles from './TodoCreator.module.css'

function TodoCreator() {

    const { dispatchToTodos } = useContext(TodosContext)

    const { getFieldProps, errors, handleSubmit } = useFormik({
        initialValues: {
            title: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: yup.object({
            title: yup.string().required('O nome da tarefa é obrigatório!')
        }),
        onSubmit: (values, formikBag) => {
            dispatchToTodos(todosActions.addTodo(values.title))
            formikBag.setFieldValue('title', '', false)
        }
    })

    const inputTitle = useRef(null);

    useEffect(() => {
        inputTitle.current.focus()
    }, [inputTitle])

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <input 
                className={styles.input}
                type='text' 
                placeholder='Nova tarefa'
                {...getFieldProps('title')} 
                autoComplete='off'
                ref={inputTitle}
                />

                {errors.title ? (
                    <small className={styles.error}>{errors.title}</small>
                ) : null}

            <button 
                className={styles.submit}
                type='submit' 
                >
                    Adicionar Tarefa
            </button>                
        </form>
    )

}

export default TodoCreator