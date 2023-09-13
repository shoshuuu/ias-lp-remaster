import * as React from "react";
import { Link } from "gatsby";
import Navbar from "../components/navbar";
import CookiesPopup from "../components/cookies-popup";
import Footer from "../components/footer";
import Star from "../../static/images/star-bullet.svg";

const StarListItem = (props) => {
  return (
    <div className="get-started__list-item">
      <img src={Star} alt="bullet" />
      <p>{props.text}</p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="get-started">
        <h1>Full screen stories in your mobile app</h1>
        <p>Extend the lifecycle of your mobile customer across the journey</p>
        <div className="get-started__features">
          <StarListItem text="Personalization" />
          <StarListItem text="Gamification" />
          <StarListItem text="Onboarding" />
          <StarListItem text="Short-form videos" />
        </div>
        <Link to="/sales">Book a Meeting</Link>
      </div>

      <img
        src={require("../../static/images/stories-look-example.png")}
        alt="stories-example"
      />

      <Footer />
    </>
  );
}
