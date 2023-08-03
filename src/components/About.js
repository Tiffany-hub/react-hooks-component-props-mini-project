import React from "react";

const About = ({ imageSrc, aboutText }) => {
  return (
    <aside>
      <img src={imageSrc || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;
