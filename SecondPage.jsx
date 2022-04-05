import React, { useState, useEffect} from "react";
import Content from "./Content";
import axios from 'axios';
import "./SecondPage.css";
export default function Second__page() {
  let passage = "Mental illnesses are health conditions involving changes in emotion, thinking or behavior (or a combination of these). Mental illnesses are associated with distress and/or problems functioning in social, work or family activities. Mental health conditions are far more common than you think, mainly because people don’t like to, or are scared to, talk about them. A mental health condition isn’t the result of one event. Research suggests multiple, linking causes. Genetics, environment and lifestyle influence whether someone develops a mental health condition. A stressful job or home life makes some people more susceptible, as do traumatic life events. Biochemical processes and circuits and basic brain structure may play a role, too. None of this means that you’re broken or that you, or your family, did something “wrong.” Mental illness is no one’s fault. And for many people, recovery — including meaningful roles in social life, school and work — is possible, especially when you start treatment early and play a strong role in your own recovery process."
  let [ShowText, setShowText] = useState();
  let [Content_, setContent_] = useState([]);
  useEffect(() => 
        {
            axios.get("http://localhost:5000/api/Mentals/find",{
            headers: {
            'content-type': 'text/json'
            }
            })
            .then(res=>{
              setContent_(res.data);
                
            }).catch(err=>console.log(err));
        }, []);
  return (
    <div className="container">
      <div className="box">
          <div className="content">
            <Content title={'MENTAL HEALTH'} passage={passage}/>
            <div className="topic__detail__nav">
              <a  href="#Causes" onClick={() => setShowText('causes')}>
                <h1 className="home__title">Causes</h1>
              </a>
              <a href="#Types" onClick={() => setShowText('types')}>
                <h1 className="home__title">types</h1>
              </a>
              <a href="#Treatments" onClick={() => setShowText('treatments')}>
                <h1 className="home__title">treatments</h1>
              </a>
            </div>
            {ShowText && <div className="topic__info">
              <div className="home__info">
                {ShowText === "causes" && <Content passage={Content_[1].Mental}/>}
                {ShowText === "types" && <Content passage={Content_[2].Mental}/>}
                {ShowText === "treatments" && <Content passage={Content_[0].Mental}/>}
              </div>
            </div>
            }
          </div>
      </div>
    </div>
  );
}
