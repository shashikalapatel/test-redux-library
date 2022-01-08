import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser, resetAuth, signupUser, forgotPassword } from './redux/actions';

function AppTest() {
  const dispatch = useDispatch();

  function loginApi() {
    dispatch(loginUser("test", "test"));
  }

  function logoutApi() {
    dispatch(logoutUser());
  }

  function signupUserApi() {
    dispatch(signupUser("test", "test@gmail.com", "test"));
  }

  function resetAuthApi() {
    dispatch(resetAuth());
  }

  function forgotPasswordApi() {
    dispatch(forgotPassword("test"));
  }

  return (
    <>
      <div>Redux library Testing</div>
      <button onClick={loginApi}>login</button>
      <button onClick={logoutApi}>logout</button>      
      <button onClick={signupUserApi}>signup user</button>

      <button onClick={resetAuthApi}>reset auth</button>
      <button onClick={forgotPasswordApi}>forgot password</button>
    </>
  );
}

export default AppTest;