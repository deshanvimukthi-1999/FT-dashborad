import React from "react";
import "./Button.styles.scss";

const Button = ({ onClick, title }) => (
    <button type="button" className="button w-gradient" onClick={onClick}>
        {title || ""}
        <div className="button-glow" />
    </button>
);

export default Button;
