import "./Quiz.scss";
import backArrow from "../../assets/icons/Back arrow@2x.png";
import progressBar from "../../assets/icons/Progress bar inactive@2x.png";
import { useEffect, useState } from "react";
import axios from "axios";
import radioIcon from "../../assets/icons/Radio button empty@2x.png";

const API_URL = "http://localhost:8080/quiz/1";

export default function Quiz() {
  // const [quiz, setQuiz] = useState(null);

  // useEffect(() => {
  //   axios.get(API_URL).then((res) => {
  //     setQuiz(res.data);
  //   });
  // }, []);

  // console.log(quiz);

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <main className="quiz">
      <article className="quiz-card">
        <header className="quiz-card__nav">
          <aside className="quiz-card__top">
            <div className="quiz-card__top--prompt-cont">
              <div className="quiz-card__top--icon-cont">
                <img className="quiz-card__top--icon" src={backArrow} alt="" />
              </div>
              <p className="quiz-card__top--prompt">
                Earn your first Cryptohood Credit by answering correctly below.
              </p>
            </div>
            <div className="quiz-card__top--prog-cont">
              <img className="quiz-card__top--prog" alt="" src={progressBar} />
            </div>
          </aside>
        </header>
        <section className="quiz-card__bottom">
          <h4 className="quiz-card__question">
            10 years ago, an anonymous Bitcoin user purchased 1000 Bitcoin for
            $80 total. They sold in 2020, and made enough money to
            buy_________________.
          </h4>
          <div className="quiz-card__answers">
            <div className="quiz-card__answers--row">
              <div className="quiz-card__answers--radio-cont">
                <img
                  className="quiz-card__answers--radio"
                  src={radioIcon}
                  alt=""
                />
              </div>
              <p className="quiz-card__answers--txt">A $1 Million house</p>
            </div>
            <div className="quiz-card__answers--row">
              <div className="quiz-card__answers--radio-cont">
                <img
                  className="quiz-card__answers--radio"
                  src={radioIcon}
                  alt=""
                />
              </div>
              <p className="quiz-card__answers--txt">46 Lamborghinis</p>
            </div>
            <div className="quiz-card__answers--row">
              <div className="quiz-card__answers--radio-cont">
                <img
                  className="quiz-card__answers--radio"
                  alt=""
                  src={radioIcon}
                />
              </div>
              <p className="quiz-card__answers--txt">
                A Super Yacht with a helicopter landing pad
              </p>
            </div>
          </div>
        </section>
        <section className="quiz-card__bottom">
          <button className="quiz-card__button" onClick={handleClick}>
            Submit
          </button>
        </section>
      </article>
    </main>
  );
}
