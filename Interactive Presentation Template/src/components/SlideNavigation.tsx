import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (slideIndex: number) => void;
}

export function SlideNavigation({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext, 
  onGoToSlide 
}: SlideNavigationProps) {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border">
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="rounded-full"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            onClick={() => onGoToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentSlide 
                ? 'bg-primary w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
      
      <span className="text-sm text-muted-foreground min-w-[3rem] text-center">
        {currentSlide + 1} / {totalSlides}
      </span>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="rounded-full"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}