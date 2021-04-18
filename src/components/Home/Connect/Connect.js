import './Connect.css'
import React from 'react';

const Connect = () => {
    return (
        
       <section className="contact ms-auto my-5 py-5" style={{backgroundColor : 'skyblue'}}>
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h2 className="text-primary">Contact</h2>
                    <h1>Leave Us a Message</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <br/>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <br/>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <br/>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary"> Connect With Us </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};


export default Connect;