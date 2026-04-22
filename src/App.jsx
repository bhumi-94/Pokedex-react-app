
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


import { useDispatch, useSelector } from 'react-redux';
import { increment, thunkMiddleware } from './action/action';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
   const [todoss, setTodos] = useState([]);
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.CounterReducer.todos);
  const counter = useSelector((state) => state.CounterReducer.counter);
  const theme = useSelector((state) => state.themeReducer.theme);
  const [search, setSearch] = useState("");

  // const [search, setSearch] = useState("");
  // const filtereditems = todos.filter((item)=>{item.name.toLowerCase().includes(search.name.toLowerCase())})
  const handleIncrement =()=> {
    dispatch(increment());
    
  }
  const handleDecrement =()=> {
    dispatch({type: "DECREMENT"});
    
  }
  const handletheme =()=> {
    dispatch({type: "Change Theme"});
    
  }
  const handleAPI =() =>{
    dispatch(thunkMiddleware());
  }
  useEffect(()=>{
    handleAPI();
  },[]);
  
  const getIdFromUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2]; // gets ID
};
 
    const filteredData = Array.isArray(todos)
  ? search === ""
    ? todos
    : todos.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
  : [];
  
  return (
    <>
    <form> 
        <input placeholder='Enter Your Search' className='search'
        value={search}
  onChange={(e) => setSearch(e.target.value)}
        />
    </form>
      
      
     <div className='cards'>
    {todos && filteredData .map((item )=>{
      const id = getIdFromUrl(item.url);
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        return <Card  key={item.name} sx={{ maxWidth: 345 }}>
    
        <CardMedia
          component="img"
          height="190"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      })}
      </div> 
    </>
  )
}

export default App