/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

export default class TodoTable extends Component {
  render() {
    return (
      <div className="col-12 table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{this.props.displayTodos()}</tbody>
        </table>
      </div>
    );
  }
}
