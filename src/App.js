import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import DoneList from './components/DoneList/DoneList'

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
            <DoneList />
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
