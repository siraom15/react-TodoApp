import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import DoneList from './components/DoneList/DoneList'
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <TodoForm />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <TodoList />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <DoneList />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
