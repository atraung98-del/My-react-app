import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from "react";
import IconAvatars from './avataricon';
import './index.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { createContext } from "react";
// import Userdata from "./userdata.jsx";
import App from '../App.jsx';
import { ThemeContext } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
const AppContext=createContext();
 function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2} id="profilephoto">
      <Avatar sx={{bgcolor:deepPurple[500]}}>AT</Avatar>
      
    </Stack>
  );
}

const Client={
  name:'Aung Thura',
  imgUrl:'https://cdn-icons-png.flaticon.com/512/9203/9203764.png',
  imagesize:90,
  age:27,
  time:new Date().getHours(),
};
   
function UpdateTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());   // update state → triggers re-render
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const hour = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");
  const second = time.getSeconds().toString().padStart(2, "0");

  return (
    <div>
      {
          time?(
            <div>
          <p>
     <AccessTimeOutlinedIcon fontSize='small'/> {hour}:{minute}:{second}
    </p>
    </div>)
    :(
      
    <p>
     Getting Time....
    </p>
  
    )
      }
    
    </div>
  );
}


// location //
function Location(){
 

const [locate,setLocate]=useState(null);
const [address,setAddress]=useState("");

useEffect(

      ()=>{
        navigator.geolocation.getCurrentPosition(async (position)=>{
          const lati=position.coords.latitude;
          const long=position.coords.longitude;
          setLocate({lati,long});
          
          const res= await fetch(
  `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lati}&lon=${long}`
 )
         
          const data=await res.json()
          const addressString=`${data.address.city|| ""} ${data.address.town || ""} ${data.address.country||""}`
          setAddress(addressString);
        });
      },[]);

        return (
          <div>
           
            {
              locate?(
                <div>
                  
                  <p> <LocationPinIcon fontSize='small'/>{address}</p>
                  </div>
              ):(
                <p>
                  Getting Location....
                </p>
              )
            }
            
          
          </div>
        )
      }
// location//

function Profilealpha(){
    return(
        <img src="https://th.bing.com/th/id/OIP.5gxzxwG_Jr862vJQ3uJDdgHaE8?w=291&h=193&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" className='imgs' />
    )
}
function Profilest(){
    return(
        <img src="https://th.bing.com/th/id/OIP.DswtjaT2t9a2OubA2HpJzAHaFW?w=251&h=182&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" className='imgs'/>
    )
}
function Profilend(){
    return(
        <img src="https://th.bing.com/th/id/OIP.f4rgaDDBLUiX_dveT-nBuQHaE8?w=283&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" className="imgs"/>
    );
}
function Profile(){
    return(
        <img src="https://newsd.in/wp-content/uploads/2020/03/wildlife-1.jpg" className='imgs'
        alt="wild life"/>
    );
}

 export default function Gallery(){

   
    const navigate=useNavigate();
    return(
        
        <div id='navigation'>
            <ul>
                <li>
                     <a href="#">My-Home</a>  
                </li>
                <li>
                     <a href="#">About</a>
                </li>
                <li>
                     <a href="#">The-Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                 <button className='signup'>Log out</button>
                   
                </li>
               
                   <div id="m-p">
        <LetterAvatars/>
        
            <h2 id="username">{Client.name}</h2>
            
            <div>
              <Location/>
              
                <UpdateTime/>
              
              
              
            </div>
            
            </div>
                  
              
            </ul>
            {/* <div id="m-p">
        <img src={Client.imgUrl} id='profilephoto'/>
            <h2>{Client.name}</h2>
            <p>{TheDate}</p>
            </div> */}
        <div id='paragraph'>
        <h2 className='welcome'>Welcome from my website</h2>
        <h4>What is Wild Life?</h4>
        <p>Humans have historically tended to separate civilization from wildlife in a number of ways, including the legal, social and moral senses. Some animals, 
            however, have adapted to suburban environments. This includes urban wildlife such as feral cats, dogs, mice, and rats. 
            Some religions declare certain animals to be sacred, and in modern times, concern for the natural environment has provoked activists to protest against the exploitation of wildlife for human benefit or entertainment.
            The annual international trade may be worth billions of dollars and affects hundreds of millions of individual specimens. Global wildlife populations have decreased significantly, by 68% since 1970, as a result of human activity, with identified causes including overconsumption, population growth, and intensive farming. 
            This is cited as evidence that humans have unleashed a sixth mass extinction event.</p>
          </div>
         <div id="btn">
           <button onClick={()=>navigate("/signinup")}>More Info</button>
          <button onClick={()=>navigate("/Signup")} id="signup">Sign in/up</button>
         <button  onClick={()=>navigate("/Location")}> <LocationPinIcon fontSize='small'/>see location</button>
          </div>
        <div className="wildlifes">
        <Profile />
        <Profilealpha />
        <Profilest/>
        <Profilend/>
        </div>
        <div className="wildlifes">
        <Profile />
        <Profilealpha />
        <Profilest/>
        <Profilend/>
    
        </div>
         {/* <Userdata/> */}
        </div>
    )
}

