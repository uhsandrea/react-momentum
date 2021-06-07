import React, { useState } from 'react';
import { connect } from "react-redux";
import { addToDo } from "./store";
import ToDo from "./ToDo";
import "./ToDoList.css"
import { FaPlusSquare } from "react-icons/fa";

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
    <div className="todolist">
      <h2>ToDo List</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} required/>
        <button><FaPlusSquare /></button>
      </form>
      <ul className="todos">
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
    addToDo: text => dispatch(addToDo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ToDoList);