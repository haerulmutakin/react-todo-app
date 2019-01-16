import React from 'react';

const title = {
    color: '#555'
}
const ul = {
    borderRadius: '0',
    height: '50px',
    textAlign: 'left',
    fontSize: '20px',
    color: '#555'
}

const input = {
    height: '50px',
    border: 'none',
    boxShadow: 'none',
    fontSize: '20px',
    fontStyle: 'italic',
    borderBottom: '1px solid #ccc',
    borderRadius: '0',
    marginBottom: '10px'
}

export class Todo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            todo: '',
            todoList: ['Take a bath', 'Pray subuh']
        }
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-offset-3 col-md-6">
                    <h3 style={title}>Todo List</h3>
                    <form onSubmit={this.buttonClickHandler}>
                        {/* <div className="form-group"> */}
                        <input type="text" value={this.state.todo} onChange={this.handleTotoChange} className="form-control" style={input} placeholder="Add todo..."/>
                        {/* </div> */}
                        {/* <button type="submit" className="btn btn-primary" onClick={this.buttonClickHandler}>Add Todo</button> */}
                    </form>
                    
                    <ul  className="list-group" >
                        {this.state.todoList.map((todo, i) => 
                            <li className="list-group-item" key={i} style={ul}>
                                {todo}
                                <span className="pull-right">
                                    <button onClick={() =>  this.handleRemoveClick(i) } className="btn btn-xs btn-success">
                                        {/* <i className="glyphicon glyphicon-remove"></i> */}
                                        Done
                                    </button>
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }

    handleTotoChange = (event) => {
        this.setState({
            todo: event.target.value
        })
    }

    buttonClickHandler = event => {
        this.setState(state => {
            const list = this.state.todoList.unshift(this.state.todo)
            return {
                list,
                todo: ''
            }
        })
        event.preventDefault();
    }

    handleRemoveClick (index) {
        this.setState(state => {
            const list = this.state.todoList.splice(index, 1);
            return {
                list,
                todo: ''
            }
        })
    }
}
