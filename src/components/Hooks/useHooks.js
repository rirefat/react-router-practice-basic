import { useEffect, useState } from "react"

const useHooks=()=>{
    const [info, setInfo]=useState([]);
    useEffect(()=>{
        fetch('publicData.json')
            .then(res=>res.json())
            .then(data=>setInfo(data))
    },[])
    return[info, setInfo];
}
export default useHooks;