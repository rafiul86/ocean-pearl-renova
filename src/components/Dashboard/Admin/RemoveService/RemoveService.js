import React, { useEffect, useState } from 'react';
import Service from '../../../Home/Services/Service/Service';
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
        <div>
            {
                serviceList.map(service =><ServiceData handleDelete={handleDelete} service={service}></ServiceData>)
            }
        </div>
    );
};

export default RemoveService;