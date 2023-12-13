/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

// Components
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Lucas",
      todoItems: [
        {
          id: uuidv4(),
          title: "Buy eggs",
          description: "At Lidl",
          isCompleted: false,
        },
        {
          id: uuidv4(),
          title: "Finish assignment",
          description: "React Class Component Topic",
          isCompleted: false,
        },
        {
          id: uuidv4(),
          title: "Make dinner",
          description: "Don't forget the potatoes!",
          isCompleted: false,
        },
      ],
      newTodo: {
        title: "",
        description: "",
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newTodo: {
        ...prevState.newTodo,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.newTodo.title || !this.state.newTodo.description) {
      return;
    }

    //add new todo to state
    this.setState((prevState) => ({
      todoItems: [
        ...prevState.todoItems,
        {
          id: uuidv4(),
          title: prevState.newTodo.title,
          description: prevState.newTodo.description,
          isCompleted: false,
        },
      ],
      newTodo: {
        title: "",
        description: "",
      },
    }));
  };

  deleteTask = (itemToDelete) => {
    this.setState((prevState) => ({
      todoItems: prevState.todoItems.filter(
        (item) => item.id !== itemToDelete.id
      ),
    }));
  };

  todoRows = () =>
    this.state.todoItems.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteTask(item)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

  render = () => {
    return (
      <div className="container">
        <div className="row">
          <Header name={this.state.userName} />
          <TodoForm
            newTodo={this.state.newTodo}
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
          />
          <TodoTable displayTodos={this.todoRows} />
        </div>
      </div>
    );
  };
}
