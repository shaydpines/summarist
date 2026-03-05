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
      className={`relative overflow-hidden bg-gray-200 rounded ${className}`}
      style={{ width, height }}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  );
}