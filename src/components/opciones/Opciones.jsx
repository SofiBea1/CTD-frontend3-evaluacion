function Opciones(props) {
  return (
    <div className="opciones">
      <div className="boton">
        <button id="A" className="botones" onClick={props.handleButton}>
          A
        </button>
        <h2>{props.opcionA}</h2>
      </div>
      <div className="boton">
        <button id="B" className="botones" onClick={props.handleButton}>
          B
        </button>
        <h2>{props.opcionB}</h2>
      </div>
    </div>
  );
}

export default Opciones;
