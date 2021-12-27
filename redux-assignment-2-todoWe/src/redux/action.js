export const actionContraint = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  TOGGLE_TODO_STATUS: "TOGGLE_TODO_STATUS"
};
//action creator
export const addTodo = ({ status, title, id }) => ({
  type: actionContraint.ADD_TODO,
  payload: {
    status,
    title,
    id
  }
});

export const removeTodo = (id) => ({
  type: actionContraint.REMOVE_TODO,
  payload: {
    id: id
  }
});
export const toggleTodoStatus = (id) => ({
  type: actionContraint.TOGGLE_TODO_STATUS,
  payload: {
    id: id
  }
});
