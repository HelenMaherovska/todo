import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Row = props => {
  const { id, text, completed, date, onToggleEdit, onClick, onDelete } = props;
  let todoTextClass = classNames({ "todo-text": true, completed });
  return (
    <tr>
      <td onClick={() => onClick(id)} className={todoTextClass}>
        {text}
      </td>
      <td onClick={() => onClick(id)} className={todoTextClass}>
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
