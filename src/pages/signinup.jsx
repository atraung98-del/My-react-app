
import {useState} from "react";
import {Link} from "react-router-dom";
import Userdata from "./userdata.jsx";
import './index.css';
import Gallery from  "./header";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Theweather(){
    return(
        
            <img src="https://www.tripsavvy.com/thmb/g3tZF8OtQrECLUNlkzTBjKsrcxw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-619298606-0d01c26ec5024e2fa863cb97b2b70668.jpg" id="tokyo"/>
        
    )
}
export default function Signup(){
   
    const [show,setShow]=useState(false);
    const handleClick=()=>{
        setShow(true);
    };
    return(
        <div id="signinup">
            <div id="twobtn">
             <Link to="/" id="signinupid">Home</Link>
            <button onClick={handleClick} id="aboutwl">About Wild Life

               <ArrowDropDownIcon/>
            </button>

            <Userdata/>
            <Theweather/>
            </div>
            
        {show && (
        <div id="formstyle" style={{display:"block"}}>
            
           <p>

           Weather Details

           </p>
           <h2>Trade</h2>
           <p>
            
            Wildlife trade refers to the exchange of products derived from non-domesticated animals or plants usually extracted from their natural environment or raised under controlled conditions. It can involve the trade of living or dead individuals, tissues such as skins, bones or meat, or other products. Legal wildlife trade is regulated by the United Nations' Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES), which currently has 184 member countries called Parties.[4] Illegal wildlife trade is widespread and constitutes one of the major illegal economic activities, comparable to the traffic of drugs and weapons.[5]

Wildlife trade is a serious conservation problem, has a negative effect on the viability of many wildlife populations and is one of the major threats to the survival of vertebrate species.[6] The illegal wildlife trade has been linked to the emergence and spread of new infectious diseases in humans, including emergent viruses.[7][8] Global initiatives like the United Nations Sustainable Development Goal 15 have a target to end the illegal supply of wildlife.[9]

Despite various regional legal definitions for "wildlife",[3] according to CITES, the annual international wildlife trade is likely worth billions of dollars and affects hundreds of millions of individual animals and plants.
           </p>
        </div>)}
        
        </div>
    )
}