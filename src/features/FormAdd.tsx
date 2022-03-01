import React,{useState} from 'react';
import Box from '@mui/material/Box';
import {InputField} from '../components/Formfiled/InputField';
import {Information} from '../models/information';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button  } from '@chakra-ui/react'
 
import * as yup from 'yup';
export interface InformationProps{
    initalValues?:Information;
    onSubmit:(formValues: Information) => void;
}

export default function FormAdd({initalValues,onSubmit}:InformationProps){
    const [error, setError] = useState<string>();
    const schema = yup
        .object({
            name: yup
                .string()
                .required('Please enter name'),
            age: yup
                .number()
                .positive('Please enter position number')
                .integer('Please enter interger number')
                .max(60, 'Min is 60 age')
                .required('Please enter age')
                .typeError('Please enter a vailable number'),
            url:yup
                .string()
                .required("Please enter URL image"),
        })
        .required();

    const { control, handleSubmit, formState: {isSubmitting} } = useForm<Information>({
        defaultValues: initalValues,
        resolver: yupResolver(schema),
    });
    const handleFormSubmit = async (formValues: Information) => {
    
        try {
       
            setError('')
            await onSubmit?.(formValues);
        } catch (error: any) {
            setError(error.message)
        }
    };
  
    return(
        <Box sx={{width:"40%"}}>
            AddToList Components
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <InputField name="name" control={control} label="Full Name" />
                <InputField name="age" control={control} label="Age" />
                <InputField name="url" control={control} label="Image" />
                <InputField name="note" control={control} label="Note" />
                <Button type="submit" variant="contained" color="primary"  >
                    Add
                </Button>
            </form>

        </Box>
    )
}