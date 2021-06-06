import React, { useState } from 'react';
import { connect } from "react-redux";
import { actionCreators } from "./store";
import ToDo from "./ToDo";
import "./ToDoList.css"
import { SiAddthis } from "react-icons/si";

const ToDoList = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <div className="todolist-container">
      <h1>ToDo List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button><SiAddthis /></button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return { toDos: state };
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ToDoList);