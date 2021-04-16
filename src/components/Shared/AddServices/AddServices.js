import React, { useState } from 'react';

const AddServices = () => {
    const [services , setServices] = useState([])
    const [file,setFile] = useState([])
const handleBlur=(e) =>{
    const newServices = {...services}
    newServices[e.target.name] = e.target.value ;
    setServices(newServices)
    console.log(newServices)
}
const handleChange = (e) =>{
const newFile = e.target.files[0]
setFile(newFile)
}
const handleImageUpload = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', services.name)
    formData.append('price', services.price)
    fetch('http://localhost:5000/addService', {
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
  console.log(file ,services)
    return (
        <section>
           <form onSubmit={handleImageUpload}>
  <div className="mb-3">
    <label htmlFor="exampleInputPrice"  className="form-label">Price</label>
    <input type="number" className="form-control" onBlur={handleBlur} name="price"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="name" className="form-control" onBlur={handleBlur} name="name" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputFile" className="form-label">Upload File</label>
    <input type="file" className="form-control" onChange={handleChange} name="file" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 
 </section>
    );
};


export default AddServices;