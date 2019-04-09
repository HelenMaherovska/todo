import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { addTodo } from "actions/todoActions";
import "components/AddTodo/AddTodo.css";

export const AddTodo = props => {
  const [inputValue, setInputValue] = useState("");

  const onAddTodo = () => {
    const { addTodo } = props;

    setInputValue("");

    return inputValue.trim() ? addTodo(inputValue) : null;
  };

  return (
    <div className="add-todo-wrapper input-group d-flex pr-0 pl-0 justify-content-between">
      <input
        type="text"
        className="form-control mr-4"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="submit" className="btn btn-success" onClick={onAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addTodo
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
