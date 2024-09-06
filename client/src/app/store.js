// store.js
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';

import authReducer from './reducers/AuthReducer';

// Create the logger
const logger = createLogger({
  duration: true, // Print the duration of each action
  colors: {
   title: () => '#139BFE',
   prevState: () => '#9E9E9E',
   action: () => '#149945',
   nextState: () => '#A47104',
  },
});

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage,

  // Optionally, you can blacklist specific reducers you don't want to persist
  // blacklist: ['someReducer']
};

// Combine all your reducers
const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredActionPaths: ['payload.headers'],
        ignoredPaths: ['items.dates'],
      },
    }).concat(logger),
  // Utiliser une vérification directe de l'environnement
  devTools: import.meta.env.MODE !== 'production',
});

// Create the persistor
export const persistor = persistStore(store);
