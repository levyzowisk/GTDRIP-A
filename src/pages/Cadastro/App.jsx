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
        
        <Input
            htmlFor ="nome"
            text ="Nome completo *"
            id = "nome"
            type="text"
            placeholder ="Insira seu Nome"
        />
        <Input
            htmlFor ="email"
            text ="E-mail *"
            id = "email"
            type="text"
            placeholder ="Insira seu E-MAIL"
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
            placeholder ="Insira seu Celular"
        />
        <Input
            htmlFor ="endereço"
            text ="Endereço *"
            id = "endereço"
            type="text"
            placeholder ="Insira seu Endereço"
        />
        <Input
            htmlFor ="bairro"
            text ="Bairro *"
            id = "bairro"
            type="text"
            placeholder ="Insira seu Bairro"
        />
         <Input
            htmlFor ="cidade"
            text ="Cidade *"
            id = "cidade"
            type="text"
            placeholder ="Insira sua Cidade"
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
            placeholder ="Insira sua CEP"
        />
         
        

☻
      </Layout>
    </>
  );
}
