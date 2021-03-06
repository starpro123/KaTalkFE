import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import inputReducer from '../slices';

export const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
