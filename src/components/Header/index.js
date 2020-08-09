import React from "react";

const Header = ({ onSelect }) => {
  const headerOptions = ["Todos", "Cerdo", "Res", "Pollo", "Pescado"];

  return (
    <div className="list">
      {headerOptions.map((option) => (
        <button
          key={Math.random() * 1000}
          type="Default"
          className="boton"
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Header;
