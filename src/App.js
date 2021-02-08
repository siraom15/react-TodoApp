import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col">
            <TodoList />
          </div>
          <div className="col">
            <TodoForm />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
