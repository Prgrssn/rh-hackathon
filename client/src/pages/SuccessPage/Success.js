import "./Success.scss";
import successImg from "../../assets/images/Success page@2x.png";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <main className="quiz">
      <article className="success-card">
        <div className="success-card__img-cont">
          <Link to={`/`}>
            <img className="success-card__img" alt="success" src={successImg} />
          </Link>
        </div>
      </article>
    </main>
  );
}
