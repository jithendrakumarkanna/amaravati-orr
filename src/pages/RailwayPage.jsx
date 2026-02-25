import { IMAGES } from "../data/images";
import { RAILWAY_VIDEOS } from "../data/content";
import { NavBar, BottomBack } from "../components/NavBar";
import { VideoGrid } from "../components/VideoGrid";
import { RailwayCarousel } from "../components/RailwayCarousel";

export function RailwayPage({ onBack }) {
  return (
    <div className="page">
      <NavBar onBack={onBack} />
      <div className="page-hero">
        <div className="ph-eye">Connectivity</div>
        <div className="ph-title">Amaravati Railway Line</div>
        <div className="ph-line" />
        <p className="ph-sub">The subject land enjoys dual connectivity — ORR access + Railway Station access</p>
      </div>
      <div className="page-body">
        <div className="dual-card">
          <div className="dual-item">
            <div className="dual-icon">🛣️</div>
            <div className="dual-title">Outer Ring Road</div>
            <div className="dual-desc">1 km from land. 189 km ring road connecting Vijayawada, Amaravati, Guntur and Tenali.</div>
          </div>
          <div className="dual-item">
            <div className="dual-icon">🚉</div>
            <div className="dual-title">Railway Line</div>
            <div className="dual-desc">0.7 km to Peddapuram Station. New Errupalem–Namburu line — first entry point into AP.</div>
          </div>
        </div>

        <img
          src={IMAGES.slide13}
          alt="Amaravati Railway Line Map"
          style={{ width: "100%", borderRadius: "8px", border: "1px solid rgba(201,168,76,0.3)", marginBottom: "2rem" }}
        />

        <div className="stats-row">
          {[["56.8 km","Errupalem → Namburu"],["24.5 km","Amaravati → Peddakurapadu"],["25.0 km","Sattenapalli → Narsaraopeta"],["79 Acres","Peddapuram Station"]].map(([v,l]) => (
            <div key={l} className="stat-box">
              <div className="stat-val">{v}</div>
              <div className="stat-lbl">{l}</div>
            </div>
          ))}
        </div>

        {[
          ["🚉","Peddapuram — First Entry Point in AP","Peddapuram is the first railway station in Andhra Pradesh on the new Errupalem–Namburu Railway Line. The station will be built across a massive 79 acres."],
          ["📍","Subject Land is Here","The 13.4-acre land bank near Peddapuram benefits from both the ORR corridor and the new railway line — within 1 km of both."],
          ["🔗","Dual Connectivity Advantage","No other land in this region has access to both a 460-feet-wide ring road AND a new railway station within 1 km. Uniquely positioned for exponential appreciation."],
          ["📰","Gazette Notified","Gazette notification issued for 300+ acres of railway land acquisition. Survey numbers across 8 mandals officially notified."],
        ].map(([icon, title, body]) => (
          <div key={title} className="fact-item">
            <span className="fact-icon">{icon}</span>
            <div className="fact-text"><strong>{title}: </strong>{body}</div>
          </div>
        ))}

        <div style={{ marginTop: "2.5rem" }}>
          <div className="sec-title">Railway News Coverage</div>
          <div className="sec-line" />
          <RailwayCarousel />
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div className="sec-title">Further Information</div>
          <div className="sec-line" />
          <VideoGrid videos={RAILWAY_VIDEOS} />
        </div>

        <BottomBack onBack={onBack} />
      </div>
    </div>
  );
}
