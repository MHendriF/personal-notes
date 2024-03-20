import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './slices/noteSlice';

const store = configureStore({
    reducer: { notes: noteReducer },
});
console.log('onCreate store: ', store.getState());

store.subscribe(() => {
    console.log('onChange store: ', store.getState());
});

export default store;
