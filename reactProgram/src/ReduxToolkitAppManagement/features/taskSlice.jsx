import { createSlice, asyncThunkCreator } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  status: "all",
};

const taskTodo = asyncThunkCreator("task/fetchtodo", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );
  const result = await response.json();
  //console.log(result);
  return result.map((item) => ({
    id: item.id,
    title: item.title,
    description: "",
    status: item.completed ? "completed" : "to do",
  }));
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(taskTodo.pending, (state) => {
      ((state.loading = true), (state.error = null));
    });
    builder.addCase(taskTodo.fulfilled, (state, action) => {
      ((state.loading = false), (state.tasks = action.payload));
    });
    builder.addCase(taskTodo.rejected, (state, action) => {
      ((state.loading = false), (state.error = action.error.message));
    });
  },
});

export default taskSlice.reducer;
