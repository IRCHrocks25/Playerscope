const YOUTUBE_VIDEO_ID = "me-jbmDgSfA";

export function VideoStrip() {
  return (
    <div className="video-strip">
      <iframe
        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        allowFullScreen
        title="PlayerScope"
      />
    </div>
  );
}