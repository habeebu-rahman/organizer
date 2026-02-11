import { useEffect, useState } from "react"


export const useLocalStorage = (key,initialvalue)=>{
    const [value, setValue] = useState(()=>{
        const storedValue=localStorage.getItem(key)
        return storedValue?JSON.parse(storedValue):initialvalue;
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value,setValue]
}