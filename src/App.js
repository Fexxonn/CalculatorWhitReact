import "./App.css";
import Boton from "./components/Boton.jsx";
import Pantalla from "./components/Pantalla.jsx";
import BotonClear from "./components/BotonClear.jsx";
import { useState } from "react";
import { evaluate, log } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    const lastChar = input.at(-1);
    const isOperator = /[+\-*/.]/.test(val);

    if (isOperator && lastChar && /[+\-*/.]/.test(lastChar)) {
      console.log("ya hay un signo colocado");
    } else if (input === "" && isOperator) {
      console.log("ya hay numeros puestos");
    } else {
      setInput(`${input}${val}`);
    }
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      console.log("No hay valores");
    }
  };

  return (
    <div className="App">
      <div className="container-logo">
        <h1>CalculatorWithReact</h1>
        <h2>ByFexxonn</h2>
      </div>
      <div className="container-calculator">
        <Pantalla input={input} />
        <div className="container-botones">
          <Boton manejarClic={addInput}>7</Boton>
          <Boton manejarClic={addInput}>8</Boton>
          <Boton manejarClic={addInput}>9</Boton>
          <Boton manejarClic={addInput}>*</Boton>
          {/* ############# */}

          <Boton manejarClic={addInput}>4</Boton>
          <Boton manejarClic={addInput}>5</Boton>
          <Boton manejarClic={addInput}>6</Boton>
          <Boton manejarClic={addInput}>-</Boton>
          {/* ############# */}

          <Boton manejarClic={addInput}>1</Boton>
          <Boton manejarClic={addInput}>2</Boton>
          <Boton manejarClic={addInput}>3</Boton>
          <Boton manejarClic={addInput}>+</Boton>
          {/* ############# */}

          <BotonClear resetInput={() => setInput("")}>C</BotonClear>
          <Boton manejarClic={addInput}>0</Boton>
          <Boton manejarClic={addInput}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>

          
          {/* ############# */}
          
        </div>

      </div>
    </div>
  );
}

export default App;
