import React, { useEffect } from 'react';
import { useGetValue } from '../../hooks/useGetValue';
import { useSignInMutation } from '../../context/api/userApi';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';

const initialState = {
  UserName: '',
  password: '',
};

const Login = () => {
  const { formData, handleChange } = useGetValue(initialState);
  const [signIn, { data, error, isLoading, isSuccess, isError }] = useSignInMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && data && data.data && data.data.token) {
      localStorage.setItem('x-auth-token', data.data.token);
      navigate('/admin');
    } else if (isError && error) {
      alert(error.data.message);
    }
  }, [isSuccess, isError, data, error, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(formData);
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        autoFocus
        fullWidth
        label="Username"
        variant="outlined"
        value={formData.UserName}
        onChange={handleChange}
        name="UserName"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        variant="outlined"
        type="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
        style={{ marginTop: '20px' }}
      >
        Login
      </Button>
      {isError && (
        <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>
          {error.data.message}
        </Typography>
      )}
    </form>
  );
};

export default Login;
