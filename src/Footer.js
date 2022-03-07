import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        <span>This project was coded by </span>
        <a
          href="https://github.com/catiabarroco"
          target="_black"
          rel="noreferrer"
        >
          Cátia Barroco (Catis Coding)
        </a>
        <span> and is </span>
        <a
          href="https://github.com/catiabarroco/weather-app-react"
          target="_black"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        <span> and hosted on </span>
        <a
          href="https://silly-mcnulty-0e89fc.netlify.app/"
          target="_black"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
