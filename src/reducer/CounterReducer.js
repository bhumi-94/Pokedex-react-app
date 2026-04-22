import { INCREMENT } from "../action/action";

const initialState = {
    counter:0 ,
    loading: false,
    todos:[],
}

export function CounterReducer( state = initialState, action){
    switch(action.type){
        case  INCREMENT:
            return {
                ...state ,
                counter: state.counter+1,
            };
        case "DECREMENT":
            return {
                ...state ,
                counter: state.counter-1,
            };
        case "loading":
            return {
                ...state ,
               loading: !state.loading,
            };
        case "todos":
            return {
                ...state ,
               todos: action.payload,
            };
        default :
        return state;
    }
}