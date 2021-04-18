import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Reviews = () => {
    const [info , setInfo] = useState([])
    
const handleBlur=(e) =>{
    const newInfo = {...info}
    newInfo[e.target.name] = e.target.value ;
    setInfo(newInfo)
    console.log(newInfo)
}
const handleReviewUpload = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('description', info.description)
    formData.append('name', info.name)
    formData.append('location', info.location)
    fetch('https://vast-journey-70627.herokuapp.com/setReview', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('saved to server')
    })
    .catch(error => {
      console.error(error)
    })
  }
  console.log(info)
    return (
        <section className="row">
           <div className="col-md-2">
            <Sidebar/>
           </div>
           <div className="col-md-9 mt-5">
           <form onSubmit={handleReviewUpload}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1"  className="form-label">Location</label>
    <input type="text" className="form-control" onBlur={handleBlur} name="location"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="name" className="form-control" onBlur={handleBlur} name="name" />
  </div>
  <div className="form-group">
  <textarea name="description" onBlur={handleBlur} className="form-control" id="" cols="30" rows="10" placeholder="Your Suggestion *"></textarea>
         </div>
         <br/>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 
           </div>
        </section>
    );
};


export default Reviews;