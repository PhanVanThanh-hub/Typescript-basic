import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Information} from '../models/information';
import {RootState} from '../app/store';

interface InviteeState {
    list:Information[]
}

const initialState: InviteeState = {
    list: []
}

const ListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addInformation(state , action:PayloadAction<Information>){
            state.list.push(action.payload)
            
        },
        deleteInformation(state,action : PayloadAction<Information>){
            const newItem = action.payload;
        
            const index = state.list.findIndex(item => (item.name === newItem.name && item.url === newItem.url && item.age === item.age));
            state.list.splice(index, 1);
        }
    },
})


//Actions
export const ListActions = ListSlice.actions;

//Selectors
export const selectList = (state: RootState) => state.list.list;
//reducer
const ListReducer = ListSlice.reducer
export default ListReducer