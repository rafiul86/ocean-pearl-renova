import { Grid } from '@material-ui/core';
import React from 'react';
import '../Home.css'
import main from '../../../../images/mault.jpg'
const Header = () => {
    return (
        <section className="row ms-5 image-container">
            <Grid container spacong={4}>
            <Grid   item xs={12} md={6} lg={6} >
            <img className="img-fluid" src={main} alt=""/>
            </Grid>
            <Grid className="text-center mt-5"  item xs={12} md={6} lg={6} >
            <h1>Here we go</h1>
            </Grid>
            </Grid>
        </section>
    );
};

export default Header;