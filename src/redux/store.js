import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contacts';
import { authReducer } from './auth';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);



// const contactsPersistConfig = {
  //   key: 'contacts',
  //   storage,
  //   blacklist: ['filter'],
  // };
  
  // const persistor = persistStore(store);
  
  // const exportedObject = {store, persistor};


// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });

// const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const store = createStore(rootReducer, composeWithDevTools());
// const rootReducer = combineReducers({
  //   contacts: contactReducer,
// });


