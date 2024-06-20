import React from 'react';
import { useGetValue } from '../../hooks/useGetValue';

const initialState =  {
    FirstName: "",
    LastName: "",
    UserName: "",
    password: "",
    phones: "",
};

const Register = () => {
    const { formData, handleChange } = useGetValue(initialState);

    const handleCreateUser = e => {
        e.preventDefault();
        // Add functionality to create a user
    };

  return (
    <form onSubmit={handleCreateUser}>
        <h2>Register</h2>
        <input value={formData.FirstName} onChange={handleChange} type="text" name='FirstName' />
        <input value={formData.LastName} onChange={handleChange} type="text" name='LastName' />
        <input value={formData.UserName} onChange={handleChange} type="text" name='UserName' />
        <input value={formData.password} onChange={handleChange} type="text" name='password' />
        <input value={formData.phones} onChange={handleChange} type="text" name='phones' />
        <button>create</button>
    </form>
  );
}

export default Register;
