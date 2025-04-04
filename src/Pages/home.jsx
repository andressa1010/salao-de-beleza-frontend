import React, { useState } from "react";
import styled from "styled-components";
import Procedimento from "../components/procedimento.jsx";
import Formulario from "../components/formulario.jsx";
import {  ContainerServicos} from "../Styles/styled.js";

import Logo from "../components/logo.jsx";


const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;

  
`;

const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #FFDF33;
  font-family: "Great Vibes", cursive;
  font-weight: 800;
  font-style: normal;
`;



const procedimentos = [
  { nome: "Progressiva", imagem: "/cabelo-bt.jpg" },
  { nome: "Corte", imagem: "/corte-cc.jpg" },
  { nome: "Botox", imagem: "/botoxx-.jpg" },
  { nome: "Unhas Gel", imagem: "/unha-decoracao01.png" },
  { nome: "Unhas Acrílicas", imagem: "/unha-clara-decorada-folha-de-ouro.jpg" },
  { nome: "Cílios Volume Russo", imagem: "/cilios1.jpg" },
  {nome:"Unhas fibra de vidro", imagem:"/unha-decoracao02.png"},
  {nome:"mão e pé simples", imagem:"/maoepe.jpg"},
  {nome:"Cilios fio a fio", imagem:"/cilios2.webp"}

];

function Home() {
  const [procedimentoSelecionado, setProcedimentoSelecionado] = useState(null);

  function fecharFormulario() {
    setProcedimentoSelecionado(null);
  }


  return (
    <>

    <Logo/>
   
    <Container>
      <Titulo>Seu Momento de Beleza Começa Aqui</Titulo>
      <Titulo>Agende seu horário</Titulo>
      
      <ContainerServicos>
      {procedimentos.map((proc, index) => (
          <div key={index} onClick={() => setProcedimentoSelecionado(proc.nome)}>
            <Procedimento nome={proc.nome} imagem={proc.imagem} />
          </div>
        ))}
      </ContainerServicos>
       
      {procedimentoSelecionado && <Formulario procedimento={procedimentoSelecionado}
      fecharFormulario={fecharFormulario}  />}
      
    </Container>
    </>
  );
}

export default Home;
