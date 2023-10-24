import React from "react";

interface Props {
  type: string;
  text: string;
  onClick: () => void;
}

const Button = ({ type, text, onClick }: Props) => {
  return <button className={"btn btn-" + type} onClick={onClick}>{text}</button>;
};

export default Button;
