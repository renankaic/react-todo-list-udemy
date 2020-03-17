import * as filterTypes from './types';

// 3º passo - Reducer
function reducer(state, action) {

    switch(action.type) {

        case filterTypes.TOGGLE_FILTER:
            return action.payload.filter
        
        default:
            throw new Error("Invalid filter type")

    }

}