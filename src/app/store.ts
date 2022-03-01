import { configureStore,combineReducers } from '@reduxjs/toolkit';
import ListReducer from '../features/ListSlice'; 
 
const rootReducer =  combineReducers({
    list :ListReducer
})

export const store = configureStore({
    reducer: rootReducer,

});

 
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

