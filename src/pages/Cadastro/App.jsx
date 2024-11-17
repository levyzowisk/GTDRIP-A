import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Input from "../../components/Input/App";
import Busca from "../../components/Busca";

export default function Cadastro() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para criar a conta
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <>
      <div className="top-cadastro">
        <Busca />
      </div>
      <div className="margin-cadastro">
        <form className="formCampo" onSubmit={handleSubmit}>
          <div className="formaCadastro">
            <h1>Criar Conta</h1>
            <p>Informações Pessoais</p>

            <hr />
            <Input
              htmlFor="nome"
              text="Nome completo *"
              id="nome"
              type="text"
              placeholder="Insira seu nome"
            />
            <Input
              htmlFor="email"
              text="E-mail *"
              id="email"
              type="text"
              placeholder="Insira seu e-mail"
            />
            <Input
              htmlFor="cpf"
              text="CPF *"
              id="cpf"
              type="text"
              placeholder="Insira seu CPF"
            />
            <Input
              htmlFor="celular"
              text="Celular *"
              id="celular"
              type="text"
              placeholder="Insira seu celular"
            />

            <p>Infomações de Entrega</p>
            <hr />

            <Input
              htmlFor="endereço"
              text="Endereço *"
              id="endereço"
              type="text"
              placeholder="Insira seu endereço"
            />
            <Input
              htmlFor="bairro"
              text="Bairro *"
              id="bairro"
              type="text"
              placeholder="Insira seu bairro"
            />
            <Input
              htmlFor="cidade"
              text="Cidade *"
              id="cidade"
              type="text"
              placeholder="Insira sua cidade"
            />
            <Input
              htmlFor="Cep"
              text="CEP *"
              id="Cep"
              type="text"
              placeholder="Insira seu CEP"
            />
            <Input
              htmlFor="complemento"
              text="Complemento *"
              id="complemento"
              type="text"
              placeholder="Insira seu complemento"
            />
            <div className="checboxForm">
              <input type="checkbox" />
              <h5>
                Quero receber por email ofertas e novidades das lojas da Digital
                Store. A frequência de envios pode
                <br />
                Variar de acordo com a intereção do cliente.
              </h5>
            </div>
            <div className="buttonForm">
              <button type="submit">Criar Conta</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}