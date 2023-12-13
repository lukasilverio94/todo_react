/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

export default class TodoForm extends Component {
  render() {
    const { handleSubmit, handleInputChange, newTodo } = this.props;
    return (
      <div className="col-12 my-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="title">Task: </label>
            <input
              value={newTodo.title}
              name="title"
              className="form-control"
              id="title"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="description">Description: </label>
            <input
              value={newTodo.description}
              name="description"
              className="form-control"
              id="description"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary my-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
