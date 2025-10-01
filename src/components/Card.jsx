import "../stylesheets/Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src={props.photo}
          alt={props.alt}
          className="project-image logo-img"
        />
        <img
          src={props.photo2}
          alt={props.alt2}
          className="project-image landing-img"
        />
      </div>

      <div className="tech-container">{props.tech}</div>

      <div className="description-container">
        <h2>{props.projectN}</h2>
        <p>{props.projectD}</p>
        <button onClick={() => window.open(props.link, "_blank")}>Visit</button>
      </div>
    </div>
  );
}

export default Card;
