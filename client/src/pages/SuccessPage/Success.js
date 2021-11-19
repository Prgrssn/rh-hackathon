import "./Success.scss";
import successImg from "../../assets/images/Success page@2x.png";

export default function Success() {
  return (
    <main className="quiz">
      <article className="success-card">
        <div className="success-card__img-cont">
          <img className="success-card__img" alt="success" src={successImg} />
        </div>
      </article>
    </main>
  );
}
