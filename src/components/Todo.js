import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getTodosByVisibilityFilter } from "../react-redux/selector";
import { toggleTodo } from "../react-redux/actions";
import { VISIBILITY_FILTERS } from "../react-redux/reducers/constant";
import AddTodo from './AddTodo'

const title = {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif'
}
const todoContiner = {
    backgroundColor: '#efc95a',
    marginTop: '30px',
    // height: '600px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}
const ul = {
    borderRadius: '0',
    height: '50px',
    textAlign: 'left',
    fontSize: '20px',
    color: '#1a1a1a',
    backgroundColor: 'inherit',
    borderColor: '#ff97c0',
    border: 'none',
    padding: '10px 5px'
}
const navigateButton = {
    backgroundColor: 'inherit',
    border: 'none',
    marginTop: '20px',
    
}
const removeButton = {
    cursor: 'pointer'
}
const listContainer = {
    height: '470px',
    // overflowY: 'scroll',
}

const mapStateToProps = state => {
    const todos = getTodosByVisibilityFilter(state, VISIBILITY_FILTERS.INCOMPLETE);
    return { todos };
}

const Todo = ({ todos, toggleTodo }) => (
    <div className="container">
        <div style={todoContiner} className="col-md-offset-3 col-md-6">
            <h3 style={title}>TODO LIST</h3>
            <AddTodo />
            <div style={listContainer}>
            <ul  className="list-group" >
                {todos.map((todo, i) => 
                    <li className="list-group-item" key={todo.id} style={ul}>
                        {todo.content}
                        <span className="pull-right" style={removeButton}>
                            <span onClick={() => toggleTodo(todo.id)}>&#10004;</span>&nbsp;&nbsp;
                            <span>&#10005;</span>
                        </span>
                    </li>
                )}
            </ul>
            </div>
        </div>
        <div className="col-md-offset-3 col-md-6">
            <button style={navigateButton}>
                <Link to="/done">See what you've done &rarr;</Link>
            </button>
        </div>
    </div>
) 


export default connect(mapStateToProps, {toggleTodo})(Todo);