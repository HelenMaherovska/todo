import { format } from "date-fns";
import uuid from "uuid";
import {
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  FILTER_TODO
} from "actions/types.js";

export const addTodo = text => ({
  type: ADD_TODO,
  id: uuid.v4(),
  complete: false,
  date: format(new Date(), "MM/DD/YYYY HH:mm:ss"),
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  date: format(new Date(), "MM/DD/YYYY HH:mm:ss"),
  todo
});

export const filterTodo = filter => ({
  type: FILTER_TODO,
  filter
});
