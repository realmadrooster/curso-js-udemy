import React, { Component } from "react";
import Form from './Form';
import Tarefas from "./Tarefas";

import './Main.css';

export default class Main extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     novaTarefa: '',
  //   };

  //   this.inputMudou = this.inputMudou.bind(this);//dentro desse metodo o this é essa propria classe

  // }
  state = {
        novaTarefa: '',//class fields
        tarefas: [],
        index: -1,//estado =  -1 significa que nao estou editando nada
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
    //é executado uma vez assim que o componente for montado
  }
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));//salva as tarefas no localstorage
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if(tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [ ...tarefas];

    if(index === -1) {
      this.setState({
        tarefas: [ ...novasTarefas, novaTarefa],
        novaTarefa: '',
    });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,//seta indicando que ja foi editado
      })
    }

  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  }

  render() {
    const { novaTarefa, tarefas} = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>

    );
  }
}
