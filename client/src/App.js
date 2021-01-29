// Originally based on public domain code by Josh Streger https://github.com/jdstregz/secure-starter
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Home from "./Home";
//import Profile from "./Profile";
//import Loading from "./Loading";

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios.get('/auth/current-session').then(({data}) => {
      setAuth(data);
    })
  }, [])

  return <Home auth={auth}/>
}

export default App;
