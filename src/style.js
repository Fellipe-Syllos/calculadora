import styled, { createGlobalStyle } from "styled-components";

// Estilos globais
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

// Contêiner principal
export const CalculatorContainer = styled.main`
  background-color: #fff;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

// Título
export const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

// Input de número
export const NumberInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #4caf50;
  }
`;

// Botão
export const OperationButton = styled.button`
  padding: 10px 15px;
  margin: 5px;
  font-size: 18px;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: tomato;
  }
`;

// Resultado
export const Result = styled.h2`
  margin-top: 20px;
  color: #333;
  font-size: 20px;
`;
