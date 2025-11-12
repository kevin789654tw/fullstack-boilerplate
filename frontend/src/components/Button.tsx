import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center h-full w-full rounded bg-blue-500 text-white hover:bg-blue-600"
    >
      {children}
    </button>
  );
};
