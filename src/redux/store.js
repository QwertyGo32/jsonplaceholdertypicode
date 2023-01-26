import {configureStore} from "@reduxjs/toolkit";
import selectedUserId from './selectedUserIdSlice';
import usersSlice from './usersSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice,
        selectedUserId: selectedUserId
    },
});