import React from 'react'
import { useFormik } from 'formik'
import { ReactComponent as CloseIcon } from '../../../../../../assets/icons/delete.svg'
import * as yup from 'yup'
import styles from './TodoModal.module.css'

function TodoModal({ todoId, onModalClose, onTitleUpdate, findTitle }) {

    const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
        initialValues: {
            title: findTitle(todoId)
        },
        validationSchema: yup.object({
            title: yup.string().required('O nome da tarefa é obrigatório!')
        }),
        onSubmit: (values, formikBag) => {
            onTitleUpdate(todoId, values.title)
            formikBag.setFieldValue('title', '', false)
            onModalClose()
        }
    })

    return(
        <>
        <div className={styles.backdrop} onClick={onModalClose}>        
        </div>
        <div className={styles.modal}>            
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type='text'
                    placeholder='Novo titulo'
                    {...getFieldProps('title')}
                    autoComplete='off'
                />

                {touched.title && errors.title ? (
                    <small className={styles.error}>{errors.title}</small>
                ) : null}

                <button className={styles.submit} disabled={!isValid} type='submit' >Atualizar Tarefa</button>
                <button className={styles.closeButton} onClick={onModalClose}>
                    <CloseIcon />
                </button>
            </form>                
        </div>    
        </>    
    )

}

export default TodoModal