import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './messages';
import { getMessages } from './messages';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
  }
});

export default store;