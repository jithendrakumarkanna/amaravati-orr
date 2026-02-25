import { IMAGES } from "../data/images";
import { ORR_VIDEOS } from "../data/content";
import { NavBar, BottomBack } from "../components/NavBar";
import { VideoGrid } from "../components/VideoGrid";

export function ORRPage({ onBack }) {
  return (
    <div className="page">
      <NavBar onBack={onBack} />
      <div className="page-hero">
        <div className="ph-eye">Infrastructure</div>
        <div className="ph-title">What is Amaravati ORR?</div>
        <div className="ph-line" />
        <p className="ph-sub">India's first-of-its-kind biggest Ring Road — connecting 4 major cities of Andhra Pradesh</p>
      </div>
      <div className="page-body">
        <div className="stats-row">
          {[["189 km","Total Length"],["140 m","Width (460 ft)"],["₹38,000 Cr","Central Budget"],["4 Cities","Connected"]].map(([v,l]) => (
            <div key={l} className="stat-box">
              <div className="stat-val">{v}</div>
              <div className="stat-lbl">{l}</div>
            </div>
          ))}
        </div>

        {[
          ["✓","India's Biggest Ring Road","First-of-its-kind ring road measuring <strong>189 kilometers</strong>, connecting Vijayawada, Amaravati, Guntur and Tenali. The 0 km point starts at Kanchikacherla."],
          ["✓","Widest Road in India","Road width is <strong>140 meters (460 feet)</strong> — the biggest width for any road in India, enabling massive traffic flow and future-ready infrastructure."],
          ["✓","₹38,000 Crore Fully Funded","Fully funded by the <strong>Central Government</strong>. State government contributes only ₹1,000 crore — ensuring strong execution certainty."],
          ["✓","Gazette Notified & Active","Land acquisition gazette notification issued across 4 districts. Construction packages being finalized. Work actively progressing."],
        ].map(([icon, title, body]) => (
          <div key={title} className="fact-item">
            <span className="fact-icon">{icon}</span>
            <div className="fact-text">
              <strong>{title}: </strong>
              <span dangerouslySetInnerHTML={{ __html: body }} />
            </div>
          </div>
        ))}

        <div style={{ marginTop: "2.5rem" }}>
          <div className="sec-title">ORR Route Map</div>
          <div className="sec-line" />
          <img
            src={IMAGES.slide3}
            alt="Amaravati ORR Route Map"
            style={{ width: "100%", borderRadius: "8px", border: "1px solid rgba(201,168,76,0.3)", marginBottom: "2rem" }}
          />
        </div>

        <div>
          <div className="sec-title">Must-Watch Videos</div>
          <div className="sec-line" />
          <VideoGrid videos={ORR_VIDEOS} />
        </div>

        <BottomBack onBack={onBack} />
      </div>
    </div>
  );
}
