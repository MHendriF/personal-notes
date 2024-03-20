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
        deleteNote: (state, action) => {
            state.data = state.data.filter((note) => note.id !== action.payload);
        },
        archiveNote: (state, action) => {
            const item = state.data.find((note) => note.id === action.payload);
            if (item) {
                item.archived = !item.archived;
                console.log('archived: ', item);
            } else {
                console.log('item not found');
            }
        },
    },
});

export const { addNote, deleteNote, archiveNote } = noteSlice.actions;
export default noteSlice.reducer;
