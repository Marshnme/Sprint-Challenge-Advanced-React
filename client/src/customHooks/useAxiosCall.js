import React,{useState,useEffect} from 'react';
import axios from "axios"

export function useAxiosCall(search){

    const [data,setData] = useState([]);

    useEffect(() => {
        axios
    .get(search)
    .then(res => {
        console.log("axios res", res)
        setData(res.data)
    })
    },[search])
    return data;
    
}