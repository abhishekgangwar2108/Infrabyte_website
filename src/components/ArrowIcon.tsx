import { useState } from "react";

const ArrowIcon = () => {
  const [hover, setHover] = useState(false);

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        transform: hover ? "translate(4px, -4px)" : "translate(0, 0)",
        transition: "transform 0.3s ease",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 9.8 9.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M0.4 9.4L9.4 0.4" />
        <path d="M0.4 0.5H9.3" />
        <path d="M9.3 9.4V0.5" />
      </svg>
    </span>
  );
};

export default ArrowIcon;
