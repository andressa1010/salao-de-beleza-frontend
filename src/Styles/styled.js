import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
`;

export  const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

export  const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export  const Botao = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const ContainerHeader = styled.header`
     display: flex;
     justify-content: center;
    background-color: #64183F;
    height: 300px;
img{
    width: 800px;
    
}

`

export const LogoTipo = styled.div`
    display: flex;
    justify-content: center;


`

export const ContainerServicos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 412px){
    display: flex;
    justify-content: space-between;
    img{
      width: 100px;
    }
  }

  @media (max-width:432px){
    img{
      width: 130px;
    }
  }

  @media (max-width: 394px){
    img{
      width: 100px;
    }
  }

  @media (max-width: 360px){
    img{
      width: 100px;
    }
  }

`