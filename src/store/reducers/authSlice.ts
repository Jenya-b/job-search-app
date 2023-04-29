import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
  accessToken: string | null;
}

const initialState: InitialStateType = {
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'authorizayionSlice',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setAuthData } = authSlice.actions;
