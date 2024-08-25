import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUser></ExternalUser>
    </div>
  );
}

function User(props){
  return (
    <div className='div'>
      <h3>Name:{props.name}</h3>
      <h4>Email:{props.email}</h4>
      <h4>phone number:{props.phone}</h4>
    </div>
  )
}

function ExternalUser(){
   const [users,setUsers]=useState([]);
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
   },[])
  return(
    <div>
<h1>External User:{users.length}</h1>
{
  users.map(user=><User name={user.name} email={user.email} phone={user.phone}></User>)
}
    </div>
  )
}

function Counter() {

  const [count, setCount] = useState(0)
  const IncreaseCount = () => {

    setCount(count + 1)
  }
  const DecreaseCount = () => {

    setCount(count - 1)

  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
