// Firefly.js
import React from "react";
import styled, { keyframes, css } from "styled-components";
import { createGlobalStyle } from "styled-components";

const move = (index) => keyframes`
  0% {
    transform: translateX(${Math.random() * 100 - 50}vw) translateY(${
  Math.random() * 100 - 50
}vh) scale(${Math.random() * 0.75 + 0.25});
  }
  100% {
    transform: translateX(${Math.random() * 100 - 50}vw) translateY(${
  Math.random() * 100 - 50
}vh) scale(${Math.random() * 0.75 + 0.25});
  }
`;

const drift = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const flash = keyframes`
  0%, 30%, 100% {
      opacity: 0;
      box-shadow: 0 0 0vw 0vw yellow;
  }
  5% {
      opacity: 1;
      box-shadow: 0 0 2vw 0.4vw yellow;
  }
`;

const fireflyAnimation = (index) => css`
  ${move(index)} ${Math.random() * 12 + 16}s linear infinite;
`;

const FireflyDiv = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 0.4vw;
  height: 0.4vw;
  margin: -0.2vw 0 0 9.8vw;
  pointer-events: none;
  animation: ${(props) => fireflyAnimation(props.index)};

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform-origin: -10vw;
  }

  &:before {
    background: #222236;
    opacity: 0.4;
    animation: ${drift} ${(props) => Math.random() * 10 + 8}s ease alternate
      infinite;
  }

  &:after {
    background: white;
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
    animation: ${drift} ${(props) => Math.random() * 10 + 8}s ease alternate
        infinite,
      ${flash} ${Math.random() * 6000 + 2000}ms ease infinite;
    animation-delay: 0ms, ${Math.random() * 8000 + 500}ms;
  }
`;

const Firefly = ({ index }) => {
  return <FireflyDiv index={index} />;
};

const App = () => {
  const fireflies = Array.from({ length: 15 });

  return (
    <>
      <div>
        {fireflies.map((_, index) => (
          <Firefly key={index} index={index + 1} />
        ))}
      </div>
    </>
  );
};

export default App;
