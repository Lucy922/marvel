import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/Home'
import BagPage from './components/BagPage'
import ProductDetails from './components/ProductDetails'
import Order from './components/Order'
import Account from './components/Account'
import Address from './components/Address'
import Modal from './components/Modal'
import OrderSuccess from './components/OrderSuccess'
import VerifyModal from './components/VerifyModal'
import TrackOrder from './components/TrackOrder'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/address">
            <Address />
          </Route>
          <Route path="/modal">
            <Address />
            <Modal />
          </Route>
          <Route path="/verify">
            <VerifyModal />
          </Route>
          <Route path="/success">
            <OrderSuccess />
          </Route>
          <Route path="/trackorder">
            <TrackOrder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
