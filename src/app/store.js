import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { todoReducer } from "../features/todoSlice";


const rootReducer = combineReducers({ todos: todoReducer });


const persistConfig = {
    key: rootReducer,
    storage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig, todoReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddlewar) => getDefaultMiddlewar({
        serializableCheck: false,
    })
});

export const persistor = persistStore(store)