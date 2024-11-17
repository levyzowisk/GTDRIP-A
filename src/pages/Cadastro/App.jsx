import ProductListing from "../../components/ProductListing/App";
import Gallery from "../../components/Gallery/app";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";
import "./style.css";
import Input from "../../components/Input/App";


export default function Cadastro() {
  return (
    <>
      <Layout>
        <form className="formCampo">
          
      <div className="formaCadastro"><h1>Criar Conta</h1>
          <p>Informações Pessoais</p>
 
    <hr />
        <Input
            htmlFor ="nome"
            text ="Nome completo *"
            id = "nome"
            type="text"
            placeholder ="Insira seu nome"
        />
        <Input
            htmlFor ="email"
            text ="E-mail *"
            id = "email"
            type="text"
            placeholder ="Insira seu e-mail"
        />
        <Input
            htmlFor ="cpf"
            text ="CPF *"
            id = "cpf"
            type="text"
            placeholder ="Insira seu CPF"
        />
          <Input
            htmlFor ="celular"
            text ="Celular *"
            id = "celular"
            type="text"
            placeholder ="Insira seu celular"
        />


     <p>Infomações de Entrega</p>
    <hr />

        <Input
            htmlFor ="endereço"
            text ="Endereço *"
            id = "endereço"
            type="text"
            placeholder ="Insira seu endereço"
        />
        <Input
            htmlFor ="bairro"
            text ="Bairro *"
            id = "bairro"
            type="text"
            placeholder ="Insira seu bairro"
        />
         <Input
            htmlFor ="cidade"
            text ="Cidade *"
            id = "cidade"
            type="text"
            placeholder ="Insira sua cidade"
        />
         <Input
            htmlFor ="Cep"
            text ="CEP *"
            id = "Cep"
            type="text"
            placeholder ="Insira sua CEP"
        />
        <Input
            htmlFor ="complemento"
            text ="Complemento *"
            id = "complemento"
            type="text"
            placeholder ="Insira sua complemento"
        />
         <div className="checboxForm">
           <input type="checkbox" />
           <h5>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode
            <br />
            Variar de acordo com a intereção do cliente.
           </h5>
         </div>
          <div className="buttonForm">
            <button>Criar Conta</button>
          </div>
      </div>

      </form>
      </Layout>
    </>
  );
}
