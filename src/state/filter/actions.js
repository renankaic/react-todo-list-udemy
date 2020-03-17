import * as filterTypes from './types'

// 2º passo
export function toggleFilter(filter) {

    return {
        type: filterTypes.TOGGLE_FILTER,
        payload: {
            filter
        }
    }

}