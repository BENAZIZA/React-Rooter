import React from 'react';
import './App.css';
import Home from './components/Home'
import Category from './components/Category'
import Products from './components/Products'
import AdminArea,{fakeAuth} from './components/AdminArea'
import { BrowserRouter,Link, Route, Switch,Redirect } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <ul>
    <li><Link to="/Home">Home</Link></li>
    <li><Link to="/Category">Category</Link></li>
    <li><Link to="/Products">Products</Link></li>
    <li><Link to="/Admin">AdminArea</Link></li>
    </ul>
    <Switch>
    <Route path="/login" component={AdminArea} />
    <Route path="/Home" component={Home} />
    <Route path="/Category" component={Category} />
    <PrivateRoute  path='/admin' component = {Admin} />
    <Route path="/Products" component={Products} />

    </Switch>
    
    </div>
    </BrowserRouter>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
    </div>
  );
};
export default App;
