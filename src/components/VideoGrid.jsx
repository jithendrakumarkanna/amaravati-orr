export function VideoGrid({ videos }) {
  return (
    <div className="video-grid">
      {videos.map(({ id, label }) => (
        <div key={id}>
          <div className="video-wrap">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
              title={label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="video-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
