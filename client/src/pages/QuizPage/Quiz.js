import "./Quiz.scss";
import backArrow from "../../assets/icons/Back arrow@2x.png";
import progressBar from "../../assets/icons/Progress bar inactive@2x.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import radioIcon from "../../assets/icons/Radio button empty@2x.png";

const API_URL = "http://localhost:8080/quiz/1";

export default function Quiz() {
  let navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [isActive, setActive] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setQuiz(response.data);
    });
  }, []);

  const handleButtonClick = (event) => {
    event.preventDefault();
    setActive(!isActive);

    setTimeout(() => {
      navigate("/success");
    }, 200);
  };

  if (!quiz) return null;
  console.log(quiz);

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
            {quiz.question}_________________.
          </h4>
          <div className="quiz-card__answers">
            {quiz.answers.map((answer) => {
              return (
                <div className="quiz-card__answers--row" key={answer}>
                  <div className="quiz-card__answers--radio-cont">
                    <img
                      className="quiz-card__answers--radio"
                      src={radioIcon}
                      alt=""
                    />
                  </div>
                  <p className="quiz-card__answers--txt">{answer}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="quiz-card__bottom">
          <button
            className={
              isActive ? "quiz-card__button--active" : "quiz-card__button"
            }
            onClick={handleButtonClick}
          >
            Submit
          </button>
        </section>
      </article>
    </main>
  );
}
