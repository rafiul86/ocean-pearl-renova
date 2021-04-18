import { Grid } from '@material-ui/core';
import React from 'react';
import '../Home.css'
import renowork from '../../../../images/renowork.jpg'
const Header = () => {
    return (
        <section className="row ms-5 image-container">
            <Grid container spacong={4}>
            <Grid   item xs={12} md={6} lg={6} >
            <img className="img-fluid" src= {renowork} alt=""/>
            </Grid>
            <Grid className="text-center mt-5"  item xs={12} md={6} lg={6} >
            <h1 style={{color : 'lawngreen'}}>Your Dream -- Our Effort <br/> bring your Dream Into Reality</h1>
            <h3>Why offer </h3>
            <ul>
                <li>Real Estate Renovation</li>
                <li>Roof Construction</li>
                <li>Interior Design</li>
                <li>Painting</li>
            </ul>
            </Grid>
            </Grid>
        </section>
    );
};

export default Header;