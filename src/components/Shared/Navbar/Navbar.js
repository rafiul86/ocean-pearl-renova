import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import {  useHistory  } from "react-router-dom";
import { GlobalContext } from '../../../App'
import './Navbar.css'

const Navbar = () => {
  const token = sessionStorage.getItem('token')
  const [loggedInUser , setLoggedInUser] = useContext(GlobalContext)
      const history = useHistory()
  const handleLogout = () =>{
    const newLogger = {...loggedInUser}
    newLogger.email = ''
    sessionStorage.removeItem('token')
    setLoggedInUser(newLogger)
    history.push('/')
  }
    return (
            <nav className="navbar navbar-expand-lg nav-design navbar-light">
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link ms-auto me-5 fs-5 text-white fw-bolder" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link ms-auto me-5 text-white fs-5 fw-bolder" to='/'>blank</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link ms-auto me-5 fs-5 text-white fw-bolder" to='/reviews'>Review</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link ms-auto me-5 fs-5 text-white fw-bolder" to='/trends'>Trends</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link ms-auto me-5 fs-5 text-white fw-bolder" to='/dashboard'>Dashboard</Link>
        </li>
        <li className="nav-item">
        {
         (loggedInUser.email || token) ?  <Link className="nav-link text-white ms-auto me-5 fs-5 fw-bolder" onClick={handleLogout}>Logout</Link> : <Link to='/login' className="nav-link text-white ms-auto me-5 fs-5 fw-bolder" >Login</Link>
        }
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;