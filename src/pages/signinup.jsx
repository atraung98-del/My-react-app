
import {useState} from "react";
import {Link} from "react-router-dom";
import Userdata from "./userdata.jsx";
import './index.css';
import Gallery from  "./header";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
            </div>
            
        {show && (
        <div id="formstyle" style={{display:"block"}}>
            
           <p>

            Wildlife refers to undomesticated animals and uncultivated plant species which can exist in their natural habitat, but has come to include all organisms that grow or live wild in an area without being introduced by humans.[1] Wildlife was also synonymous to game, birds and mammals hunted for sport. Wildlife can be found in all ecosystems. Deserts, plains, grasslands, woodlands, forests, and other areas including the most developed urban areas, all have distinct forms of wildlife. While the term in popular culture usually refers to animals that are untouched by human behavior, most scientists agree that much wildlife is affected by it.[2]

Humans have historically tended to separate civilization from wildlife in a number of ways, including the legal, social and moral senses. Some animals, however, have adapted to suburban environments. This includes urban wildlife such as feral cats, dogs, mice, and rats. Some religions declare certain animals to be sacred, and in modern times, concern for the natural environment has provoked activists to protest against the exploitation of wildlife for human benefit or entertainment.

Different countries have various legal definitions.

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