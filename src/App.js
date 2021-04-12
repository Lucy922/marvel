import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/Home'
import BagPage from './components/BagPage'
import ProductDetails from './components/ProductDetails'
import Order from './components/Order'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>
          <Route path="/bag">
            <BagPage />
          </Route>
          <Route path="/Details">
            <ProductDetails />
            <Footer />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
