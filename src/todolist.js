import { useEffect, useState } from "react";
import ItemList from "./ItemList";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faCoffee } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




const ToDoList = () => {

    const [items,setItems] = useState([])
    const [newItem, setNewItem] = useState("")
    

    useEffect( ()=>{
        fetch('https://dummyjson.com/todos')
        .then(resp => {
            if(! resp.ok)
                throw Error("Failed to Fetch Data")
             return resp.json()
        })
        .then(data =>{
            setItems(data.todos)
        })                                                                
        .catch(err => console.log(err))
    },[])


    

    // The problem here is the ID doesnt change
    const addItem =(newItem) =>{
        if (!newItem) return;
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              todo: newItem,
              completed: false,
              userId: 2,
            })
          })
          .then(res =>{ 
            return res.json()
         })
          .then(data =>{
            setNewItem("")
            setItems([...items,data])
        })
    }


    return (
      
          <div>
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faCoffee} />

            
                <div className="center">
                     <h1 className='header'>My To Do List</h1>
                </div>

                <div className='add-btn'>
                    <button onClick={()=>addItem(newItem)}>Add item</button>
                <input className="add-input" type="text" value={newItem} onChange={(event) => setNewItem(event.target.value)}/>
                </div>
                {/* {items && console.log(items)} */}
            {items && <ItemList items={items} setItems={setItems}/> }
               
            </div>      
      )

}
export default ToDoList;



    // const {data, Error} = useFetch("https://dummyjson.com/todos")

    // useEffect( ()=>{
    //     fetch('https://dummyjson.com/todos')
    //     .then(resp => {
    //         if(! resp.ok)
    //             throw Error("Failed to Fetch Data")
    //          return resp.json()
    //     })
    //     .then(data =>{
    //         setItems(data.todos)
    //     })                                                                
    //     .catch(err => console.log(err))
    // },[])