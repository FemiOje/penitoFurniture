import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../features/cart/cartSlice";
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export const persistor = persistStore(store);