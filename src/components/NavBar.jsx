export function NavBar({ onBack }) {
  return (
    <div className="navbar">
      <span className="nav-logo">Amaravati ORR</span>
      <button className="nav-back" onClick={onBack}>← Back to Home</button>
    </div>
  );
}

export function BottomBack({ onBack }) {
  return (
    <div className="back-bottom">
      <button className="back-bottom-btn" onClick={onBack}>← Back to Home</button>
    </div>
  );
}
