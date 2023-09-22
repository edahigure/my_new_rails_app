import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messages/messagesSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
export default store;
