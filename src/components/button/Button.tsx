import React from "react";
import "./button.scss";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className: "primary" | "secondary" | "tertiary" | "destroy" | string;
}

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={props.className}
    >
      <span>{props.children}</span>
    </button>
  );
};
