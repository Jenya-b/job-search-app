import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IVacancies } from 'interfaces/api';

interface InitialStateType {
  favoritesVacancy: IVacancies[];
}

const initialState: InitialStateType = {
  favoritesVacancy: [],
};

export const vacancySlice = createSlice({
  name: 'vacancySlice',
  initialState,
  reducers: {
    updateFavoritesVacancy: (state, action: PayloadAction<IVacancies[]>) => {
      state.favoritesVacancy = action.payload;
    },
  },
});

export const { updateFavoritesVacancy } = vacancySlice.actions;

export default vacancySlice.reducer;
