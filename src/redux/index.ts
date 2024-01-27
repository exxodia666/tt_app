import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postsReducer, commentsReducer} from './slices';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

export const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    combineReducers({
      posts: postsReducer,
      comments: commentsReducer,
    }),
  ),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
