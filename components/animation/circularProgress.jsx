import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const PieChart = () => {
  const [percentage, setPercentage] = useState(75);

  const handleChange = (event) => {
    setPercentage(event.target.value);
  };

  const rotateRight = keyframes`
    from {
      clip: rect(0, 50%, .5em, .5em);
    }
    50% {
      clip: rect(0, ${50 + percentage / 2}%, .5em, .5em);
    }
    to {
      clip: rect(0, ${50 + percentage / 2}%, 1em, .5em);
    }
  `;

  const rotateLeft = keyframes`
    from {
      clip: rect(.5em, .5em, 1em, .5em);
    }
    50% {
      clip: rect(.5em, .5em, 1em, ${50 - percentage / 2}%);
    }
    to {
      clip: rect(.3em, .5em, 1em, ${50 - percentage / 2}%);
    }
  `;

  return (
    <Pie>
      <SliceRight percentage={percentage} />
      <SliceLeft percentage={percentage} />
      <Percent>
        <Number>{percentage}%</Number>
      </Percent>
      <Slider
        type="range"
        min="0"
        max="100"
        value={percentage}
        onChange={handleChange}
      />
    </Pie>
  );
};

const Pie = styled.div`
  display: inline-block;
  position: relative;
  width: 1em;
  height: 1em;
  background-color: #2f3e46;
  font-size: 7em;
  text-align: center;
  border-radius: 50%;
`;

const SliceRight = styled.div`
  position: absolute;
  z-index: 11;
  background-color: #ff913b;
  width: 100%;
  height: 100%;
  clip: rect(0, 0.5em, 0.5em, 0.5em);
  border-radius: 50%;
  animation-delay: 0.9s;
  animation-duration: 0.3s;
  animation-name: ${({ percentage }) => rotateRight};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const SliceLeft = styled.div`
  position: absolute;
  z-index: 11;
  background-color: #ff913b;
  width: 100%;
  height: 100%;
  clip: rect(0.5em, 0.5em, 1em, 0.5em);
  border-radius: 50%;
  animation-delay: 1.2s;
  animation-duration: 0.3s;
  animation-name: ${({ percentage }) => rotateLeft};
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const Percent = styled.div`
  position: absolute;
  z-index: 20;
  top: 3px;
  right: 3px;
  bottom: 3px;
  left: 3px;
  background: #1d2225;
  border-radius: 50%;
`;

const Number = styled.div`
  position: absolute;
  z-index: 30;
  width: 100%;
  height: 100%;
  padding-top: 50%;
  line-height: 0;
  font-size: 0.3em;
  color: #485c65;
`;

const Slider = styled.input`
  position: absolute;
  z-index: 30;
  width: 80%;
  height: 10%;
  margin: 0;
  top: 45%;
  left: 10%;
  background-color: transparent;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #ff913b;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #ff913b;
    cursor: pointer;
  }
`;

export default PieChart;
