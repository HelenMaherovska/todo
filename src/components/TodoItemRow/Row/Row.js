import React from "react";
import PropTypes from "prop-types";

const Row = props => {
  const { id, text, completed, date, onToggleEdit, onClick, onDelete } = props;
  return (
    <tr>
      <td
        onClick={() => onClick(id)}
        className={"todo-text " + (completed ? "completed" : "")}
      >
        {text}
      </td>
      <td
        onClick={() => onClick(id)}
        className={"todo-text " + (completed ? "completed" : "")}
      >
        {date}
      </td>
      <td>
        <button
          onClick={onToggleEdit}
          type="button"
          className="btn btn-info mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

Row.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired
};

export default Row;
