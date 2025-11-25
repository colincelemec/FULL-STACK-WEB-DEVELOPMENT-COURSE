import React from "react";

function Entry(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <p>{props.id}</p>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.meaning}</dd>
      </div>
    </dl>
  );
}

export default Entry;
