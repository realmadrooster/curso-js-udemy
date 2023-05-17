import React, { Component } from "react";

//form
import { FaPlus } from 'react-icons/fa';

//tarefas
import { FaEdit,FaWindowClose } from 'react-icons/fa';

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
        tarefas: [
          'Fazer café',
          'Beber água',
          'estudar',
        ],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa,tarefas} = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange} type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
              </li>
          ))}
        </ul>
      </div>

    );
  }
}
