import * as S from "./style";
import { useState } from "react";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [resultado, setResultado] = useState(null);

  const capturandoPrimeiroValor = (event) => {
    setPrimeiroValor(Number(event.target.value));
  };

  const capturandoSegundoValor = (event) => {
    setSegundoValor(Number(event.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtrai = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplica = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divide = () => {
    if (segundoValor === 0) {
      setResultado("Erro: divisão por zero");
    } else {
      setResultado(primeiroValor / segundoValor);
    }
  };

  return (
    <S.CalculatorContainer>
      <S.GlobalStyle />
      <S.Title>Calculadora</S.Title>
      <S.NumberInput
        type="number"
        placeholder="Insira o primeiro número"
        onChange={capturandoPrimeiroValor}
      />
      <S.NumberInput
        type="number"
        placeholder="Insira o segundo número"
        onChange={capturandoSegundoValor}
      />
      <S.OperationButton onClick={soma}>+</S.OperationButton>
      <S.OperationButton onClick={subtrai}>-</S.OperationButton>
      <S.OperationButton onClick={multiplica}>×</S.OperationButton>
      <S.OperationButton onClick={divide}>÷</S.OperationButton>
      <S.Result>
        {resultado !== null ? resultado : "Insira os valores para calcular"}
      </S.Result>
    </S.CalculatorContainer>
  );
}
