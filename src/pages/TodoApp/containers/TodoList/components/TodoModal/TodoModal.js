import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

function TodoModal({ todoId, onModalClose, onTitleUpdate }) {

    const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
        initialValues: {
            title: ''
        },
        validationSchema: yup.object({
            title: yup.string().required('O nome da tarefa é obrigatório!')
        }),
        onSubmit: (values, formikBag) => {
            onTitleUpdate(todoId, values.title)
            formikBag.setFieldValue('title', '', false)
        }
    })

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Novo nome'
                    {...getFieldProps('title')}
                    autoComplete='off'
                />

                {touched.title && errors.title ? (
                    <small >{errors.title}</small>
                ) : null}

                <button disabled={!isValid} type='submit' >Atualizar Tarefa</button>
            </form>
            <button onClick={onModalClose}>Fechar</button>
        </div>
    )

}

export default TodoModal