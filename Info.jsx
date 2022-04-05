import React, {useState, useEffect} from "react";
import "./Info.css";
import axios from 'axios';
import Content from "./Content";
function Info() {
  let [Infos, setInfos] = useState();
  useEffect(() => 
  {
      axios.get("http://localhost:5000/api/contents/find",{
      headers: {
      'content-type': 'text/json'
      }
      })
      .then(res=>{
        setInfos(res.data);
          
      }).catch(err=>console.log(err));
  }, []);
  return (
    <div className="info__container">
      {Infos && Infos.map(info => {
        return(
          <Content key={info._id} title={info.title} passage={info.content}/>
        )
      })}
    </div>
  );
}

export default Info;
