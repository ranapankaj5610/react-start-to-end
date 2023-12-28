import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: JSON.parse(localStorage.getItem("todos")) || [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleComplete: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].completed = action.payload;
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToEdit = state.todos.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = text;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
  },
});

export const { addTodo, editTodo, removeTodo, toggleComplete } =
  todoSlice.actions;
export default todoSlice.reducer;
