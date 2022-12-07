import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/App.css";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import Provider from "helpers/hooks/useGlobalContext";

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories/:idc" component={Details} />
          <Route path="/categories/:idc/products/:id" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/success" component={Success} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
