import React, { useEffect } from "react";
import { useGetValue } from "../../hooks/useGetValue";
import { useSignInMutation } from "../../context/api/userApi";

const initialState = { 
  UserName: "", 
  password: "", 
};

const Login = () => { 
  const { formData, handleChange } = useGetValue(initialState); 
  const [signIn, { data, error, isLoading, isSuccess, isError }] = useSignInMutation();

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("x-auth-token", data.data.token);
    }
    if(isError){
      alert(error.data.message);
    }
  }, [isSuccess, isError]);

  const handleLogin = (e) => { 
    e.preventDefault(); 
    signIn(formData); 
  };

  return ( 
    <form onSubmit={handleLogin}> 
      <h2>Login</h2> 
      <input 
        autoFocus 
        value={formData.UserName} 
        onChange={handleChange} 
        type="text" 
        name="UserName" 
      /> 
      <input 
        value={formData.password} 
        onChange={handleChange} 
        type="password" 
        name="password" 
      /> 
      <button disabled={isLoading}>Login</button> 
    </form> 
  ); 
}; 

export default Login;
