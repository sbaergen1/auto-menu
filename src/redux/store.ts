import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import daysReducer from './features/days/daysSlice';

export const store = configureStore({
    reducer: {
        days: daysReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;