import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch data from clients //

export const getToDo = createAsyncThunk("getToDo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  return response.json();
});

const initialTodoState = {
  data: [],
  isLoading: false,
  isError: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  extraReducers: (builder) => {
    builder.addCase(getToDo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getToDo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getToDo.rejected, (state) => {
      state.isError = !state.isError;
    });
  },
});

export default todoSlice.reducer;
