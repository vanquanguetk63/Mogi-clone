import { Route, Switch } from "react-router-dom";
import Home from "./page/home/Home";
import Buy from "./page/buy/Buy"

function App() {
  return (
    <div>
      <Switch>
      
        <Route path="/buy-house">
          <Home/>
        </Route>

        <Route path="/">
          <Buy/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
