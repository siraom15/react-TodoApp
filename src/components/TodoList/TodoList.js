import { Component } from "react";
import TodoCard from "../TodoCard/TodoCard";
import { connect } from 'react-redux'
import Card from '../Card/Card'
class TodoList extends Component {

    getTodo() {
        const todoList = this.props.todos.filter(todo => todo.success === false)
        return (todoList.length > 0) ? todoList.map(todo => (
            <TodoCard key={todo.id} {...todo} />
        )) : <Card content="No Todo List" />
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col">
                    <Card content="Todo List" />
                    {this.getTodo()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);