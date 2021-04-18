import React, { useContext } from 'react';
import './Footer.css'
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterColumn from './FooterColumn/FooterColumn';
import { useHistory } from 'react-router';
import { GlobalContext } from '../../../App';

const Footer = () => {
    const [loggedInUser , setLoggedInUser] = useContext(GlobalContext)
    const history = useHistory()
    const noNamed = [
        {name: "Emergency Repairing" , link: "/emergency"},
        {name: "Build Up" , link: "/buildup"},
        {name: "Repairing of Personal Buildings" , link: "/personal"},
        {name: "Scaffolding" , link: "/contactual"},
        {name: "Large Storey Repair" , link: "/meetup"},
    ]
    const ourAddress = [
        {name: "pandan -gardens - west coast Singapore" , link: "//google.com/map"},
        {name: "Courts" , link: "//google.com/map"},
       
    ]
    const Renovation = [
        {name: "High Rise Repair" , link: "/emergency"},
        {name: "Repair" , link: "/manual"},
        {name: "Painting" , link: "/manual"},
        {name: "Metal Works" , link: "/manual"},
        {name: "Wooden Repair" , link: "/manual"},
        {name: "Painting-inside" , link: "/manual"},
        {name: "Roof Works" , link: "/manual"}
    ]
    const services = [
        {name: "Company Service" , link: "/emergency"},
        {name: "Renovation" , link: "/manual"},
        {name: "Personal Contract" , link: "/Renovation"},
        {name: "Demolition works" , link: "/tooth-extract"},
        {name: "Renovation" , link: "/manual"},
        {name: "Renovation" , link: "/manual"},
        {name: "Renovation" , link: "/manual"}
    ]
    const  user = firebase.auth().currentUser;
        const handleRemoveUser = () =>{
           if(user){
            user.delete().then(function() {
                    loggedInUser.email ="";
                    sessionStorage.removeItem('token')
                alert('User removed successfully')
                history.push('/')
              }).catch(function(error) {
                // An error happened.
              });
           }

        }

    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterColumn key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterColumn key={2} menuTitle="Services" menuItems={services}/>
                    <FooterColumn key={3} menuTitle="Renovation" menuItems={Renovation}/>
                    <FooterColumn key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+65-8741-1290</button>
                            <p style={{cursor : 'pointer'}} onClick={handleRemoveUser}>Delete User Account</p>
                        </div>
                    </FooterColumn>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;