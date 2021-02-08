import { Component } from "react";
import { connect } from 'react-redux'

class TodoForm extends Component {
    handlerSubmit(e){
        e.preventDefault(); 
        const title = this.title.value;
        const describe = this.describe.value;
        
        const data = {
            id : Date.now(),
            title,
            describe,
            success : false
        }
        this.props.dispatch({
            type : 'ADD_TODO',
            data
        })
        this.title.value = null
        this.describe.value = null

    }
    render() {
        const style = {
            backgroundColor : "#ffdcb8",
            color : "#9b5151"
        }
        return (
            <div className="container-fluid mt-2 p-5">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h5>Add Todo</h5>
                        <hr/>
                        <form onSubmit={(e)=>this.handlerSubmit(e)}>
                            <div className="form-group">
                                <label >Todo title</label>
                                <input type="text" className="form-control"  placeholder="Enter Todo Name"ref={(input)=> this.title = input} required={true} />
                            </div>
                            <div className="form-group">
                                <label >Descibe</label>
                                <textarea type="text" className="form-control" placeholder="Describe" ref={(input)=> this.describe = input} required={true} />
                            </div>
                            <div className="form-group mt-2">
                                <button type="submit" className="btn" style={style}>Add Todo</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        )
    }
}

export default connect()(TodoForm);