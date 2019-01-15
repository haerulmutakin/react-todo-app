import React from 'react';

const form = {
    marginTop: '28px'
}

export class Todo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            todo: '',
            todoList: ['Breakfast', 'Go to office']
        }
    }

    handleTotoChange = (event) => {
        this.setState({
            todo: event.target.value
        })
    }

    buttonClickHandler = event => {
        this.setState(state => {
            const list = this.state.todoList.push(this.state.todo)
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

    render() {
        return (
            <div className="container">
                <div className="col-xl-12 col-sm-6">
                    <div>
                        <h3>Add Todo</h3>
                        <div className="well">
                            <form onSubmit={this.buttonClickHandler}>
                                <div className="form-group">
                                    <input type="text" value={this.state.todo} onChange={this.handleTotoChange} className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.buttonClickHandler}>Add Todo</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12 col-sm-6">
                    <div>
                        <h3>Todo List</h3>
                        <ul  className="list-group">
                            {this.state.todoList.map((todo, i) => 
                                <li className="list-group-item" key={i}>
                                    {todo}
                                    <span className="pull-right">
                                        <button onClick={() =>  this.handleRemoveClick(i) } className="btn btn-xs btn-danger">
                                            <i className="glyphicon glyphicon-remove"></i>
                                        </button>
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
