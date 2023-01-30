import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './features/userSlices'
import storeReducer from './features/storeSlices'
import shopingReducer from './features/shopingcartSlices'
import dataUserReducer from "./features/dataUserSlices";
const reducer  = combineReducers({
    User : userReducer,
    Store: storeReducer,
    ShopingCart: shopingReducer,
    DataUser: dataUserReducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export default store