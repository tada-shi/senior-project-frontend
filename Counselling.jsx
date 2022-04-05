import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Content from "./Content";
import { motion } from "framer-motion";
import "./One.css";
import "./Cards.css";
import Booking from "./Booking";
import Feedback from "./Feedback";

function Counselling() {
  let passage =
    "Psychotherapy, also called talk therapy, involves talking about your condition and related issues with a mental health professional. During psychotherapy, you learn about your condition and your moods, feelings, thoughts and behavior. With the insights and knowledge you gain, you can learn coping and stress management skills. There are many types of psychotherapy, each with its own approach to improving your mental well-being. Psychotherapy often can be successfully completed in a few months, but in some cases, long-term treatment may be needed. It can take place one-on-one, in a group or with family members. When choosing a therapist, you should feel comfortable and be confident that he or she is capable of listening and hearing what you have to say. Also, it's important that your therapist understands the life journey that has helped shape who you are and how you live in the world.";
  let [Counsellors, setCounsellors] = useState();
  let [charge, setCharge] = useState(0);
  let [width, setWidth] = useState(0);
  let [trigger, setTrigger] = useState(false);
  let [feedback_trigger, setFeedback_trigger] = useState(false);
  let [active_id, setActive_id] = useState();
  let [booked, setBooked] = useState();
  let [feedback_id, setFeedback_id] = useState();
  let carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 500);
    axios
      .get("http://localhost:5000/api/counsellors/find", {
        headers: {
          "content-type": "text/json",
        },
      })
      .then((res) => {
        setCounsellors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="counselling__container">
      <section className="wave">
        <Content title={"Counselling"} passage={passage} />
      </section>
      <motion.section ref={carousel} className="card__craousel">
        <motion.section
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="card__innerCraousel"
        >
          {Counsellors &&
            Counsellors.map((counsellor, index) => {
              return (
                <motion.section
                  key={counsellor._id}
                  className={trigger || feedback_trigger?"card__active":"card__container "}
                >
                  <motion.div className="card__imgBx">
                    <img src={counsellor.image} alt="" />
                  </motion.div>
                  <motion.div className="card__content">
                    <h3>{counsellor.name}</h3>
                    <div className="card__phone">
                      <i className="fa fa-phone fa-lg"></i>
                      {counsellor.contact}
                    </div>
                    <p>{counsellor.quote}</p>
                    <div className="card__rating">
                      {Array(Number(counsellor.description))
                        .fill()
                        .map((_, i) => {
                          return <p key={counsellor._id + i}>&#11088;</p>;
                        })}
                    </div>
                    <div className="card__price">
                      <i className="fa fa-inr" aria-hidden="true"></i>
                      {counsellor.charge}
                    </div>
                    <div>
                      <a href="#payroll" className="card__button">
                        <button
                          onClick={() => {
                            setTrigger(!trigger);
                            setFeedback_trigger(false);
                            setActive_id(counsellor._id);
                            setBooked(counsellor.name)
                            setCharge(counsellor.charge)
                          }}
                          className="btn"
                        >
                          Book Now
                        </button>
                      </a>
                      <a href="#feedback" className="card__button">
                        <button
                          onClick={() => {
                            setTrigger(false);
                            setFeedback_trigger(!feedback_trigger);
                            setFeedback_id(counsellor._id);
                            setBooked(counsellor.name)

                          }}
                          className="btn"
                        >
                          Feedback
                        </button>
                      </a>
                    </div>
                  </motion.div>
                </motion.section>
              );
            })}
        </motion.section>
      </motion.section>
      {trigger && 
        <Booking 
          id="payroll" 
          close={setTrigger} 
          trigger={trigger} 
          data_id={active_id}
          booked={booked}
          charge={charge}
        />
      }
      {feedback_trigger && (
        <Feedback
          id="feedback"
          feedback_close={setFeedback_trigger}
          feedback_trigger={feedback_trigger}
          feedback_id={feedback_id}
        />
      )}
    </div>
  );
}

export default Counselling;
