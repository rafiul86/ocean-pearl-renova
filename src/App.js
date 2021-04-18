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
import SetAdmin from './components/Dashboard/Admin/SetAdmin';
import Dashboard from './components/Dashboard/Dashboard';
import Services from './components/Home/Services/Services';
import Orders from './components/Shared/Orders/Orders';
import AddServices from './components/Shared/AddServices/AddServices';
import RemoveService from './components/Dashboard/Admin/RemoveService/RemoveService';
import AllOrders from './components/Dashboard/AllOrders/AllOrders';
import PreviousOrders from './components/Dashboard/previousorders/PreviousOrders';





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
            <PrivateRoute path='/previousorders'>
            <PreviousOrders/>
            </PrivateRoute>
            <PrivateRoute path='/addservice'>
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
          <Route  path="/allorders">
          <AllOrders/>
          </Route>
          <Route path="/customerreviews">
          <CustomerReviews/>
          </Route>
          <PrivateRoute path="/dashboard">
          <Dashboard/>
          </PrivateRoute>
          <Route path="/setadmin">
          <SetAdmin/>
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
