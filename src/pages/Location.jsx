import {useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import "./index.css";
export default function Location(){
 

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
            <Link to='/'id="localhome">Home</Link>
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
  
