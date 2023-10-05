import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthInitialState, LoginValues, RegisterValues } from '../types/auth';
import axiosApiInstance from '../utils/axiosInterceptors';
import apiRoutes from '../api/api';

const initialState: AuthInitialState = {
  authedUser: null,
  loginLoading: false,
  registerLoading: false,
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (
    {
      input,
      onSuccess,
    }: {
      input: Omit<RegisterValues, 'confirmPassword'>;
      onSuccess: VoidFunction;
    },
    thunkApi
  ) => {
    try {
      await axiosApiInstance.post(apiRoutes.auth.register, {
        ...input,
      });
      onSuccess && onSuccess();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (
    {
      input,
      onSuccess,
    }: {
      input: LoginValues;
      onSuccess: VoidFunction;
    },
    thunkApi
  ) => {
    try {
      await axiosApiInstance.post(apiRoutes.auth.login, { ...input });
      onSuccess && onSuccess();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.registerLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.registerLoading = false;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.registerLoading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loginLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.loginLoading = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loginLoading = false;
    });
  },
});

export default authReducer.reducer;
