import { Component } from "react";
import { connect } from 'react-redux'
import './TodoCard.css'
class TodoCard extends Component {
    constructor(props) {
        super(props);
        this.style = {
            backgroundColor: "#ffdcb8",
            color: "#9b5151"
        }
        this.style2 = {
            backgroundColor: "#ffc1b6",
            color: "#fdffbc"
        }
    }
    deleteTodo() {
        this.props.dispatch({
            type: 'DELETE_TODO',
            data: this.props
        })
    }
    doneTodo() {
        this.props.dispatch({
            type: 'DONE_TODO',
            data: this.props
        })
    }
    undoTodo() {
        this.props.dispatch({
            type: 'UNDO_TODO',
            data: this.props
        })
    }
    doneBtn() {
        if (!this.props.success) {
            return <button type="button" className="btn btn-blog bg-peach" style={this.style} onClick={(e) => this.doneTodo()}>Done</button>
        }else{
            return <button type="button" className="btn btn-blog bg-peach" style={this.style} onClick={(e) => this.undoTodo()}>Undo</button>
        }
    }
    render() {
        return (
            <div className="card shadow-sm mt-1">
                <div className="card-body">
                    <h5><span className="badge" style={this.style2}>title</span> {this.props.title}</h5>
                    <hr/>
                    <p><span className="badge" style={this.style2}>Describe</span> {this.props.describe}</p>
                    <div className="row">
                        <div className="col">
                            {this.doneBtn()}
                        </div>
                        <div className="col">
                            <button type="button" className="btn bg-pink" style={this.style2} onClick={(e) => this.deleteTodo()}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default connect()(TodoCard);