import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { fetchData } from "../../API";

export const getData = createAsyncThunk("getData", async () => {
  const response = await fetchData();
  return response;
});

const usersSlice = createSlice({
  // name of this slice
  name: "users",
  // initial state
  initialState: {
    isLoading: false,
    error: {
      isError: false,
      errorMessage: null,
    },
    allUsers: [],
    result: [],
  },

  reducers: {
    updateFunction: (state, action) => {
      const plan = action.payload;

      if (plan === "All") {
        state.result = current(state).allUsers;
        return;
      }

      const data = current(state).allUsers.filter((user) => {
        return user.subscription.plan === plan;
      });

      state.result = data;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
      state.allUsers = [];
      state.result = [];
      state.error = { isError: false, errorMessage: null };
    });

    builder.addCase(getData.rejected, (state) => {
      state.isLoading = false;
      state.allUsers = [];
      state.result = [];
      state.error = { isError: true, errorMessage: "network error occurred" };
    });

    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allUsers = action.payload;
      state.result = action.payload;
      state.error = { isError: false, errorMessage: null };
    });
  },
});

export const { updateFunction } = usersSlice.actions;
export default usersSlice.reducer;
