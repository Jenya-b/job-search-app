import { RootState } from 'store';

export const authSelector = (state: RootState) => state.persistedReducer.auth;
export const vacancySelector = (state: RootState) => state.persistedReducer.vacancy;
