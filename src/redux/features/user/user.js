import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "../../../helper";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: loadFromLocalStorage() || [], // mengambil data dari local storage ada
    filteredUsers: [],
    sortCriteria: "name",
    sortOrder: "asc",
  },
  reducers: {
    // menambahkan data
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.filteredUsers = state.users;
      saveToLocalStorage(state.users);
    },

    // mengubah data
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );

      if (index !== -1) {
        state.users[index] = action.payload;
        state.filteredUsers = state.users;
        saveToLocalStorage(state.users);
      }
    },

    // menghapus data
    deleteUser: (state, action) => {
      const newState = state.users.filter((user) => user.id !== action.payload);
      state.users = newState;
      state.filteredUsers = newState;
      saveToLocalStorage(newState);
    },

    // mengfilter data
    filterAndSortUsers: (state, action) => {
      const { status, sortBy, sortOrder } = action.payload;

      let filtered = state.users;
      if (status) {
        filtered = filtered.filter((user) => user.status === status);
      }

      if (sortBy) {
        filtered = filtered.sort((a, b) => {
          const aValue = a[sortBy]
            ? a[sortBy].toString().toLowerCase()
            : a[sortBy];
          const bValue = b[sortBy]
            ? b[sortBy].toString().toLowerCase()
            : b[sortBy];

          if (sortOrder === "asc") {
            return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
          } else {
            return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
          }
        });
      }

      state.filteredUsers = filtered;
    },
    // mereset filter
    resetFilters: (state) => {
      state.filteredUsers = state.users;
      state.sortCriteria = "name";
      state.sortOrder = "asc";
    },

    // memfilter data berdasarkan id
    filterById: (state, action) => {
      const userId = action.payload;
      const user = state.users.find((user) => user.id === userId);
      state.filteredUsers = user ? [user] : [];
    },
  },
});

export const {
  addUser,
  updateUser,
  deleteUser,
  filterAndSortUsers,
  resetFilters,
  filterById,
} = userSlice.actions;

export default userSlice.reducer;
