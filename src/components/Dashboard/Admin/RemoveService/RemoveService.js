import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Service from '../../../Home/Services/Service/Service';
import Sidebar from '../../Sidebar/Sidebar';
import ServiceData from './ServiceData/ServiceData';

const RemoveService = () => {
    const [serviceList  , setServiceList ] = useState([])
    useEffect(()=>{
        fetch('https://vast-journey-70627.herokuapp.com/showService')
        .then(res =>res.json())
        .then(data => setServiceList(data))
    })
    const handleDelete  = (id)=>{
        fetch('https://vast-journey-70627.herokuapp.com/removeService/'+id ,{
            method : "DELETE"
        })
        .then(res => res.json())
        .then(res => {
            console.log("one service deleted from UI")
        })
    }
    return (

        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-9">
        
                <Grid container spacing={6}>{
                    serviceList.map(service =><Grid item xs={10} md={6} lg={4}><ServiceData handleDelete={handleDelete} service={service}></ServiceData></Grid>)
                }</Grid> 
 
            </div>
        </div>
    );
};

export default RemoveService;