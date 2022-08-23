import React, { Component } from "react";

export default class QuestionsInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add a Question"
              value={item}
              onChange={handleChange}
            />
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-question"></i>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2">
            <button
              onClick={() =>
                setTimeout(() => window.open("url", "_blank"), 5000)
              }
              type="submit"
              className={
                editItem ? "btn btn-success mt-3" : "btn btn-primary mt-3"
              }
            >
              {editItem ? "Edit This Dialog" : "Add The Dialog "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
