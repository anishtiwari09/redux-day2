import { actionContraint } from "./action";

const initalState = {
  todos: [
    {
      id: 1,
      title: "buy bread",
      status: true
    }
  ]
};

export const reducer = (state = initalState, action) => {
  //console.log(action.type, action.payload);
  switch (action.type) {
    case actionContraint.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    case actionContraint.REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id)
      };
    }
    case actionContraint.TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
      };
    }
    default:
      return state;
  }
};
