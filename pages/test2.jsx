// Particle.js
import React from "react";

const Particle = () => {
  return (
    <>
      <style jsx>
        {`
          .particle {
            position: absolute;
            background-color: rgba(173, 216, 230, 0.8);
            border-radius: 50%;
            width: 4px;
            height: 4px;
            opacity: 0.9;
            animation: move 12s linear infinite,
              glow 2s ease-in-out infinite alternate;
          }

          @keyframes move {
            0% {
              transform: translate(0%, 0%);
            }
            100% {
              transform: translate(calc(100vw - 4px), calc(100vh - 4px));
            }
          }

          @keyframes glow {
            0% {
              opacity: 0.9;
            }
            100% {
              opacity: 0.5;
            }
          }
        `}
      </style>
      <div className="particle"></div>
    </>
  );
};

const App = () => {
  const particles = Array.from({ length: 50 });

  return (
    <>
      <style jsx>
        {`
          .App {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }
        `}
      </style>
      <div className="App">
        {particles.map((_, index) => (
          <Particle key={index} />
        ))}
      </div>
    </>
  );
};

export default App;
