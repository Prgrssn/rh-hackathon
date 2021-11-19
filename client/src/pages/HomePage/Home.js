import React from "react";
import "./Home.scss";
import landing from "../../assets/images/Landing visual@2x.png";
import bitcoin from "../../assets/icons/Bitcoin@2x.png";
import bitcoins from "../../assets/icons/5 Bitcoin@2x.png";

export default function Home() {
  return (
    <div className="page">
      <section className="page__section1">
        <h1 className="page__title">
          Do you have a fear of trading out? #FOTO
        </h1>
        <p className="page__paragraph">
          96% of American crypto aware internet users are unable to pass a quiz
          assessing basic cryptocurrency facts.
        </p>
      </section>
      <section className="page__section2">
        <img src={landing} alt="Landing Visual" className="page__landing" />
        <p className="page__p-bold">
          Robinhood is here to help. Cryptohood is a safe environment to get
          started.
        </p>
      </section>
      <section className="page__section3">
        <h2 className="page__subtitle">Learn crypto and cash in.</h2>
        <p className="page__paragraph2">
          For every video and quiz you successfully complete, you earn credit
          towards your future investments.
        </p>

        <div className="page__line-container">
          <img className="page__bitcoin" src={bitcoin} alt="1 Bitcoin" />
          <p className="page__text1">1 video = 1 Cryptohood Credit</p>
        </div>
        <div className="page__line-container2">
          <img className="page__bitcoins" src={bitcoins} alt="5 Bitcoins" />
          <p className="page__text2">
            5 Cryptohood Credits can be cashed in for $5 in your account.
          </p>
        </div>
      </section>
    </div>
  );
}
