import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../react-redux/actions";

const input = {
    height: '50px',
    border: 'none',
    boxShadow: 'none',
    fontSize: '20px',
    fontStyle: 'italic',
    borderBottom: '1px solid #1a1a1a',
    borderRadius: '0',
    marginBottom: '10px',
    backgroundColor: 'inherit'
}

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input: "" };
      }
    
    updateInput = input => {
        this.setState({ input });
      };

    handleAddTodo = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
      };

    render() {
        return (
            <form onSubmit={this.handleAddTodo}>
                <input type="text" value={this.state.input} onChange={(e) => this.updateInput(e.target.value)} className="form-control" style={input} placeholder="Add todo..."/>
            </form>
        )
    }
}

export default connect(null,{ addTodo })(AddTodo);