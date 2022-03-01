import React from "react";
import {Information} from '../models/information';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../app/hooks';
import {ListActions} from './ListSlice';


export interface ListProps {
    people: Information[];
}


export default function List({people}:ListProps){
    const dispatch = useAppDispatch();
    const handleDelete = async (values: Information) => {
        dispatch(ListActions.deleteInformation(values));
    };
    return(
        <div>
            {
                people.map((person)=>{
                    return(
                    <li className="List">
                        <div className = "List-header">
                            <img className="List-img" src={person.url}/>
                            <h2>{person.name}</h2>
                        </div>
                        <p>{person.age} years old</p>
                        <p className="List-note">{person.note}</p>
                        <Button onClick={()=>handleDelete(person)}>Delete</Button>
                    </li>
                    )
                })
            }
             
        </div>
    )
}

