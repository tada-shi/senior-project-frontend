import React, { useState } from "react";
import "./Popup.css";
import axios from "axios";

function Feedback({ feedback_close, feedback_trigger, feedback_id, booked }) {
  let [success, setSuccess] = useState(false);
  let [rating, setRating] = useState(0);
  let [comment, setComment] = useState();
  let feedback__data = {
    feedback_id: feedback_id,
    booked: booked,
    rating: rating,
    comment: comment,
  };
  function function_feedback() {
    if(!rating){
      alert("We love your opinion. Please rate us.");
      feedback_close(false);
    }else {axios
      .post("http://localhost:5000/api/feedbacks/post", feedback__data)
      .then(res => setSuccess(true))
      .catch((err) => {
        alert("TRY LATER");
        feedback_close(false);
      });
    }
  }
  return { feedback_trigger } ? (
    <section className="rating__container">
      <div className="btn__close" onClick={() => feedback_close(false)}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      {success && 
        <div style={{color:"white", fontSize: "2rem"}}>
        Thank You!!!
    </div>}
      {!success && 
      <>
      <div className="rating__widget">
        <input type="radio" name="rate" id="rate-5" />
        <label
          htmlFor="rate-5"
          onClick={() => setRating(5)}
          className="fa fa-star fa-2x"
        ></label>
        <input type="radio" name="rate" id="rate-4" />
        <label
          htmlFor="rate-4"
          onClick={() => setRating(4)}
          className="fa fa-star fa-2x"
        ></label>
        <input type="radio" name="rate" id="rate-3" />
        <label
          htmlFor="rate-3"
          onClick={() => setRating(3)}
          className="fa fa-star fa-2x"
        ></label>
        <input type="radio" name="rate" id="rate-2" />
        <label
          htmlFor="rate-2"
          onClick={() => setRating(2)}
          className="fa fa-star fa-2x"
        ></label>
        <input type="radio" name="rate" id="rate-1" />
        <label
          htmlFor="rate-1"
          onClick={() => setRating(1)}
          className="fa fa-star fa-2x"
        ></label>
      </div>
      <form action="#">
        <br></br>
        <div className="textarea">
          <textarea
            value={comment}
            cols="30"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Describe your experience."
          ></textarea>
        </div>
        <div
        className="btn">
          <button onClick={function_feedback} type="submit">
            Post
          </button>
        </div>
      </form>
      </>
      }
    </section>
  ) : (
    ""
  );
}

export default Feedback;
