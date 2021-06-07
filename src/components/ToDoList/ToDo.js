import React from 'react';
import { connect } from "react-redux";
import { deleteToDo, completeToDo } from "./store";
import { FaCheck, FaTrash } from "react-icons/fa";
import "./ToDoList.css"

const ToDo = ({ text, completed, deleteToDo, completeToDo }) => {
  return (
    <li>
      <span className={completed ? "completed" : null}>{text}</span>
      <button onClick={completeToDo}><FaCheck /></button>
      <button onClick={deleteToDo}><FaTrash /></button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteToDo: () => dispatch(deleteToDo(ownProps.id)),
    completeToDo: () => dispatch(completeToDo(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps) (ToDo);