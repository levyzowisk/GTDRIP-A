import React from "react";
import "./style.css";

export default function SectionResultados({
    title = "Produtos em alta",
    link = { text: "Veja Mais →", href: "https://redirect.link" },
    children,
  }) {
    return (
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <a href={link.href} className="section-link">
            {link.text}
          </a>
        </div>
      </section>
    );
  }

