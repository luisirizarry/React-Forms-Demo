import React, { useState } from "react";

const UserForm = () => {
  const initialState = {
    username: "",
    email: ""
  }

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData( fData => ({
      ...fData,
      [name]: value
    }));
      
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email } = formData;
    alert(`Created user, ${username} w/email ${email}`)
    setFormData(initialState);
  }

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        placeholder="email"
        name="username"
        id="email" 
        value={formData.email} 
        onChange={handleChange}
      />
      <br/>
      <label htmlFor="username">Username</label>
      <input 
        id="username" 
        type="text" 
        name="email"
        placeholder="username" 
        value={formData.username} 
        onChange={handleChange}
      />
      <br/>
      <button onClick={handleSubmit}>Add me to the list!</button>
      
    </form>
  )
}

export default UserForm;