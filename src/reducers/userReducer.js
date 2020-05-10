import _ from 'lodash';
import {USERS_DETAIL, FETCH_USERS} from '../actions/types';

export default (state={}, action)=>{
    switch (action.type) {
        case FETCH_USERS:
            return {...state, ..._.mapKeys(action.payload,'id')};
        case USERS_DETAIL:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
} 