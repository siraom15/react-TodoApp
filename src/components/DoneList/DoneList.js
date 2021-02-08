import { Component } from "react";
import TodoCard from "../TodoCard/TodoCard";
import { connect } from 'react-redux'
import Card from '../Card/Card'
class DoneList extends Component {

    getDone() {
        const todoList = this.props.todos.filter(todo => todo.success == true)
        return (this.props.todos.length > 0) ? todoList.map(todo => (
            <TodoCard key={todo.id} {...todo} />
        )) : <Card content="No Data" />
    }

    render() {
        return (
            <div className="row mt-2 p-5">
                <div className="col">
                    <Card content="Done List" />
                    {this.getDone()}
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

export default connect(mapStateToProps)(DoneList);