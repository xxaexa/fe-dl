import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// mengambil data dari api
export const fetchAllGithubUsers = createAsyncThunk(
  "github/fetchAllUsers",
  async () => {
    try {
      const response = await axios.get("https://api.github.com/users");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch GitHub users");
    }
  }
);

const githubSlice = createSlice({
  name: "github",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // handle pending
      .addCase(fetchAllGithubUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // handle berhasil
      .addCase(fetchAllGithubUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      // handle gagal
      .addCase(fetchAllGithubUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default githubSlice.reducer;
