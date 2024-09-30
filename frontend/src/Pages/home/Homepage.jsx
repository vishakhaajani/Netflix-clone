import React from 'react'
import HomeScreen from './HomeScreen';
import AuthScreen from './authScreen';

const Homepage = () => {

  const user = false;

  return (
    <div>
      {user? <HomeScreen/> : <AuthScreen/>}
    </div>
  )
}

export default Homepage
