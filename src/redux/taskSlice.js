import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: []
  },
  reducers: {
    // Add a new task
    addTask(state, action) {
      state.task.push(action.payload);
      toast.success("Task added successfully!");
    },
    
    // Delete a task
    deleteTask(state, action) {
      const taskToDelete = state.task.find(item => item.id === action.payload);
      
      if (taskToDelete) {
        state.task = state.task.filter(item => item.id !== action.payload);
        toast.success("Task deleted successfully!");
      } else {
        toast.error("Task not found!");
      }
    },

    // Update an existing task
    updateTask(state, action) {
      const existingTaskIndex = state.task.findIndex(item => item.id === action.payload.id);
      
      if (existingTaskIndex >= 0) {
        // Update the task by replacing the item at the found index
        state.task[existingTaskIndex] = action.payload;
        toast.success("Task updated successfully!");
      } else {
        toast.error("Task not found!");
      }
    }
  }
});

// Export the reducer and actions
export default taskSlice.reducer;
export const { addTask, deleteTask, updateTask } = taskSlice.actions;
