import { useState, useEffect } from "react";
import { IMAGES } from "../data/images";
import { RAILWAY_NEWS } from "../data/content";

export function RailwayCarousel() {
  const [cur, setCur] = useState(0);
  const n = RAILWAY_NEWS.length;
  const prev = () => setCur(c => (c - 1 + n) % n);
  const next = () => setCur(c => (c + 1) % n);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-track-wrap">
        <div className="carousel-track" style={{ transform: `translateX(-${cur * 100}%)` }}>
          {RAILWAY_NEWS.map((s, i) => (
            <div key={i} className="carousel-slide">
              <img
                src={IMAGES[s.imgKey]}
                alt={s.date}
                style={{ width: "100%", borderRadius: "6px", maxHeight: "400px", objectFit: "contain", background: "#000", display: "block" }}
              />
              <div className="slide-date" style={{ marginTop: "1rem" }}>{s.date}</div>
              <div className="slide-headline">{s.headline}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-footer">
        <button className="car-btn" onClick={prev}>‹</button>
        <div className="car-dots">
          {RAILWAY_NEWS.map((_, i) => (
            <div key={i} className={`car-dot${i === cur ? " active" : ""}`} onClick={() => setCur(i)} />
          ))}
        </div>
        <button className="car-btn" onClick={next}>›</button>
        <span className="car-count">{cur + 1} / {n}</span>
      </div>
    </div>
  );
}
