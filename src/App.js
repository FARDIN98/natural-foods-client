import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Review from './Components/Review/Review';
import Orders from './Components/Orders/Orders';
export const UserContext = createContext()


function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/inventory">
              <Inventory></Inventory>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <PrivateRoute path="/review/:id">
              <Review></Review>
          </PrivateRoute>
          <PrivateRoute>
              <Orders></Orders>
          </PrivateRoute>
          <Route path="*">
              <h1>404 -Not Found!</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
