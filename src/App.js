import { Route, Switch } from "react-router-dom";
import Home from "./page/home/Home";
import Buy from "./page/buy/Buy";
import House from "./page/house/House";
import Login from "./page/login/Login";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { useState } from "react";
import Signup from "./page/signup/Signup";
import Rent from "./page/rent/Rent";
import Post from "./page/post/Post";

function App(props) {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <Route>
      <Switch>
        <Route exact path="/admin"></Route>

        <Route>
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path="/profile/post" exact component={Post}></Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/house">
              <House />
            </Route>

            <Route exact path="/rent">
              <Rent />
            </Route>

            <Route exact path="/buy">
              <Buy />
            </Route>

            <Route exact path="/" component={Home}></Route>
          </Switch>

          <Footer />
        </Route>
      </Switch>
    </Route>
  );
}

export default App;
