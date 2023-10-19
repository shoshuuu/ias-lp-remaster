import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Navbar from "../components/navbar";
import CookiesPopup from "../components/cookies-popup";
import Footer from "../components/footer";
import Star from "../../static/images/star-bullet.svg";
import { RequestDemoButton } from "../components/request-demo-button";

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
        <h1 className="title">Full screen stories in your mobile app</h1>
        <p className="narration">
          Extend the lifecycle of your mobile customer across the journey
        </p>
        <div className="get-started__features">
          <StarListItem text="Personalization" />
          <StarListItem text="Gamification" />
          <StarListItem text="Onboarding" />
          <StarListItem text="Short-form videos" />
        </div>
        <Link className="button_filled" to="/sales">
          Book a Meeting
        </Link>
      </div>

      <StaticImage
        src="../../static/images/index/stories-look-example.png"
        alt="stories example"
      />

      <div className="partnerships">{/* swiper or another slider */}</div>

      <div className="marketing-goals">
        <h2 className="subtitle">
          Solve multiple in-app marketing goals via a single platform
        </h2>
        <p className="narration">
          The Stories feature enhances mobile customer experience across
          acquisition, onboarding, conversion, and retention touchpoints.
        </p>
      </div>

      <div className="marketing-slider">
        <div className="marketing-slider__navigation"></div>
        <div className="slider"></div>
      </div>

      <div className="features">
        <h2 className="subtitle">
          The content platform your team and customers will love
        </h2>
        <p className="narration">
          InAppStory provides a multipurpose solution for medium businesses and
          enterprise firms to deliver the content that resonates with mobile
          users.
        </p>

        <div className="features__items">
          <div className="feature">
            <div className="feature__img-container">
              <StaticImage
                src="../../static/images/index/features/editor.png"
                alt="intuitive editor console"
              />
            </div>
            <div className="feature__text-container">
              <h3 className="subtitle3">Intuitive editor console</h3>
              <p className="narration">
                Design all kinds of Stories with any complexity level. Combine
                and customize images, videos, messages, targeted actions,
                creatives, colors, and fonts for your brand.
              </p>
              {RequestDemoButton}
            </div>
          </div>
          <div className="feature_reversed">
            <div className="feature__img-container">
              <StaticImage
                src="../../static/images/index/features/publishing.png"
                alt="publishing"
              />
            </div>
            <div className="feature__text-container">
              <h3 className="subtitle3">Broad publishing settings</h3>
              <p className="narration">
                Easily target and personalize Stories app features via audience
                segments and attributes to deliver resonating content.
              </p>
              {RequestDemoButton}
            </div>
          </div>
          <div className="feature">
            <div className="feature__img-container">
              <StaticImage
                src="../../static/images/index/features/widgets.png"
                alt="widgets"
              />
            </div>
            <div className="feature__text-container">
              <h3 className="subtitle3">Gamified user experience</h3>
              <p className="narration">
                Communicate with your users via gamification and interactive
                design mechanics. Choose matching HTML games, quizzes, polls,
                tests, and other widgets that suit your audience.
              </p>
              {RequestDemoButton}
            </div>
          </div>
          <div className="feature_reversed">
            <div className="feature__img-container">
              <StaticImage
                src="../../static/images/index/features/analytics.png"
                alt="analytics"
              />
            </div>
            <div className="feature__text-container">
              <h3 className="subtitle3">Insightful analytical tools</h3>
              <p className="narration">
                Track Stories and user behavior metrics from the online
                dashboard. Import them directly to Google Analytics, Amplitude,
                or other analytical tools.
              </p>
              {RequestDemoButton}
            </div>
          </div>
        </div>
      </div>

      <div className="stats">
        <h2 className="title">Influence customers behaviour in a native way</h2>
        <div className="stats__wrapper">
          <div className="stat-container">
            <p className="title">10m+</p>
            <p className="narration">Total daily impacts</p>
            <div className="separator"></div>
          </div>
          <div className="stat-container">
            <p className="title">20%</p>
            <p className="narration">Average engagement rate</p>
            <div className="separator"></div>
          </div>
          <div className="stat-container">
            <p className="title">x3</p>
            <p className="narration">Better conversion vs. banners</p>
            <div className="separator"></div>
          </div>
          <div className="stat-container">
            <p className="title">2min+</p>
            <p className="narration">Average increase in user sessions</p>
            <div className="separator"></div>
          </div>
        </div>
      </div>

      <div className="reviews">
        <div className="reviews__top-panel">
          <h3 className="subtitle3">What our clients say?</h3>
          <div className="reviews__slider-controls">
            {/*Добавить интерактивные стрелки слайдера здесь */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
