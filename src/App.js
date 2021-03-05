import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import Notfound from "./Components/Notforund/Notfound";
import Productdetail from "./Components/Productdetail/Productdetail";

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>

            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productkey">
              <Productdetail></Productdetail>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
