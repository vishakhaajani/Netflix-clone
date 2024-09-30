import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signuppage = () => {

  const { searchParams } = new URL(document.location);
	const emailValue = searchParams.get("email");

  const [email, setEmail] = useState(emailValue || "");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email, username, password);
    
  }

  return (
    <div className='h-screen w-full hero-bg'>

      <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <Link to={"/"}>
          <img src="netflix-logo.png" className='w-52' alt="logo" />
        </Link>
      </header>

      <div className='flex justify-center items-center mt-20 mx-3'>
        <div className='w-full max-w-md p-8  space-y-6 bg-black/60 rounded-lg shadow-md'>
            <h1 className='text-center text-white text-2xl font-bold mb-4'>Sign Up</h1>
            <form className='space-y-4' onSubmit={handleSignup}>
                <div>
                  <label htmlFor="name" className='text-grey-300 block font-medium text-sm'>Email </label>
                  <input type="email" id='email' className='w-full py-2 px-3 mt-1 border border-grey-700 rounded-md bg-transparent text-white focus:outline-none focus:ring' placeholder='you@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="username" className='text-grey-300 block font-medium text-sm'>Username </label>
                  <input type="text" id='username' className='w-full py-2 px-3 mt-1 border border-grey-700 rounded-md bg-transparent text-white focus:outline-none focus:ring' placeholder='jhondoe' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="password" className='text-grey-300 block font-medium text-sm'>Password </label>
                  <input type="password" id='password' className='w-full py-2 px-3 mt-1 border border-grey-700 rounded-md bg-transparent text-white focus:outline-none focus:ring' placeholder='*******' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button className='w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700'>
                  Sign Up
                </button>
            </form>

            <div className='text-center text-gray-400'>
              Already a member? {" "}
              <Link to={"/login"} className='text-red-500 hover:underline'>Sign In</Link>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Signuppage
