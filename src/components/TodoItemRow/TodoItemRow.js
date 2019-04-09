import React, { Component } from "react";
import PropTypes from "prop-types";
import Row from "components/TodoItemRow/Row/Row";
import EditRow from "components/TodoItemRow/EditRow/EditRow";
import "components/TodoItemRow/TodoItemRow.css";

class TodoItemRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }
  setRef = input => {
    this.editInputRef = input;
  };

  onToggleEdit = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  };

  onEditTodo = () => {
    const { id, completed, onUpdate } = this.props;

    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));

    const data = {
      id,
      completed,
      text: this.editInputRef.value
    };

    onUpdate(data);
  };

  render() {
    const { isEditing } = this.state;

    let todoItem = isEditing ? (
      <EditRow
        setRef={this.setRef}
        onEditTodo={this.onEditTodo}
        onToggleEdit={this.onToggleEdit}
        {...this.props}
      />
    ) : (
      <Row onToggleEdit={this.onToggleEdit} {...this.props} />
    );

    return todoItem;
  }
}

TodoItemRow.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default TodoItemRow;
