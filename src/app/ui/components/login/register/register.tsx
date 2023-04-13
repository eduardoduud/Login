import React, { ChangeEvent, Component } from "react";
import { verifyEmail, verifyPassword } from "@/utils/utils";
import { IRegister } from "@/models/interfaces/iRegister";

interface IRegisterProps {}

class Register extends React.Component<IRegisterProps, IRegister> {
  constructor(props: IRegisterProps | Readonly<IRegisterProps>) {
    super(props);
    this.state = { nome: "", email: "", senha: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: { preventDefault: () => void }) {
    console.log("A name was submitted: " + this.state.nome);
    console.log(event);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<IRegister, keyof IRegister>);
  }

  render() {
    const { nome, email, senha } = this.state;

    return (
      <div className="flex justify-center items-center h-screen">
        <form className="flex flex-col items-center justify-evenly border-2 border-cyan-600 py-3 px-3 w-auto h-72 rounded-md shadow-md">
          <div className="mt-2 text-white">
            <p>Dados para cadastrar-se:</p>
          </div>
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={this.handleChange}
            placeholder="Digite seu nome"
            className="border-solid border-2 border-cyan-700 w-80 p-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Digite seu e-mail"
            className="border-solid border-2 border-cyan-700 w-80 p-2 rounded-md focus:outline-none"
          />
          <input
            type="password"
            name="senha"
            id="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={this.handleChange}
            required
            className="border-solid border-2 border-cyan-700 w-80 p-2 rounded-md focus:outline-none focus:ring-0"
          />
          <button
            onClick={() => console.log(email, senha, nome)}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none w-full"
          >
            Cadastrar
          </button>
          <div className="mt-2 text-white">
            <p>
              Já tem uma conta? <strong><a href="#">Entre!</a></strong>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
