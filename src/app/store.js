import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer, // Ensure this is correctly set
  },
});

export default store;
