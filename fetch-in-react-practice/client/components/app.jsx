import React from "react";
import PageTitle from "./page-title";
import TodoList from "./todo-list";
import TodoForm from "./todo-form";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch("/api/todos")
      .then((response) => response.json())
      .then((todos) =>
        this.setState({
          todos,
        })
      );
  }

  addTodo(newTodo) {
    console.log(newTodo);
    /**
     * Use fetch to send a POST request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * add the created todo to the state array.
     *
     * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
     * and specify the "Content-Type" header as "application/json"
     */
    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          todos: [...this.state.todos, data],
        })
      );
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    let todos = this.state.todos;
    function test(todoId) {
      return todoId === todo.todoId
    }
    const index = todos.findIndex(test);
    console.log(index);
    const completed = todos[index].isCompleted;
    console.log("completed status", completed);
    const oppositeCompletedStatus = { isCompleted: !completed };
    fetch(`/api/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(oppositeCompletedStatus),
    })
      .then((response) => response.json())
      .then(
        (data) => (todos[index] = data),
        console.log("todos", todos),
        this.setState({
          todos,
        })
      );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App" />
            <TodoForm onSubmit={this.addTodo} />
            <TodoList
              todos={this.state.todos}
              toggleCompleted={this.toggleCompleted}
            />
          </div>
        </div>
      </div>
    );
  }
}
