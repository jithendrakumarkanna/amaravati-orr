import { useEffect } from "react";

export function Landing({ onEnter }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        onEnter();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onEnter]);

  return (
    <div className="landing">
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="l-badge" onClick={onEnter}>Exclusive Investment Opportunity</div>
      <h1 className="l-title">Amaravati<br />ORR</h1>
      <p className="l-sub">Outer Ring Road · Land Bank · Andhra Pradesh</p>
      <p className="l-tagline">13.4 Acres · 1 km from ORR · Strategic Early Entry</p>
      <button className="l-btn" onClick={onEnter}>Explore Opportunity →</button>
    </div>
  );
}
