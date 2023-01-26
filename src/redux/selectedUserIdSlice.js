import { createSlice } from '@reduxjs/toolkit';

const selectedUserIdSlice = createSlice({
    name: 'selectedUserId',
    initialState: null,
    reducers: {
        setSelectedUserId: (state, action) => {
            return {...state, selectedUserId: action.payload}
        },
    },
});

export const { setSelectedUserId } = selectedUserIdSlice.actions;

export default selectedUserIdSlice.reducer;
