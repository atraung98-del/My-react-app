import {useState,useEffect} from "react";

export default function Userdata(){

        
        const [user,setUser]=useState(null);

        useEffect(()=>{


            async function fetchUsers(){
                
                
                const res=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=5c686168177dac998fb196671fa83748");
                const data=await res.json();
                setUser(data)

            }
            fetchUsers();
        },[]);

        return(

            <div>
     {
        user && (
            <p>
                {user.name},{user.main}
            </p>
        )
     }
    </div>
        )
}