import { RootState } from 'store';

export const authSelector = (state: RootState) => state.persistedReducer.auth;
export const vacancySelector = (state: RootState) => state.persistedReducer.vacancy;
export const menuSelector = (state: RootState) => state.menuReducer;
