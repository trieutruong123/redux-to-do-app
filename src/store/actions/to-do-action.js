import { v4 as uuid } from 'uuid';
import {
  ADD_TO_DO,
  DELETE_TO_DO,
  MARK_AS_COMPLETED,
  GET_ALL_TO_DOS,
} from '../types';

export function addToDo(content) {
  const payload = {
    id: uuid(),
    title: content,
    completed: false,
  };
  return {
    type: ADD_TO_DO,
    payload,
  };
}
export function deleteToDo(id) {
  const payload = { id };
  return {
    type: DELETE_TO_DO,
    payload,
  };
}

export function markItemAsCompleted(id) {
  const payload = { id };
  return {
    type: MARK_AS_COMPLETED,
    payload,
  };
}

export function getAllTodos(initialData) {
  const payload = { initialData };
  return {
    type: GET_ALL_TO_DOS,
    payload,
  };
}
