// 2º Passo - Criar as ações para os types

import * as todosTypes from './types'

export function addTodo(title) {
    return {
        type: todosTypes.ADD_TODO,
        payload: { title }
    }
}

export function toggleTodoStatus(id, completed) {
    return {
        type: todosTypes.TOGGLE_TODO_STATUS,
        payload: { id, completed }
    }
}

export function toggleTodoTitle(id, title){
    return {
        type: todosTypes.TOGGLE_TODO_TITLE,
        payload: { id, title }
    }
}

export function removeTodo(id){
    return {
        type: todosTypes.REMOVE_TODO,
        payload: { id }
    }
}