"use client";
import React from "react";
import { Play } from "lucide-react";

type Props = {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};
const RunButton = ({ onClick, disabled = false }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mt-3.5 flex items-center justify-center rounded-md bg-green-500 px-4 py-2 text-white shadow-md transition-all duration-300 hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none ${disabled ? "cursor-not-allowed opacity-50" : "hover:scale-105"} `}
    >
      <Play className="mr-2" size={20} />
      <span className="font-semibold">Run</span>
    </button>
  );
};

export default RunButton;
