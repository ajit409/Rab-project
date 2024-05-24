import React, { useState } from "react";
import "./Card.css";
import useCardApi from "../../utils/useCardApi";
import PopUp from "../PopUp/PopUp";

function Card() {
  const [apiData, setApiData] = useState([]);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [cardSpecificModalData, setCardSpecificModalData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useCardApi(setApiData);

  const clickOnLearnMore = (card) => {
    setShowModal(true);
    setCardSpecificModalData(card);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <section id="product">

      <div className="padding-section">
        <div class="text-align-center">
          <div class="max-width-large align-center">
            <div class="tagline">
              <div class="text-weight-semibold">Product</div>
            </div>
            <div class="spacer-xsmall"></div>
            <h2 class="heading-2">Product Detail</h2>
            <div class="spacer-small"></div>
          </div>

        </div>
      </div>

      <div className="card-container">


        {apiData.map((card) => (
          <div
            key={card.id}
            className={`cards ${hoveredCardId === card.id ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredCardId(card.id)} onMouseLeave={() => setHoveredCardId(null)} >
            <div className="circle aqua"></div>
            <div className="circle orange"></div>

            <div className="card">
              <div className="card-img-wrapper">
                <img
                  className="card-img"
                  src={card.thumbnail.large}
                  alt="FirstImage"
                />
                <div className="overlay" />
                {hoveredCardId === card.id && (
                  <div className="overlay-content">
                    <button
                      className="learn-more-btn"
                      onClick={() => clickOnLearnMore(card)}
                    >
                      Learn More
                    </button>
                  </div>
                )}
              </div>
              <div className="card-details">
                <h1 className="card-title">{card.title}</h1>
                <p className="card-content">{card.content}</p>
                <div className="author">
                  <p>{`${card.author.name} - ${card.author.role}`}</p>
                  <p>
                    {new Date(card.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <PopUp
          cardSpecificModalData={cardSpecificModalData}
          closeModal={closeModal}
        />
      )}
          </section>

    </>
  );
}

export default Card;
