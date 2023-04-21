// Card.jsx
import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    const { frontContent, backContent } = this.props;
    const { isFlipped } = this.state;

    return (
      <>
        <style jsx>
          {`
            .flip-card.flipped .flip-card-inner {
              transform: rotateY(180deg);
            }
          `}
        </style>
        <div
          className={`flip-card ${isFlipped ? "flipped" : ""}`}
          onClick={this.handleClick}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              {" "}
              <img
                className={`w-full border-2 duration-100 ease-in group-hover:shadow-2xl  group-hover:shadow-white/60 group-hover:-translate-y-2`}
                src={"/imgs/tarotcard.png"}
                alt="tarot"
              />
            </div>
            <div className="flip-card-back">
              {" "}
              <img
                className={`w-full border-2 duration-100 ease-in group-hover:shadow-2xl  group-hover:shadow-white/60 group-hover:-translate-y-2`}
                src={"/imgs/34.png"}
                alt="tarot"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
