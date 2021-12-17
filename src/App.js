import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductListing}></Route>
          <Route path='/product/:productId' exact component={ProductDetails}></Route>
          <Route>404 NOT FOUND</Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
