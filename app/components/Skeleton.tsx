type SkeletonProps = {
  width?: string;
  height?: string;
  className?: string;
};

export default function Skeleton({
  width = "100%",
  height = "20px",
  className = "",
}: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden rounded bg-gray-200 animate-pulse ${className}`}
      style={{ width, height }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-60" />
    </div>
  );
}