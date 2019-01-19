import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../react-redux/selector";
import { VISIBILITY_FILTERS } from "../react-redux/reducers/constant";

const title = {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif'
}
const todoContiner = {
    backgroundColor: '#ff9bbc',
    marginTop: '30px',
    // height: '600px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}
const ul = {
    borderRadius: '0',
    height: '60px',
    textAlign: 'left',
    fontSize: '25px',
    color: '#555',
    backgroundColor: 'inherit',
    borderColor: '#ff97c0',
    border: 'none',
    borderBottom: '1px solid green',
    padding: '10px 5px'
}

const navigateButton = {
    backgroundColor: 'inherit',
    border: 'none',
    marginTop: '20px',
    
}

const listContainer = {
    height: '470px',
    // overflowY: 'scroll',
}

const mapStateToProps = state => {
    const todos = getTodosByVisibilityFilter(state, VISIBILITY_FILTERS.COMPLETED);
    return { todos };
}

const Done = ({todos}) =>  (
    <div className="container">
        <div style={todoContiner} className="col-md-offset-3 col-md-6">
            <h3 style={title}>DONE LIST HERE</h3>
            <div style={listContainer}>
            <ul  className="list-group" >
                {
                    todos.map((todo, i) => 
                        <li className="list-group-item" key={todo.id} style={ul}>
                            {todo.content}
                            <span className="pull-right">
                                <button className="btn btn-xs btn-primary">Done at {todo.done}</button>
                            </span>
                        </li>
                    )
                }
            </ul>
            </div>
        </div>
        <div className="col-md-offset-3 col-md-6">
            <button style={navigateButton}>
            <Link to="/">&larr; Back to todo list</Link>
            </button>
        </div>
    </div>
)

export default connect(mapStateToProps)(Done);
