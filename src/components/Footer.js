import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        paddingLeft: "40px",
        backgroundColor: "lightslategray",
        borderRadius: "10px"
      }}
    >
      <ul
        style={{
          gridColumn: "1/ 2",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <li>
          <a href="cjmccaskill.dev">Link 1</a>
        </li>
        <li>
          <a href="cjmccaskill.dev">Link 2</a>
        </li>
        <li>
          <a href="cjmccaskill.dev">Link 3</a>
        </li>
      </ul>
      <ul
        style={{
          gridColumn: "2/ 3",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <li>
          <a href="cjmccaskill.dev">Link 4</a>
        </li>
        <li>
          <a href="cjmccaskill.dev">Link 5</a>
        </li>
        <li>
          <a href="cjmccaskill.dev">Link 6</a>
        </li>
      </ul>
      <ul
        style={{
          gridColumn: "3/ 4",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <li>
          <a href="cjmccaskill.dev">Link 7</a>
        </li>
        <li>
          <a href="cjmccaskill.dev">Link 8</a>
        </li>
        <li>
          <a href="cjmccaskill.dev">Link 9</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
