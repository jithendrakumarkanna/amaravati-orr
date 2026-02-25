import { useState } from "react";
import { IMAGES } from "../data/images";
import { NavBar, BottomBack } from "../components/NavBar";

const GOLD = "#c9a84c";
const GOLD_LIGHT = "#e8c97a";
const MUTED = "#7a92aa";
const TEXT = "#d8e4f0";

export function LandBankPage({ onBack }) {
  const [tab, setTab] = useState("opportunity");

  return (
    <div className="page">
      <NavBar onBack={onBack} />
      <div className="page-hero">
        <div className="ph-eye">Investment</div>
        <div className="ph-title">Land Bank</div>
        <div className="ph-line" />
        <p className="ph-sub">13.4 Acres of prime land near Alluru Village — 1 km from Amaravati ORR</p>
      </div>
      <div className="page-body">
        <div className="tabs">
          {[["opportunity","🌾 Opportunity"],["location","📍 Location"],["pricing","💰 Pricing"]].map(([k,l]) => (
            <button key={k} className={`tab-btn${tab === k ? " active" : ""}`} onClick={() => setTab(k)}>{l}</button>
          ))}
        </div>

        {tab === "opportunity" && (
          <div>
            <div className="sec-title">Land Banking Opportunity</div>
            <div className="sec-line" />
            <div className="card" style={{ borderColor: "rgba(201,168,76,0.4)" }}>
              <div className="card-title">🌾 Agricultural Stage — Residential Value Unlock Plan</div>
              <p style={{ color: TEXT, lineHeight: 1.8, marginBottom: "1rem" }}>
                This is a <strong style={{ color: GOLD_LIGHT }}>strategic early-entry opportunity</strong> — land is currently priced at agricultural rates, before infrastructure development transforms this zone into a premium residential corridor.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                Exclusive access available for a select group of like-minded investors. Early movers capture the entire appreciation gap as ORR and railway infrastructure becomes operational.
              </p>
            </div>
            <div className="stats-row">
              {[["13.4 Acres","Total Land Area"],["~3,200 SqYd","Saleable per Acre"],["1 km","From ORR"],["30 min","To Capital Amaravati"]].map(([v,l]) => (
                <div key={l} className="stat-box">
                  <div className="stat-val">{v}</div>
                  <div className="stat-lbl">{l}</div>
                </div>
              ))}
            </div>
            {[
              ["🎯","Strategic Early Entry","Only for friends and like-minded investors — exclusive access before the land goes to the open market."],
              ["📈","7.5× Appreciation Potential","Nearby developed ventures are already selling at ₹12,000/SqYd. Your entry price is just ₹1,600/SqYd."],
              ["🔒","Land Under Acquisition","13.4 acres currently being acquired. Secure your position now before the acquisition window closes."],
            ].map(([icon, title, body]) => (
              <div key={title} className="fact-item">
                <span className="fact-icon">{icon}</span>
                <div className="fact-text"><strong>{title}: </strong>{body}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "location" && (
          <div>
            <div className="sec-title">Land Bank Location</div>
            <div className="sec-line" />
            <img src={IMAGES.slide5} alt="Land Bank Location Map"
              style={{ width: "100%", borderRadius: "8px", border: "1px solid rgba(201,168,76,0.3)", marginBottom: "1.5rem" }} />
            <div className="loc-grid">
              {[
                ["📍","1 km from ORR","Near Alluru village, just 1 km from Amaravati Outer Ring Road"],
                ["🚉","0.7 km to Railway","Adjacent to new Peddapuram Station on Errupalem–Namburu line"],
                ["🏙️","30 min to Capital","30 km from Amaravati via ORR exit — easily reachable"],
                ["🛣️","70-Ft Road Frontage","Direct access via 70-feet road from Kanchikacherla–Madhira State Highway"],
              ].map(([icon, val, desc]) => (
                <div key={val} className="loc-card">
                  <div className="loc-icon">{icon}</div>
                  <div className="loc-val">{val}</div>
                  <div className="loc-desc">{desc}</div>
                </div>
              ))}
            </div>
            <div className="card">
              <div className="card-title">Detailed Location Highlights</div>
              {[
                ["➢","13.4 acres of land about 1 km from ORR is under acquisition near Alluru village, Peddapuram mandal."],
                ["➢","The land is <strong>30 kilometers from Capital Amaravati</strong> via ORR exit — reachable in 30 minutes maximum."],
                ["➢","Just <strong>0.7 km from the new Peddapuram Railway Station</strong>, the first entry point in Andhra Pradesh on the Errupalem–Namburu Railway Line. Station to be built across 79 acres."],
                ["➢","The land has a <strong>70-Feet-Wide Road Frontage</strong> on the Kanchikacherla to Madhira State Highway."],
              ].map(([icon, text], i) => (
                <div key={i} className="fact-item">
                  <span className="fact-icon">{icon}</span>
                  <div className="fact-text" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
              ))}
              <img src={IMAGES.slide6} alt="Land Bank Diagram"
                style={{ width: "100%", borderRadius: "8px", border: "1px solid rgba(201,168,76,0.3)", marginTop: "1.5rem" }} />
            </div>
          </div>
        )}

        {tab === "pricing" && (
          <div>
            <div className="sec-title">The Pricing Arbitrage</div>
            <div className="sec-line" />
            <div className="pricing-box">
              <p style={{ color: MUTED, marginBottom: "0.3rem", fontSize: "0.9rem" }}>1 Acre = ~3,200 Saleable Square Yards</p>
              <p style={{ color: TEXT, fontSize: "1.05rem" }}>Buy early — capture the entire pricing gap before the market corrects</p>
              <div className="price-row">
                <div className="price-box">
                  <div className="price-num" style={{ color: GOLD }}>₹1,600</div>
                  <div className="price-lbl">Your Entry Price<br />per Sq Yard</div>
                </div>
                <div className="price-arrow">→</div>
                <div className="price-box">
                  <div className="price-num" style={{ color: TEXT }}>₹12,000</div>
                  <div className="price-lbl">Nearby Developed<br />Ventures</div>
                </div>
                <div className="price-arrow">=</div>
                <div className="price-box">
                  <div className="price-num" style={{ color: "#4ade80" }}>7.5×</div>
                  <div className="price-lbl">Potential<br />Upside</div>
                </div>
              </div>
              <div className="upside-note">✅ Early Entry Captures the Pricing Gap — Act before infrastructure drives prices to market levels.</div>
            </div>
            {[
              ["💡","Agricultural pricing now","Land is priced at agricultural rates — before LP conversion and layout development."],
              ["📊","Market benchmark ₹12,000/SqYd","Developed ventures nearby already selling at 7.5× your entry price."],
              ["⏳","Time-sensitive window","Once ORR construction progresses and gazette notifications complete, prices will surge."],
            ].map(([icon, title, body]) => (
              <div key={title} className="fact-item">
                <span className="fact-icon">{icon}</span>
                <div className="fact-text"><strong>{title}: </strong>{body}</div>
              </div>
            ))}
          </div>
        )}

        <BottomBack onBack={onBack} />
      </div>
    </div>
  );
}
