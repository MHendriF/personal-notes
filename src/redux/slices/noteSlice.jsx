import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        data: JSON.parse(localStorage.getItem('notes')) || [],
    },
    reducers: {
        addNote: (state, action) => {
            state.data.push(action.payload);
        },
    },
});

export const { addNote } = noteSlice.actions;
export default noteSlice.reducer;
