import { ReactNode } from 'react';

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
}

export function PresentationSlide({ children, className = "" }: PresentationSlideProps) {
  return (
    <div className={`w-full h-full overflow-y-auto ${className}`}>
      <div className="min-h-full flex flex-col justify-center items-center p-6">
        {children}
      </div>
    </div>
  );
}