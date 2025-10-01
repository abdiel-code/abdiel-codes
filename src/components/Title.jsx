import "../stylesheets/Title.css";

function Title(props) {
  return (
    <div className={`title-container ${props.id}-title-container`}>
      <div className="title-name" id={props.id}>
        <h1 className="title-me">
          <span>{props.symbol}</span>
          {props.text}
        </h1>
        <hr />
      </div>
    </div>
  );
}

export default Title;
