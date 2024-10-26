import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import EdditeItem from "./edditItem";



const ItemList = ({items,setItems}) => {

    useEffect( ()=>{
        // console.log(items);
    },[items])

    const handleToggleComplete = (id) => {
        setItems( prevItems =>
            prevItems.map( item =>{
                if (item.id === id)
                    return { ...item, completed: !item.completed }
                return item;
            })

        )
    }

    const handleDelete=(id)=>{
        setItems(i => i.filter((element, index)=> element.id !==id) )
    }

    const handleEddit=()=>{
        console.log("hi")
    }


    // const handleDelete=(id)=>{
    //     fetch('https://dummyjson.com/todos/1', {
    //         method: 'DELETE',
    //       })
    //       .then(res => {
    //         console.log(res)
    //         return res.json()
    // })
                
    //       .then(data=>console.log(data))
    // }


    return (  

        <div>
            {items.sort((a, b) => a.completed - b.completed).map(task => (
            
                <label className='items' key={task.id}>
                    <p className={task.completed ? "isDone" : ""}>
                        {task.todo}
                        <input type="checkbox"  checked={task.completed} onChange={()=> handleToggleComplete(task.id)}  />
                        <span className="checkmark"></span>
     
                            <button className="delete-btn" onClick={()=>handleDelete(task.id)}>Delete </button>
                            {/* <button className="eddit-btn" onClick={()=>handleDelete(task.id)}>Eddit </button> */}
                            <NavLink to={`/eddit/${task.id}`} >eddit</NavLink>
                        
                    </p>
                </label>
             ))}


        </div>

    );
}
 
export default ItemList;