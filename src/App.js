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
import Manage from "./page/manage/Manage";
import { React, Component, createContext } from "react";
import addess from "./api/addess";
import type from "./api/type";
import Admin from "./page/admin/Admin";
import Edit from "./page/edit/Edit";
import AdminLogin from "./page/adminlogin/AdminLogin";

const priceForBuy = [
  { id: 1, value: 500000000, name: " < 500 triệu" },
  { id: 2, value: 1000000000, name: " < 1 tỷ" },
  { id: 3, value: 2000000000, name: " < 2 tỷ" },
  { id: 4, value: 5000000000, name: " < 5 tỷ" },
  { id: 5, value: 1000000000, name: " < 10 tỷ" },
];

const priceForRent = [
  { id: 1, value: 2000000, name: " < 2 triệu" },
  { id: 2, value: 5000000, name: " < 5 triệu" },
  { id: 3, value: 10000000, name: " < 10 triệu" },
  { id: 4, value: 50000000, name: " < 50 triệu" },
  { id: 5, value: 100000000, name: " < 100 triệu" },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: "",
      adminUser: '',
      isLogin: false,
      listProvince: [],
      listType1: [],
      listType2: [],
      priceForBuy: priceForBuy,
      priceForRent: priceForRent,
    };
  }

  UNSAFE_componentWillMount = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      this.setState({
        currentUser: user.currentUser,
        isLogin: user.isLogin,
      });
    }
    let admin = JSON.parse(localStorage.getItem("admin"));
    if (admin !== null) {
      this.setState({
        adminUser: admin.adminUser
      });
    } 
  };



  componentDidMount = () => {
    addess
      .GetByProvince()
      .then((response) => {
        this.setState({
          listProvince: response,
        });
      })
      .catch(console.error());

    type.GetTypeByID(1).then((response) => {
      this.setState({
        listType1: response,
      });
    });

    type.GetTypeByID(2).then((response) => {
      this.setState({
        listType2: response,
      });
    });
  };

  setUser = (data) => {
    this.setState({
      currentUser: data,
      isLogin: true,
    });
    localStorage.setItem("user", JSON.stringify(this.state));
  };

  onLogOut = () => {
    this.setState({
      currentUser: '',
      isLogin: false,
    });
    localStorage.removeItem("user");
  }

  onLogOutAdmin = () => {
    this.setState({
      adminUser: '',
    });
    localStorage.removeItem("admin");
  }

  LoginAdmin = (value) => {
    this.setState({
      adminUser: value[0].adminUser
    })
    localStorage.setItem("admin", JSON.stringify(this.state));
  }

  render() {
    return (
      <Route>
        <Switch>
          <Route exact path="/admin">
            <Admin data={this.state} adminUser={this.state.adminUser} onLogOut={this.onLogOutAdmin}/>
          </Route>

          <Route exact path="/admin/login">
            <AdminLogin isLogin={this.LoginAdmin} />
          </Route>
          
          <Route>
            <Header data={this.state} />
            <Switch>
              <Route exact path="/profile/post" exact>
                <Post data={this.state} onLogOut={this.onLogOut}/>
              </Route>

              <Route exact path="/profile/manage">
                <Manage data={this.state} onLogOut={this.onLogOut}/>
              </Route>


              <Route exact path="/profile/edit" exact>
                <Edit data={this.state} onLogOut={this.onLogOut}/>
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
                render={({ match }) => <House match={match} data={this.state} />}
              ></Route>

              <Route exact path="/rent/search">
                <Rent data={this.state} />
              </Route>

              <Route exact path="/rent">
                <Rent data={this.state} />
              </Route>

              <Route exact path="/buy/search">
                <Buy data={this.state} />
              </Route>

              <Route exact path="/buy">
                <Buy data={this.state} />
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
