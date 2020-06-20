import React from "react";
import TodoCard from "../../components/TodoCard/TodoCard";
import Seperator from "../../components/Seperator/Seperator";

class TodosPage extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const pathname = this.props.history.location.pathname;
    const response = await fetch(`${baseUrl}${pathname}`);
    const data = await response.json();
    console.log(data);
    this.setState({ todos: data });
  };

  render() {
    return (
      <div className="container">
        <div className="user-todos">
          <Seperator seperatorText="TODOS" />
          {this.state.todos.map((todo) => (
            <TodoCard
              todoTitle={todo.title}
              key={todo.id}
              imgSrc={`https://unsplash.it/100/10${todo.id}`}
              todoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Praesent euismod, orci a congue pulvinar, tortor nunc volutpat purus, 
              non faucibus orci quam nec nunc. Nam lacinia, tellus non aliquet cursus, 
              erat ex egestas risus, at venenatis tortor sem eu lectus."
            ></TodoCard>
          ))}
        </div>
      </div>
    );
  }
}

export default TodosPage;
