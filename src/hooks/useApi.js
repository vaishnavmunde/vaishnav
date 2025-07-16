import { useEffect } from "react";
import { useState } from "react";



export const useApi = (url)=>{

     const[products,setProducts] = useState([]);
     const[loading,setLoading]= useState(true);

          useEffect(()=>{
        fetch(url)
            .then(data=>data.json())
            .then(res=>setProducts(res))
            .finally(()=>{
                setLoading(false);
            });
    },[url])
   
   
   
    return {products,loading};
}

