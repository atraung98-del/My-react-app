import {useRef,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";

import './about.css';
function Icon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" >
      <path
       d="M19 12H5M11 5l-7 7 7 7"
        stroke="black"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default function FormData(){
    const inputRef1=useRef();
    const inputRef2=useRef();
    const inputRef3=useRef();
    const inputRef4=useRef();
    const [data,setData]=useState([]);
    const UserData=()=>{
        const firstname=inputRef1.current.value;
        const lastname=inputRef2.current.value;
        const passwordcre=inputRef3.current.value;
        const passwordcom=inputRef4.current.value;
        setData([ firstname,lastname,passwordcre,passwordcom,]);
    }
    const catchdata=()=>{
        localStorage.setItem('userdata',JSON.stringify({data}));
        alert('Congradulation! You create your account');
    }
  
    return(
        
       <div class="login-box">
        <div id="iconandhome">
        <Icon  id="lefticon"/>
        <Link to="/" id="homesession">Home</Link>
        </div>
    <h2>Sign up</h2>
    <form id="myuser" onSubmit={(e)=>{
        e.preventDefault();
        UserData();
        catchdata();
        
        e.currentTarget.reset();
    }}>
      <label>First Name</label>
      <input type="text" placeholder="Enter first name" id="f-name" ref={inputRef1} required />
      <label>Last Name</label>
      <input type="text" placeholder="Enter last name"id="l-name" ref={inputRef2}required/>
      <label>Create password</label>
      <input type="password" placeholder="Create password" id="p-cr" ref={inputRef3} required/>
      <label>Comfirm password</label>
      <input type="password" placeholder="Comfirm password" id="p-co" ref={inputRef4} required/>
      <button id="submitBtn" type="submit" onClick={UserData}>Login</button>
    </form>
    <div class="links">
      <a href="#">Forgot password?</a>
      <a href="#">Create account</a>
    </div>
    
  </div>
    )
}