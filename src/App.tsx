import React ,{useState} from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
export interface IState{
  people:{
    name:string
    age:number
    url:string 
    note?:string 
  }[] 
}

function App() {

  const [people , setPeople] =useState<IState["people"]>([
    {
      name:"Messi",
      age:32,
      url:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Lionel_Messi_in_2018.jpg",
      note:"dsadas"
    }
  ])

   

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
