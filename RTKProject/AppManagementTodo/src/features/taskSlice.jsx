import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  status: "All",
};
export const fetchTodo = createAsyncThunk("tasks/fetchTodo", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );

  const result = await response.json();
  console.log(result);
  return result.map((item) => ({
    id: item.id,
    title: item.title,
    decription: "",
    status: item.completed ? "Completed" : "To Do",
  }));
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        ((state.loading = false), (state.tasks = action.payload));
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        ((state.loading = true), (state.error = action.error.message));
      });
  },
});

export default taskSlice.reducer;
