import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./page/home/Home";
import Buy from "./page/buy/Buy";
import House from "./page/house/House";
import Login from "./page/login/Login";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Signup from "./page/signup/Signup";
import Rent from "./page/rent/Rent";
import Post from "./page/post/Post";
import { React, Component, createContext } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: "",
      isLogin: false,
    };
  }

  componentDidMount = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      this.setState({
        currentUser: user.currentUser,
        isLogin: user.isLogin,
      });
    }
  };

  setUser = (data) => {
    this.setState({
      currentUser: data,
      isLogin: true,
    });
    localStorage.setItem("user", JSON.stringify(this.state));
  };

  render() {
    return (
      <Route>
        <Switch>
          <Route exact path="/admin"></Route>
          <Route>
            <Header data={this.state} />
            <Switch>
              <Route exact path="/profile/post" exact>
                <Post data={this.state} />
              </Route>

              <Route exact path="/signup">
                <Signup />
              </Route>

              <Route exact path="/login">
                <Login data={this.state} islogin={this.setUser} />
              </Route>

              <Route
                exact
                path="/house/:id"
                render={({ match }) => (
                  <House  match={match} />
                )}
              >
             
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
}

export default App;
