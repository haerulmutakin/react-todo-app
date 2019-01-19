import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { getTodosByVisibilityFilter } from "../react-redux/selector";
import { toggleTodo, removeTodo } from "../react-redux/actions";
import { VISIBILITY_FILTERS } from "../react-redux/reducers/constant";
import AddTodo from './AddTodo'

const title = {
    color: '#efeae7',
    fontWeight: 'bold',
    fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif'
}
const todoContiner = {
    backgroundColor: '#525252',
    marginTop: '30px',
    paddingTop: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}
const ul = {
    borderRadius: '0',
    height: '60px',
    textAlign: 'left',
    fontSize: '25px',
    color: '#efeae7',
    backgroundColor: 'inherit',
    borderColor: '#ff97c0',
    border: 'none',
    borderBottom: '1px solid #453e3c',
    padding: '10px 5px'
}
const navigateButton = {
    backgroundColor: 'inherit',
    border: 'none',
    fontWeight: 'bold',
    margin: '20px 0 20px 0',
    
}
const removeButton = {
    cursor: 'pointer'
}
const listContainer = {
    minHeight: '470px',
    paddingBottom: '10px'
}

const noTodo = {
    fontSize: '20px',
    marginTop: '90px',
    color: '#efeae7'
}

const mapStateToProps = state => {
    const todos = getTodosByVisibilityFilter(state, VISIBILITY_FILTERS.INCOMPLETE);
    return { todos };
}

const removeTooltip = (
    <Tooltip id="tooltip">
        <strong>Remove</strong>
    </Tooltip>
)

const Todo = ({ todos, toggleTodo, removeTodo }) => (
    <div className="container">
        <div style={todoContiner} className="col-md-offset-3 col-md-6">
            <h3 style={title}>TODO LIST</h3>
            <AddTodo />
            <div style={listContainer}>
            <ul  className="list-group" >
                {todos && todos.length
                    ? todos.map((todo, i) => 
                        <li className="list-group-item" key={todo.id} style={ul}>
                            {todo.content}
                            <span className="pull-right" style={removeButton}>
                                    <span onClick={() => toggleTodo(todo.id)}>&#10004;</span>&nbsp;&nbsp;
                                <OverlayTrigger placement="top" overlay={removeTooltip}>
                                    <span onClick={() => removeTodo(todo.id)}>&#10005;</span>
                                </OverlayTrigger>
                            </span>
                        </li>
                    )
                    : (<span style={noTodo}>There is no todo</span>)
                }
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


export default connect(mapStateToProps, {toggleTodo, removeTodo})(Todo);