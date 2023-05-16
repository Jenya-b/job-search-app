import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActiveMenu: false,
};

const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    setActiveMenu: (state, action: PayloadAction<boolean>) => {
      state.isActiveMenu = action.payload;
    },
  },
});

export const { setActiveMenu } = menuSlice.actions;

export default menuSlice.reducer;
