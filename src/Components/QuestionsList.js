import React, { Component } from "react";
import QuestionsItem from "./QuestionsItem";

export default class QuestionsList extends Component {
  render() {
    const { items, clearList, sortList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Q&A List</h3>
        {items.map((item) => {
          return (
            <QuestionsItem
              key={item.id}
              title={item.title}
              handleDelete={() => {
                handleDelete(item.id);
              }}
              handleEdit={() => {
                handleEdit(item.id);
              }}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger text-capitalize mt-5 "
          onClick={clearList}
        >
          Clear List
        </button>
        <button
          type="button"
          className="btn btn-info text-capitalize mt-2 "
          onClick={sortList}
        >
          Sort List
        </button>
      </ul>
    );
  }
}
