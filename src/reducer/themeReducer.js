const initialState = {
    theme : "Dark",
}

export function themeReducer( state = initialState, action){
    switch(action.type){
        case "Change Theme":
            return {
                ...state ,
                theme: state.theme ==="Dark" ? "Light" : "Dark",
            };
        default :
        return state;
    }
}