import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/messages';

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  messageList: [],
  status: 'idle',
  error: null,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMessages.fulfilled, (state, action) => {
        // Assuming that the action.payload.data contains the fetched message data
        const newMessage = {
          id: action.payload.data.id,
          text: action.payload.data.text,
          createdAt: action.payload.data.created_at,
          updatedAt: action.payload.data.updated_at,
        };

        return {
          ...state,
          messageList: [...state.messageList, newMessage],
          status: 'succeeded',
        };
      })
      .addCase(fetchMessages.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchMessages.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }));
  },
});

export default messageSlice.reducer;
