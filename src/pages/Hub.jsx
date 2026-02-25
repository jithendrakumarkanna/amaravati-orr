export function Hub({ onNavigate }) {
  const cards = [
    { key: "orr",      icon: "🛣️", title: "What is Amaravati ORR?", sub: "189 km · India's widest road · ₹38,000 Crore" },
    { key: "landbank", icon: "🏡", title: "Land Bank",               sub: "Opportunity · Location · Pricing — 13.4 Acres" },
    { key: "news",     icon: "📰", title: "Newspaper Information",   sub: "Official gazette coverage · Eenadu reports" },
    { key: "railway",  icon: "🚉", title: "Railway Line Details",    sub: "Errupalem–Namburu line · Dual connectivity" },
  ];

  return (
    <div className="hub">
      <div className="hub-top">
        <div className="hub-eye">Investment Portfolio</div>
        <div className="hub-title">Explore the Opportunity</div>
        <div className="hub-line" />
      </div>
      <div className="hub-grid">
        {cards.map((c) => (
          <div key={c.key} className="hub-card" onClick={() => onNavigate(c.key)}>
            <div className="hub-icon">{c.icon}</div>
            <div className="hub-card-title">{c.title}</div>
            <div className="hub-card-sub">{c.sub}</div>
            <div className="hub-arrow">Explore →</div>
          </div>
        ))}
      </div>
    </div>
  );
}
