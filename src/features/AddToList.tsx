import React,{useState} from "react";
import Box from '@mui/material/Box';
import { useAppDispatch } from '../app/hooks';
import {ListActions} from './ListSlice';
import {Information} from '../models/information';
 
import FormAdd from './FormAdd';


 
export default function AddToList(){
    const dispatch = useAppDispatch();
    const [input,setInput] = useState<Information>();
    const initalValues: Information = {
        name: '',
        age: 0,
        url: 0,
        note:"",
        ...input,
    } as Information;
 

    const handleFormSubmit = async (values: Information) => {
        dispatch(ListActions.addInformation(values));
    };
    return(
        <Box sx={{display: "flex",justifyContent: "center"}}>
            
            <FormAdd initalValues={initalValues} onSubmit={handleFormSubmit} />
        </Box>
    )
}

 