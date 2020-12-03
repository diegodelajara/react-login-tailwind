import React, {  useState } from 'react';
import logo from '../logo.svg';
import Modal from './Modal'


export default function Login() {
  const [username, setUsername] = useState("hola@mundo.cl");
  const [password, setPassword] = useState("123456789");
  const [modal, setModal] = useState(false);

  const validateLogin = () => username.length > 0 && password.length > 0;

  function doLogin(event) {
    event.preventDefault();
    if (!validateLogin()) return
    setModal(!modal)
    // console.log('%c username', 'color:yellow', username)
    // console.log('%c password', 'color:yellow', password)
  }
  return (
    <div className="login-card px-3">
      <img src={logo} className="App-logo" alt="logo" />
      <form className="mt-8 space-y-6" onSubmit={doLogin}>
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label className="sr-only">Email address</label>
            <input
              id="username"
              type="text"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
              placeholder="Email address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button type="submit" className="btn-login group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign in
          </button>
        </div>
      </form>
      { 
        modal
          ? <Modal
              username={username}
              password={password}
              modalHandler={setModal}
            />
          : ''
      }
    </div>
  )
}

