import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isLoading: false,
  token: "",
  error: "",
  message: "",
};

export const loginUser = createAsyncThunk("loginUser", async (body) => {
  const res = await fetch("http://192.168.50.245:80/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    addEmail: (state, action) => {
      // state.email = localStorage.getItem("email");
      state.email = action.payload;
      console.log(state.email, "email");
    },

    addToken: (state, action)=>{
      state.token = localStorage.getItem('token')
    },

    addLogout: (state, action)=>{
      state.token = null;
      localStorage.clear();
    }
  },

  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
        state.isLoding = false;
        // state.error = payload.error;
      },

    [loginUser.fulfilled]: (state, action) => {
      if (action.error) {
        state.isLoading = false;
        // state.error = action.payload.non_field_errors;
        // console.log(state.error, 'error')
      } else {
        state.token = action.payload.token;
        console.log(state.token);
        state.isLoading = false;
        localStorage.setItem("token", state.token);
      }
    },
  },
});

export const { addToken, addEmail, addLogout } = authSlice.actions;
export default authSlice.reducer;