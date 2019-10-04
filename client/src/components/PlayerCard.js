import React from 'react';
import {useAxiosCall} from "../customHooks/useAxiosCall";

    function reverseString(str){
        // let splitString = str.split("");
        // let reverseArray = splitString.reverse();
        // let joinArray = reverseArray.join("");
        return str.split("").reverse().join("");
}

    const PlayerCard = props =>{
        const[name,setName] = useAxiosCall("http://localhost:5000/api/players");
        console.log("dataaa",name);
        return (
            <>
            <h1>Welcome to a list of sports people or something</h1>
                {props.player.map(person => (
                    <div key={person.id}>
                        <h2>{name.name}</h2>
                        <p>{person.country}</p>
                        <button onClick={()=> setName(reverseString(name.name))}>reverse name</button>
                    </div>
                ))}


            </>
        )
    }


    export default PlayerCard;