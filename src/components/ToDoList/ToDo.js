import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { FaCheck, FaTrash } from "react-icons/fa";

const ToDo = ({ text, completed, deleteToDo, completeToDo }) => {
  return (
    <li className={completed ? "completed" : null}>
      {text}<button onClick={completeToDo}><FaCheck /></button><button onClick={deleteToDo}><FaTrash /></button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
    completeToDo: () => dispatch(actionCreators.completeToDo(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps) (ToDo);