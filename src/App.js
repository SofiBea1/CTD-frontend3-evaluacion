import React from "react";
import "./index.css";
import Opciones from "./components/opciones/Opciones";
import Recordatorio from "./components/recordatorio/Recordatorio";
import data from "./components/data.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      historial: [],
      seleccionPrevia: ""
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.contador !== this.state.contador) {
      this.state.historial.push(this.state.seleccionPrevia);
    }
  }

  handleButton = (i) => {
    const id = i.target.id;
    const historiaId = data[this.state.contador].id;

    if (historiaId === "2a" || historiaId === "3a" || historiaId === "4a") {
      const avance = id === "A" ? 2 : 3;
      this.setState({
        contador: this.state.contador + avance,
        seleccionPrevia: id
      });
    } else if (
      historiaId === "1" ||
      historiaId === "2b" ||
      historiaId === "3b" ||
      historiaId === "4b"
    ) {
      const avance = id === "A" ? 1 : 2;
      this.setState({
        contador: this.state.contador + avance,
        seleccionPrevia: id
      });
    } else {
      alert("Fin!!");
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Opciones
          handleButton={this.handleButton}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Recordatorio
          seleccionPrevia={this.state.seleccionPrevia}
          historial={this.state.historial}
        />
      </div>
    );
  }
}
