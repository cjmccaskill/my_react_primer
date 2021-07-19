import React from "react";

const Header = () => {
  return (
    <header>
      <h1
        style={{
          textAlign: "center"
        }}
      >
        My React Primer
      </h1>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <div>
          <a href="cjmccaskill.dev">Link1</a>
        </div>
        <div>
          <a href="cjmccaskill.dev">Link2</a>
        </div>
        <div>
          <a href="cjmccaskill.dev">Link3</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
