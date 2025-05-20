import { configureStore } from '@reduxjs/toolkit';
import expoReducer from './slices/expoSlices';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
    reducer: {
        todos: expoReducer
        // Add your reducers here
    }
});

export default store;