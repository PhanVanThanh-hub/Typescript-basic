import React  from 'react';
import './App.css';
import List from './features/List';
import AddToList from './features/AddToList';
import {selectList} from './features/ListSlice';
import {useAppSelector } from './app/hooks';
 
 

function App() {
  const people = useAppSelector(selectList);
 
 
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList />
    </div>
  );
}

export default App;
