import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EdditeItem = () => {

    const { id } = useParams()

    useEffect(
    ()=>{
      console.log("hi")
    },[id])


 

  



    return ( 
        <div>
            <p>Item is edditing - {id}</p>
        </div>
     );
}
 
export default EdditeItem;