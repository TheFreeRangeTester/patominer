interface LoadingSkeletonProps {
  variant?: "card" | "text" | "circle" | "button";
  count?: number;
  className?: string;
}

export default function LoadingSkeleton({
  variant = "text",
  count = 1,
  className = "",
}: LoadingSkeletonProps) {
  const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg";

  const variants = {
    card: "w-full h-64",
    text: "w-full h-4",
    circle: "w-12 h-12 rounded-full",
    button: "w-32 h-10",
  };

  const skeletonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (count === 1) {
    return <div className={skeletonClasses} aria-label="Loading..." />;
  }

  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={skeletonClasses} aria-label="Loading..." />
      ))}
    </div>
  );
}

// Skeleton específico para tarjetas de workshop
export function WorkshopCardSkeleton() {
  return (
    <div className="border rounded-lg p-6 shadow-lg">
      <LoadingSkeleton variant="card" className="mb-4" />
      <LoadingSkeleton variant="text" className="h-8 mb-4" />
      <LoadingSkeleton variant="text" count={3} className="mb-2" />
      <LoadingSkeleton variant="button" className="mt-4" />
    </div>
  );
}

// Skeleton para lista de workshops
export function WorkshopsListSkeleton({ count = 2 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <WorkshopCardSkeleton key={index} />
      ))}
    </div>
  );
}
