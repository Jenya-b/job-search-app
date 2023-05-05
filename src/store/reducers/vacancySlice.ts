import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
  favoriteIds: number[];
}

const initialState: InitialStateType = {
  favoriteIds: [],
};

export const vacancySlice = createSlice({
  name: 'vacancySlice',
  initialState,
  reducers: {
    updateFavoriteId: (state, action: PayloadAction<number[]>) => {
      state.favoriteIds = action.payload;
    },
  },
});

export const { updateFavoriteId } = vacancySlice.actions;

export default vacancySlice.reducer;
