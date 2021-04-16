import './App.css';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './components/Home/Home/Home/Home';
import Login from './components/Login/Login'
import Trends from './components/Home/Trends/Trends'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OurServices from './components/Dashboard/OurServices/OurServices';
import Reviews from './components/Dashboard/Reviews/Reviews';
import CustomerReviews from './components/Home/CustomerReviews/CustomerReviews';
import Admin from './components/Dashboard/Admin/Admin';
import Dashboard from './components/Dashboard/Dashboard';
import Services from './components/Home/Services/Services';
import Orders from './components/Shared/Orders/Orders';
import AddServices from './components/Shared/AddServices/AddServices';
import RemoveService from './components/Dashboard/Admin/RemoveService/RemoveService';



 export const GlobalContext = createContext()

function App() {
  const [loggedInUser , setLoggedInUser] = useState({})
  return (
    <GlobalContext.Provider value={[loggedInUser , setLoggedInUser]}>
    <Router>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/home">
           <Home/>
          </Route>
            <Route path='/services'>
            <Services/>
            </Route>
            <PrivateRoute path='/reviews'>
            <Reviews/>
            </PrivateRoute>
            <PrivateRoute path='/addServices'>
            <AddServices/>
            </PrivateRoute>
            <PrivateRoute path='/removeservice'>
            <RemoveService/>
            </PrivateRoute>
            <PrivateRoute path="/orders/:id">
            <Orders/>
            </PrivateRoute>
          <Route path="/trends">
          <Trends/>
          </Route>
          <Route path="/customerreviews">
          <CustomerReviews/>
          </Route>
          <Route path="/dashboard">
          <Dashboard/>
          </Route>
          <Route path="/admin">
          <Admin/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
        </Switch>
    </Router>
     </GlobalContext.Provider>
  );
}

export default App;
