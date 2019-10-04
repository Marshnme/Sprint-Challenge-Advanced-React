import React from 'react';
import {useAxiosCall} from "../customHooks/useAxiosCall";

    export function reverseString(str){
        // let splitString = str.split("");
        // let reverseArray = splitString.reverse();
        // let joinArray = reverseArray.join("");
        return str.split("").reverse().join("");
}

    const PlayerCard = props =>{
        const [data, setData] = useAxiosCall("http://localhost:5000/api/players");
        console.log("dataaa", data);


        return (
            <>
            <h1>Welcome to a list of sports people or something</h1>
                {props.player.map(person => (
                    <div key={person.id}>
                        <h2>{person.name}</h2>
                        <p>{person.country}</p>
                        <button>reverse name</button>
                    </div>
                ))}


            </>
        )
    }


    export default PlayerCard;