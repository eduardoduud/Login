import React, { useState } from 'react';
import Image from "../../../../assets/background.jpg";

interface LoginProps {}

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center justify-evenly border-2 border-cyan-600 py-3 px-3 w-80 h-72 rounded-md shadow-md">
          <input 
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            className="border-solid border-2 border-cyan-700 w-full p-2 rounded-md focus:outline-none"
          />
          <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            className="border-solid border-2 border-cyan-700 w-full p-2 rounded-md focus:outline-none"
          />
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
            Logar
          </button>
        </div>
      </div>
      
    );
};

export default Login;