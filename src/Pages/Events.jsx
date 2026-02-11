import React, { useEffect } from "react";
import { useState } from "react";
import eventSample1 from "../components/IMG_WEBP/eventSample1.webp";
import eventSample2 from "../components/IMG_WEBP/eventSample2.webp";
import galleryHero from "../components/IMG_WEBP/Fabulous gallery.webp";
import calenderIcon from "../components/IMG_WEBP/calendar.webp";
import { Outlet } from "react-router-dom";
import EventShowCase from "../components/EventShowCase";
import EventItem from "../components/EventItemShowCase";

const Events = () => {
  const [isEventActive, setIsEventActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 500);
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Events;
