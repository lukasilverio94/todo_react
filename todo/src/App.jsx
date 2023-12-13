/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  todoRows = () =>
    this.state.todoItems.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>
            <input
              type="checkbox"
              checked={item.isCompleted}
              className="form-check-input"
            />
          </td>
        </tr>
      );
    });

  render = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="bg-danger text-white text-center py-2">Todo List</h1>
          </div>
          {/* Inputs Create Todos */}
          <div className="col-12 my-4">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-2">
                <label htmlFor="title">Task: </label>
                <input
                  value={this.state.newTodo.title}
                  name="title"
                  className="form-control"
                  id="title"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="description">Description: </label>
                <input
                  value={this.state.newTodo.description}
                  name="description"
                  className="form-control"
                  id="description"
                  onChange={this.handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary my-2">
                Submit
              </button>
            </form>
          </div>
          <div className="col-12">
            {/* TABLE */}
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Description</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.todoRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}
