import React, { useState, useEffect, useRef } from "react";
import "./0_landingpage.css";
import Bg from "./Assets/BG_GLS_F.jpg"
import Game_night from "./Assets/BG_SAC.jpeg";
import PanelDiscussion from "./Assets/BG_AP.jpg";
import StarNight from "./Assets/BG_SN.png";
import Navbar from "./Navbar";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      handleSlideTransition("next");
    }, timeAutoNext);

    return () => clearTimeout(runNextAuto);
  }, [currentIndex]);

  const handleSlideTransition = (type) => {
    const sliderItems = carouselRef.current.querySelectorAll(".list .item");
    const thumbnailItems =
      carouselRef.current.querySelectorAll(".thumbnail .item");

    if (type === "next") {
      carouselRef.current.querySelector(".list").appendChild(sliderItems[0]);
      carouselRef.current
        .querySelector(".thumbnail")
        .appendChild(thumbnailItems[0]);
      setCurrentIndex((currentIndex + 1) % sliderItems.length);
    } else {
      carouselRef.current
        .querySelector(".list")
        .prepend(sliderItems[sliderItems.length - 1]);
      carouselRef.current
        .querySelector(".thumbnail")
        .prepend(thumbnailItems[thumbnailItems.length - 1]);
      setCurrentIndex(
        (currentIndex - 1 + sliderItems.length) % sliderItems.length
      );
    }

    carouselRef.current.classList.add(type);

    setTimeout(() => {
      carouselRef.current.classList.remove(type);
    }, timeRunning);
  };


  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (

    <div className="carousel" ref={carouselRef}>
          <Navbar/>
      <div className="list">
        <CarouselItem
          src={Bg}
          heading="SAIC"
          title="GLOBAL LEADERSHIP"
          topic="SUMMIT 7.0"
          description="Get ready for the ultimate leadership experience! SAIC's Global
          Leadership Summit is back and better than ever. Two days
          jam-packed with inspiration, networking, and pure fun! Join forces
          with current college students and esteemed alumni for a
          mind-blowing exchange of ideas and experiences."
        />
        <CarouselItem
          src={StarNight}
          heading="SAIC"
          title="GLS 7.0"
          topic="SPEAKER SESSION"
          description={
            <>
              Date: 27th April <br />
              Venue: LT101 <br />
              Time: 4:30 PM <br />
              Discover the power of innovation at our global leadership summit! Join us for an engaging and insightful session to explore visionary ideas to guide and mentor you towards a brighter future.            </>
          }
          seeMoreText="Know the Guest"
          seeMoreLink="/Know_the_Star"
          subscribeText="Register Now!"
          subscribeLink="https://forms.gle/ePFKVfUVF2vDhPfPA"
        />
          <CarouselItem
            src={PanelDiscussion}
            heading="SAIC"
            title="GLS 7.0"
            topic="ALUMNI PANEL DISCUSSION"
            date = "27th April"
            description=
            {
              <>  
                  Date: 28th April <br />
                  Venue: Tan Audi <br /> 
                  Time: 3:00 PM <br />
                  We are thrilled to announce the participation of our prestigious
                  alumni panel for our upcoming event - Global Leadership Summit.
              </>
            }
            seeMoreText="Meet the Panelists"
            seeMoreLink="/Know_the_Alumni"
            subscribeText=""
            subscribeLink=""
          />
        <CarouselItem
          src={Game_night}
          heading="SAIC"
          title="GLS 7.0"
          topic="CITYSCAPE"
          description=
          {
            <>
              Date: 28th April <br />
              Venue: Tan Audi <br />
              Time: 5:30 PM <br />
              Number of Team members: 1 - 5 <br />
              Get ready to strategise and create from
              scratch a city of your dreams. Engage in
              a battle of generating higher revenue and
              dominate the economic landscape
            </>
          }
          seeMoreText="Register Now!"
          seeMoreLink="/Register"
          subscribeText="Rulebook"
          subscribeLink="https://drive.google.com/file/d/13WUNn-HtD9o5uZIUOEJO4IBGVTRwOIDz/view?usp=sharing"
        />
      </div>
      <div className="thumbnail">
        <ThumbnailItem
          src={StarNight}
          title="Speaker session"
          description="27th April"
          isActive={currentIndex === 2}
          onClick={() => handleThumbnailClick(2)}
        />
          <ThumbnailItem
            src={PanelDiscussion}
            title="Alumni panel discussion"
            description="28th April"
            isActive={currentIndex === 1}
            onClick={() => handleThumbnailClick(1)}
          />
        <ThumbnailItem
          src={Game_night}
          title="Cityscape"
          description="28th April"
          isActive={currentIndex === 0}
          onClick={() => handleThumbnailClick(0)}
        />
        <ThumbnailItem
          src={Bg}
          title="Home Page"
          description="GLS 7.0"
          isActive={currentIndex === 3}
          onClick={() => handleThumbnailClick(3)}
        />
      </div>
      <div className="arrows">
        <button id="prev" onClick={() => handleSlideTransition("prev")}>
          &lt;
        </button>
        <button id="next" onClick={() => handleSlideTransition("next")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

const CarouselItem = ({
  src,
  heading,
  title,
  topic,
  description,
  seeMoreText,
  seeMoreLink,
  subscribeText,
  subscribeLink,
}) => (
  <div className="item">
    <img src={src} alt={title} />
    <div className="content">
      <div className="heading">{heading}</div>
      <div className="title">{title}</div>
      <div className="topic">{topic}</div>
      <div className="des">{description}</div>
      <div className="buttons">
        {/* {seeMoreLink && (
          <a href={seeMoreLink} target="" rel="noopener noreferrer">
            <button
              style={{
                backgroundColor: "#eee",
                color: "#000",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "background-color 0.3s",
              }}
            >
              {seeMoreText}
            </button>
          </a>
        )}

        {subscribeText && (
          <a href={subscribeLink} target="" rel="noopener noreferrer">
            <button
              style={{
                backgroundColor: "transparent",
                border: "1px solid #fff",
                color: "#fff",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "background-color 0.3s, color 0.3s",
              }}
            >
              {subscribeText}
            </button>
          </a>
        )} */}
        {seeMoreLink && (
  <a href={seeMoreLink} target="" rel="noopener noreferrer">
    <button
      style={{
        backgroundColor: "#eee",
        color: "#000",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        transition: "background-color 0.3s",
        width: "150px", /* Added */
        height: "40px" /* Added */
      }}
    >
      {seeMoreText}
    </button>
  </a>
)}

{subscribeText && (
  <a href={subscribeLink} target="" rel="noopener noreferrer">
    <button
      style={{
        backgroundColor: "transparent",
        border: "1px solid #fff",
        color: "#fff",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        transition: "background-color 0.3s, color 0.3s",
        width: "150px", /* Added */
        height: "40px" /* Added */
      }}
    >
      {subscribeText}
    </button>
  </a>
)}

      </div>
    </div>
  </div>
);

const ThumbnailItem = ({ src, title, description, isActive, onClick }) => (
  <div className={`item ${isActive ? "active" : ""}`} onClick={onClick}>
    <img src={src} alt={title} />
    <div className="content">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  </div>
);

export default Carousel;
