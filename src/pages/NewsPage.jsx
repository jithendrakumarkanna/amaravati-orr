import { NavBar, BottomBack } from "../components/NavBar";
import { Carousel } from "../components/Carousel";

const GOLD = "#c9a84c";
const MUTED = "#7a92aa";

export function NewsPage({ onBack }) {
  return (
    <div className="page">
      <NavBar onBack={onBack} />
      <div className="page-hero">
        <div className="ph-eye">Media Coverage</div>
        <div className="ph-title">Newspaper Information</div>
        <div className="ph-line" />
        <p className="ph-sub">Official coverage from leading Telugu publications confirming ORR & Railway progress</p>
      </div>
      <div className="page-body">
        <div className="sec-title">Latest Coverage</div>
        <div className="sec-line" />
        <Carousel />

        <div className="sec-title" style={{ marginTop: "2rem" }}>Key Headlines</div>
        <div className="sec-line" />
        {[
          ["Dec 25, 2025 — Eenadu","ORR Gazette in 4 Districts","Gazette notification issued for land acquisition across Nellore, Eluru, Krishna, Guntur & Palnadu. Authorities directed to send land records to Central Government."],
          ["Dec 24, 2025 — Eenadu","ORR Construction Moves Fast","600 acres identified across mandals for acquisition. 18 gram panchayats in Kanchikacherla included. Central funding confirmed."],
          ["Various — Eenadu","12 Packages, ₹38,000 Crore","ORR split into 12 construction packages, each valued ₹2,500–₹3,000 crore. Work expected to complete in 3 years from start."],
          ["Various — Eenadu","Railway Gazette Notified","Amaravati Railway line gazette covers 8 mandals, 495 survey numbers. 300+ acres acquired for Peddapuram station alone."],
        ].map(([date, title, body]) => (
          <div key={title} className="card" style={{ marginBottom: "1rem" }}>
            <div style={{ fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", color: GOLD, marginBottom: "0.4rem" }}>{date}</div>
            <div className="card-title" style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{title}</div>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7 }}>{body}</p>
          </div>
        ))}

        <BottomBack onBack={onBack} />
      </div>
    </div>
  );
}
