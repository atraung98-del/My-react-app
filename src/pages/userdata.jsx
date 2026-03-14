import {useState,useEffect} from "react";

export default function Userdata(){

        
        const [user,setUser]=useState([]);

        useEffect(()=>{


            async function fetchUsers(){
                
                
                const res=await fetch("http://localhost:5000/users");
                const data=await res.json();
                setUser(data)

            }
            fetchUsers();
        },[]);

        return(

            <div>
      {
        user.map(users=>(
            <p key={users.id}>
                {users.id}.
                {users.name}/
                {users.status}/
                {users.location}
            </p>
        )
        )
      }
    </div>
        )
}