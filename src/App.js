import { Route, Switch } from "react-router-dom";
import Home from "./page/home/Home";
import Buy from "./page/buy/Buy"
import House from "./page/house/House";
import Login from "./page/login/Login";
import Header from "./component/header/Header";
import { useState } from "react";

function App(props) {
  const [currentUser, setCurrentUser] = useState('');
  
  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/house">
          <House/>
        </Route>

        <Route path="/buy-house">
          <Buy/>
        </Route>

        <Route path="/" component={Home}>
         
        </Route>
      </Switch>
    </div>
  );
}

export default App;
