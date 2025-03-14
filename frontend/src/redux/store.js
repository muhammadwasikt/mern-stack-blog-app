import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from './reducers/userSlice.js'
import BlogReducer from './reducers/blogSlice.js'
import WeatherReducer from './reducers/weatherSlice.js'



const persistConfig = {
    key: "root",
    storage,
};

const combineReducer = combineReducers({
    user: UserReducer,
    blog: BlogReducer,
    weather: WeatherReducer,
})

const persistedReducer = persistReducer(persistConfig, combineReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
  });


export const persistor = persistStore(store);