import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const changeColor = keyframes`

  0% {
     
     transform: translateX(-100%);

  }
  25% {
   
     transform: translateX(25%);
  }
  50% {
   
    transform: translateX(50%);
  }
  75% {
  
    transform: translateX(75%)
  }

  80%{
   
    transform: translateX(85%)
  }

  100% {
   
    transform: translateX(100%);
  }
`;
const LoaderElement = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  animation: ${changeColor} 2.5s ease-in infinite;
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  &:nth-child(3) {
    animation-delay: 1.5s;
  }
`;

const Loader = () => {
  const [colors, setColors] = useState(["#ff0000", "#00ff00", "#0000ff"]);

  setTimeout(() => {
    setColors([getRandomColor(), getRandomColor(), getRandomColor()]);
  }, 1000);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
      >
        <LoaderElement color={colors[0]} />
        <LoaderElement color={colors[1]} />
        <LoaderElement color={colors[2]} />
      </span>
    </>
  );
};

export default Loader;
