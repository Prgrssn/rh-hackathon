import "./Quiz.scss";
import backArrow from "../../assets/icons/Back arrow@2x.png";
import progressBar from "../../assets/icons/Progress bar inactive@2x.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Quiz() {
  const { answers, setAnswers } = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/quiz/1")
      .then((res) => {
        setAnswers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [setAnswers]);

  if (!answers) return null;

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
          <h4 className="quiz-card__question">Question_________________.</h4>
          <div className="quiz-card__answers">
            <div className="quiz-card__answers--row">
              <img className="quiz-card__answers--radio" alt="" />
              <p className="quiz-card__answers--txt">answer</p>
            </div>
          </div>
        </section>
        <section className="quiz-card__bottom">
          <button className="quiz-card__button">Submit</button>
        </section>
      </article>
    </main>
  );
}
