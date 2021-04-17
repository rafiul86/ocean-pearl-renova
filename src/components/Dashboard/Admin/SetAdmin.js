import React, { useState } from 'react';

const SetAdmin = () => {
    const [info , setInfo] = useState([])
    const [file,setFile] = useState([])
const handleBlur=(e) =>{
    const newInfo = {...info}
    newInfo[e.target.name] = e.target.value ;
    setInfo(newInfo)
    console.log(newInfo)
}
const handleChange = (e) =>{
const newFile = e.target.files[0]
setFile(newFile)
}
const handleImageUpload = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', info.name)
    formData.append('email', info.email)
    fetch('https://vast-journey-70627.herokuapp.com/setAdmin', {
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
  console.log(file ,info)
    return (
        <section>
           <form onSubmit={handleImageUpload}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1"  className="form-label">Email address</label>
    <input type="email" className="form-control" onBlur={handleBlur} name="email"/>
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

export default SetAdmin;