import { SET_TODO_INPUT } from "./constants";
import { ADD_TODO_INPUT } from "./constants";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addTodoInput = (payload) => ({
  type: SADD_TODO_INPUT,
  payload,
});