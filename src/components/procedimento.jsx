import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #7D2034;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 432px){
     width: 160px;
  }

  @media (max-width: 360px){
    width: 130px;
  }

  @media (max-width: 394px){
     width: 130px;
  }
`;

const Imagem = styled.img`
  width: 200px;
  border-radius: 5px;
`;

const Nome = styled.p`
  font-weight: bold;
  margin-top: 10px;
  color: #ffff;
`;

function Procedimento({ nome, imagem }) {
  return (
    <Card>
      <Imagem src={imagem} alt={nome} />
      <Nome>{nome}</Nome>
    </Card>
  );
}

export default Procedimento;
