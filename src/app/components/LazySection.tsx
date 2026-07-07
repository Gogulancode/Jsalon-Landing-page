import { useEffect, useRef, useState, lazy, Suspense, type ComponentType } from 'react';

type ImportFn = () => Promise<{ default: ComponentType<unknown> }>;

interface LazySectionProps {
  importFn: ImportFn;
  className?: string;
  placeholderHeight?: string;
}

export default function LazySection({ importFn, className, placeholderHeight = 'min-h-[16rem]' }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  const Component = shouldLoad ? lazy(importFn) : null;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Component ? (
        <Suspense fallback={<div className={placeholderHeight} />}>
          <Component />
        </Suspense>
      ) : (
        <div className={placeholderHeight} />
      )}
    </div>
  );
}
