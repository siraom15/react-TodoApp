import { Component } from "react";
import './TodoCard.css'
class TodoCard extends Component {
    render() {
        let style = {
            backgroundColor : "#ffdcb8",
            color : "#9b5151"
        }
        return (

            <div class="card">
                <div class="card-body">
                    <h5>Todo Name : {this.props.title}</h5>
                    <p>Describe : {this.props.describe}</p>
                    <div className="row">
                        <div className="col">
                            <button type="button" class="btn btn-blog bg-peach" style={style}>Edit</button>
                        </div>
                        <div className="col">
                            <button type="button" class="btn bg-pink">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default TodoCard;