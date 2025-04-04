import React, { useState } from "react";
import styled from "styled-components";
import api from "../services/api";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
  color: #FFDF33;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Botao = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const BotaoFechar = styled.button`
  padding: 8px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
`;



function Formulario({ procedimento,fecharFormulario}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/agendamentos", {
        nome,
        email,
        celular,
        procedimento,
        data,
        horario,
      });
  
      alert("Agendamento realizado com sucesso!");
      fecharFormulario();
    } catch (error) {
      // Se o backend retornar um erro com mensagem, exibe para o usuário
      if (error.response && error.response.data.mensagem) {
        alert(error.response.data.mensagem); // Exibe a mensagem do backend
      } else {
        alert("Erro ao agendar. Tente novamente mais tarde.");
      }
    }
  }


  return (
    <Form onSubmit={handleSubmit}>
      <h3>Agendar: {procedimento}</h3>
      <Input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Input type="tel" placeholder="Celular" value={celular} onChange={(e) => setCelular(e.target.value)} required />
      <Input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
      <Input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} required />
      <Botao type="submit">Agendar</Botao>
      <BotaoFechar type="button" onClick={fecharFormulario}>Fechar Formulário</BotaoFechar>
      
    </Form>
  );
}

export default Formulario;
