/**
 * Created by carhe on 4/28/2018.
 */
import {CHANGE_AUTH} from '../actions/types';

export default function(state=null, action){
    switch (action.type){
        case CHANGE_AUTH:
            return action.payload;
    }

    return state;
}