import React from "react";

const Article = ({ title, date, preview, minutes }) => {
  const renderReadingTime = (minutes) => {
    const coffeeEmoji = "☕️";
    const bentoBoxEmoji = "🍱";

    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return coffeeEmoji.repeat(coffeeCups) + ` ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return bentoBoxEmoji.repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{renderReadingTime(minutes)}</p>
    </article>
  );
};

export default Article;
