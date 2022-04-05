import React, { useState } from "react";
import "./Popup.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Booking({ close, trigger, data_id, booked, charge }) {
  let [success, setSuccess] = useState(false);
  let [error, setError] = useState("");
  let [Name_, setName_] = useState("");
  let [Email_, setEmail_] = useState("");
  let [Date, setDate] = useState("");
  let [Time, setTime] = useState("");
  let booking__data = {
    booking_id: data_id,
    booked: booked,
    name: Name_,
    email: Email_,
    date: Date,
    time: Time,
  };
  let payment_data = {booked, charge}
  function function_booking() {
    let regEx =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!Email_|| !Name_ || !Date || !Time) {
      alert("ERROR: ALL FIELDS ARE REQUIRED. Fill all the queries.");
      close(false);
    }else if(!regEx.test(Email_)){
      setError("Invalid Email Format");
    } else {
      axios
        .post("http://localhost:5000/api/bookings/post", booking__data)
        .then((res) => setSuccess(true))
        .catch((err) => {
          alert("TRY LATER");
          close(false);
        });
    }
  }
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:5000/api/checkout",
      { token, payment_data }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
  return { trigger } ? (
    <section className="booking__container">
      <div className="btn__close" onClick={() => close(false)}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      {success && 
        <div style={{color:"white", fontSize: "2rem"}}>
        Thank You!!!
    </div>
    }
    {!success && 
      <div className="booking__form">
      <div>
        <p>{booked}</p>
      </div>
      <div className="booking__name">
        <input
          onChange={(e) => {
            setName_(e.target.value);
          }}
          type="text"
          placeholder="Name"
          value={Name_}
          id="name"
        />
      </div>
      <div className="booking__email">
        <input
          onChange={(e) => {
            setEmail_(e.target.value);
          }}
          type="email"
          placeholder="E-mail"
          value={Email_}
          id="email"
        />
        <p className={error?"red":"error"}>Error:{error}</p>
      </div>
      <div className="booking__datetime">
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          value={Date}
        />
        <input
          onChange={(e) => setTime(e.target.value)}
          type="time"
          value={Time}
        />
      </div>
      <StripeCheckout
        style={{margin: "12px 0 0 90px"}}
        onClick={function_booking}
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={charge * 100}
        name={booked}
      />
    </div>
    }
    </section>
  ) : (
    ""
  );
}

export default Booking;
