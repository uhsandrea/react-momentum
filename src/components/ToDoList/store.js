import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const TODOS_LS = "toDos"
const loadedToDos = localStorage.getItem(TODOS_LS) ? JSON.parse(localStorage.getItem(TODOS_LS)) : [];

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
const completeToDo = createAction("COMPLETE");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    return [{ text: action.payload, id: Date.now(), completed: false }, ...state];
  },
  [deleteToDo]: (state, action) => {
    return state.filter(toDo => toDo.id !== action.payload)
  },
  [completeToDo]: (state, action) => {
    return state.map(toDo => {
      if (toDo.id === action.payload) {
        return {
          ...toDo,
          completed: !toDo.completed
        }
      }
      return toDo;
    })
  }
});

const store = createStore(reducer, loadedToDos);

export const actionCreators = {
  addToDo,
  deleteToDo,
  completeToDo
};

const saveLocalStorage = () => {
  const toDos = store.getState();
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

store.subscribe(() => {
  saveLocalStorage();
});

export default store;
