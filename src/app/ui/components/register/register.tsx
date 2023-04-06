import React, { useState } from "react";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [passwordError, setPasswordError] = useState('');

  function handleNomeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNome(e.target.value);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleSenhaChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSenha(e.target.value);
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // envio dos dados
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setSenha(value);

    if (value.length < 8) {
      setPasswordError('A senha deve ter pelo menos 8 caracteres');
    } else if (!/\d/.test(value)) {
      setPasswordError('A senha deve conter pelo menos um número');
    } else if (!/[!@#$%^&*]/.test(value)) {
      setPasswordError('A senha deve conter pelo menos um caractere especial');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col items-center justify-evenly border-2 border-cyan-600 py-3 px-3 w-auto h-72 rounded-md shadow-md">
        <div className="mt-2 text-white">
          <p>Dados para cadastrar-se:</p>
        </div>
        <input
          type="text"
          value={nome}
          onChange={handleNomeChange}
          placeholder="Digite seu nome"
          className="border-solid border-2 border-cyan-700 w-80 p-2 rounded-md focus:outline-none"
        />
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Digite seu e-mail"
          className="border-solid border-2 border-cyan-700 w-80 p-2 rounded-md focus:outline-none"
        />
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={handlePasswordChange}
          required
          className="border-solid border-2 border-cyan-700 w-80 p-2 rounded-md focus:outline-none focus:ring-0"
        />
        {passwordError && <p className="text-red-500 py-2">{passwordError}</p>}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none w-full"
        >
          Cadastrar
        </button>
        <div className="mt-2 text-white">
            <p>Já tem uma conta? <strong><a href="#">Entre!</a></strong></p>
          </div>
      </form>
    </div>
  );
}

export default Cadastro;