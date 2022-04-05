import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./One.css";
import { motion } from "framer-motion";
import Content from "./Content";
import "./Cards.css";
import Booking from "./Booking";
import Feedback from "./Feedback";

function Activities() {
  let passage =
    "While worry and anxiety are nothing new, unique shifts in technology and the ways we interact with and relate to the world around us have had a psychological impact. You may have found it difficult to maintain meaningful connections with the people in your life. Or maybe you’re beginning to think it’s impossible to juggle all your responsibilities at once. Add concerns like these to the general sense of uneasiness that comes with living in these uncertain times, and it becomes easy to feel overwhelmed. Establishing a routine that supports your psychological well-being can make all the difference in the world. Discover some straightforward ways to put yourself first as we explore five mental health activities for adults, and take charge of your personal wellness.";
  let [Activities_, setActivities_] = useState();
  let [charge, setCharge] = useState(0);
  let [active_id, setActive_id] = useState();
  let [booked, setBooked] = useState();
  let [feedback_id, setFeedback_id] = useState();
  let [width, setWidth] = useState(0);
  let [trigger, setTrigger] = useState(false);
  let [feedback_trigger, setFeedback_trigger] = useState(false);
  let carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 460);
    axios
      .get("http://localhost:5000/api/activities/find", {
        headers: {
          "content-type": "text/json",
        },
      })
      .then((res) => {
        setActivities_(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="counselling__container">
      <section className="wave">
        <Content title={"Activity"} passage={passage} />
      </section>
      <motion.section ref={carousel} className="card__craousel">
        <motion.section
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="card__innerCraousel"
        >
          {Activities_ &&
            Activities_.map((activity) => {
              return (
                  <motion.section
                    key={activity._id}
                    className={trigger || feedback_trigger?"card__active":"card__container "}
                  >
                    <motion.div className="card__imgBx">
                      <img src={activity.image} alt="" />
                    </motion.div>
                    <motion.div className="card__content">
                      <h2>{activity.title}</h2>
                      <div className="card__location">
                        <i className="fa fa-map-marker fa-lg"></i>
                        {activity.location}
                      </div>
                      <div className="card__phone">
                        <i className="fa fa-phone fa-lg"></i>
                        {activity.contact}
                      </div>
                      <div className="card__rating">
                      {Array(Number(activity.rating))
                        .fill()
                        .map((_, i) => {
                          return <p key={activity._id + i}>&#11088;</p>;
                        })}
                    </div>
                      <div className="card__price">
                        <i className="fa fa-inr" aria-hidden="true"></i>
                        {activity.charge}
                      </div>
                      <div>
                        <a href="#payrole" className="card__button">
                          <button
                            onClick={() => {
                              setTrigger(!trigger);
                              setFeedback_trigger(false);
                              setActive_id(activity._id);
                              setBooked(activity.title)
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
                              setFeedback_id(activity._id);
                              setBooked(activity.title);
                              setCharge(activity.charge);
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
      {trigger && (
        <Booking
          id="payroll"
          close={setTrigger}
          trigger={trigger}
          data_id={active_id}
          booked={booked}
          charge={charge}
        />
      )}
      {feedback_trigger && (
        <Feedback
          id="feedback"
          feedback_close={setFeedback_trigger}
          feedback_trigger={feedback_trigger}
          feedback_id={feedback_id}
          booked={booked}
        />
      )}
    </div>
  );
}

export default Activities;
