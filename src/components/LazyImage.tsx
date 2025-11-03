import { useState, useRef, useEffect } from "react";
import { Skeleton } from "./ui/Skeleton";

interface LazyImageProps {
  src: string;
  alt?: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export function LazyImage({
  src,
  alt = "",
  className = "",
  placeholder,
  onLoad,
  onError,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);

  // Detect if src is video
  const isVideo = typeof src === "string" && src.toLowerCase().endsWith(".mp4");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (mediaRef.current) {
      observer.observe(mediaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div ref={mediaRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}

      {isInView && (
        <>
          {isVideo ? (
            <video
              src={src}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              controls={controls}
              onLoadedData={handleLoad}
              onError={handleError}
            />
          ) : (
            <img
              src={hasError ? placeholder || "/placeholder.jpg" : src}
              alt={alt}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={handleLoad}
              onError={handleError}
              loading="lazy"
            />
          )}
        </>
      )}

      {hasError && !placeholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-zinc-400">
          <span className="text-sm">
            Failed to load {isVideo ? "video" : "image"}
          </span>
        </div>
      )}
    </div>
  );
}
