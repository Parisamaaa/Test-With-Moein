import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [error,setError]=useState(null);


    useEffect(
    fetch(url)
    .then(resp => {
        if(! resp.ok)
            throw Error("Failed to Fetch Data")
         return resp.json()
    })
    .then(data =>{
        setData(data.todos)
    })                                                                
    .catch(err => console.log(err))


,[url])

    return {data,error};
}
 
export default useFetch;