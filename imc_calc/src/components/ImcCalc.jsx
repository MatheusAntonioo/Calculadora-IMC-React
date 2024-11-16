import Button from "./Button";
import "./ImcCalc.css"

const ImcCalc = () => {
  return (
    <div id="imcContainer">
      <h2>Calculadora de IMC</h2>
      <form id="imcForm">
        <div className="formInputs">
          <div className="formControl">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
            />
          </div>
          <div className="formControl">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 75,5"
            />
          </div>
        </div>
        <div className="actionControl">
          <Button id="calcBtn" text="Calcular" />
          <Button id="clearBtn" text="Limpar" />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
