import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "store/store";

import AddTodo from "components/AddTodo/AddTodo";
import TodoList from "components/TodoList/TodoList";
import Footer from "components/Footer/Footer";
import "components/App/App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <AddTodo />
          <TodoList />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
