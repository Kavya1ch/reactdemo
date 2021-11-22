
import './App.css';
import Home from './components/home';
import Nav from "./components/nav";
import Login from './components/login';
import Posts from "./components/posts"
import Register from "./components/register";
import PageNotFound from './components/pagenotfound';
import Furniture from './components/furniture';
import FurnitureForm from './components/furnitureform';


import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <Nav />
       <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/furnitureform" component={FurnitureForm}/>
        <Route exact path="/" component={Home} />
        <Route path="/furniture" component={Furniture} />
        
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
        
       </Switch>
    </div>
  );
}

export default App;