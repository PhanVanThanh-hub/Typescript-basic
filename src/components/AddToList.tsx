import React,{useState} from "react";
import { Input,Stack } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {IState as Props} from '../App';

interface IProps{
    people:Props["people"]
    setPeople :React.Dispatch<React.SetStateAction<Props["people"]>>

}
 
export default function AddToList({people,setPeople}:IProps){

    const [input , setInput] = useState({
        name:"",
        age:"",
        note:"",
        img:"",
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
         
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
 
    const handClick =():void =>{
        if(
            !input.name ||
            !input.age ||
            !input.img 
        ){
            return
        }

        setPeople([
            ...people,
            {
                name:input.name,
                age:parseInt(input.age),
                url:input.img,
                note:input.note

            }
        ])
    }

    return(
        <div>
            AddToList Components
            <Stack spacing={3} 
                sx={{alignItems:"center",
                    '& .chakra-input':{
                        borderRadius:"12px",height:"30px"
                    },}}> 
                <Input variant='outline' placeholder='Name' size='lg' width='30%' value = {input.name} name="name" onChange={handleChange}/>
                <Input variant='outline' placeholder='Image' size='lg' width='30%' value = {input.img} name="img" onChange={handleChange}   />
                <Input variant='outline' placeholder='Age' size='lg' width='30%'  value = {input.age} name="age" onChange={handleChange} />
                <Textarea placeholder='Note' size='lg' sx={{height:"120px",width:"30%",borderRadius:"12px"}} name="note" value = {input.note} onChange={handleChange}/>
                <Button colorScheme='teal' variant='outline' sx={{width:"30%",height: "30px"}} onClick={handClick}>
                    Button
                </Button>
            </Stack>
        </div>
    )
}

 