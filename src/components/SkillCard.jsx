import "../stylesheets/SkillCard.css";

function SkillCard(props) {
  const { title, text } = props;

  const splitText = text.trim().split(/\s+/);

  return (
    <div className="card-skill-container">
      <div className="skill-card-title-container">
        <h2 className="skill-card-title">{title}</h2>
      </div>
      <ul className="skill-card-text-container">
        {splitText.map((word, index) => (
          <li key={index} className="skill-card-word">
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
