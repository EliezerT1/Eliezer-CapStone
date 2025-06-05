import React, { useState, useEffect } from "react";

const TypeWriterQuote = ({ text, speed = 1000, pause = 1500 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout;
    if (displayed.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
      }, pause);
    }
    return () => clearTimeout(timeout);
  }, [displayed, text, speed, pause]);

  return (
    <span
      className="block text-2xl font-semibold text-black my-4 min-h-[2.5rem] tracking-wide"
      style={{ fontFamily: "monospace" }}
    >
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypeWriterQuote;