import React from "react";
import PropTypes from "prop-types";

const EditRow = props => {
  const { text, id, onToggleEdit, onEditTodo, setRef } = props;
  return (
    <tr>
      <td>
        <input
          defaultValue={text}
          type="text"
          ref={setRef}
          className="form-control todo-text"
        />
      </td>
      <td />
      <td>
        <button
          onClick={() => onEditTodo(id)}
          type="button"
          className="btn btn-success mr-2"
        >
          Save
        </button>
        <button
          onClick={onToggleEdit}
          type="button"
          className="btn btn-danger mr-2"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

EditRow.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired
};

export default EditRow;
