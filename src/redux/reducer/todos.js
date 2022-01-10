import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "../actionsTypes";

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        todos: [...state.todos, { content, complete: true, id }],
      };
    }

    case EDIT_TODO: {
      const { content } = action.payload;
      return {
        todos: content,
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map((obj) =>
        obj.id === id ? { ...obj, completed: !obj.completed } : obj
      );

      return { todos };
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      console.log(id);
      const latestTodos = state.todos.filter((todo) => {
        console.log(todo.id, "===", id);

        return todo.id !== id;
      });

      return {
        todos: latestTodos,
      };
    }

    default: {
      return state;
    }
  }
};

export default todos;
