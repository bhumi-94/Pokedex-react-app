//action constants..

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//action creators..


export function increment(){
    return {
        type :  INCREMENT,
    };
}   


export function thunkMiddleware(){
 return async function(dispatch){
    try {
        dispatch({type : "loading"});

        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();

        dispatch({type : "todos", payload: data.results});

    }catch(error){
        console.log(error);
    
    }
    finally{
        dispatch({type :"loading"});
    }

 }   
}