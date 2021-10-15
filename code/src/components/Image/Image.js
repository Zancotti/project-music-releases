import React, { useState } from "react";
import "./image.css";
import { ReactComponent as DotsSvg } from "../../icons/dots.svg";
import { ReactComponent as HeartSvg } from "../../icons/heart.svg";
import { ReactComponent as PlaySvg } from "../../icons/play.svg";

// change the iconContainer and image opacity with the help of states.
export const Image = ({ image }) => {
  const [iconContainerStyle, setIconContainerStyle] = useState({
    display: "none",
  });

  const [imageOpacityStyle, setImageOpacityStyle] = useState({
    opacity: 1,
  });

  // Set the iconcontainerStyle and the imageopacitystyle onMouseEnter and onMouse leave.
  return (
    <div
      className="image-container"
      onMouseEnter={() => {
        setIconContainerStyle({ display: "flex" });
        setImageOpacityStyle({ opacity: 0.4 });
      }}
      onMouseLeave={() => {
        setIconContainerStyle({ display: "none" });
        setImageOpacityStyle({ opacity: 1 });
      }}
    >
      <div className="icon-container" style={iconContainerStyle}>
        <HeartSvg className="icon heart"></HeartSvg>
        <PlaySvg className="icon play"></PlaySvg>
        <DotsSvg className="icon dots"></DotsSvg>
      </div>
      <img src={image.url} alt="An albumcover" style={imageOpacityStyle} />
    </div>
  );
};
