import { useState, useEffect } from 'react';
import { SlideNavigation } from './components/SlideNavigation';
import { CoverSlide } from './components/slides/CoverSlide';
import { ToCvsToBSlide } from './components/slides/ToCvsToBSlide';
import { ToCBusinessModelSlide } from './components/slides/ToCBusinessModelSlide';
import { ToBBusinessModelSlide } from './components/slides/ToBBusinessModelSlide';
import { B2CBusinessModelSlide } from './components/slides/B2CBusinessModelSlide';
import { ValueAddedServicesSlide } from './components/slides/ValueAddedServicesSlide';
import { MembershipBusinessModelSlide } from './components/slides/MembershipBusinessModelSlide';
import { AdRevenueBusinessModelSlide } from './components/slides/AdRevenueBusinessModelSlide';
import { C2CBusinessModelSlide } from './components/slides/C2CBusinessModelSlide';
import { BusinessModelInnovationSlide } from './components/slides/BusinessModelInnovationSlide';
import { MoreInnovationExamplesSlide } from './components/slides/MoreInnovationExamplesSlide';
import { CompetitorWindSlide } from './components/slides/CompetitorWindSlide';
import { CompetitorTHSSlide } from './components/slides/CompetitorTHSSlide';
import { CompetitorEMSlide } from './components/slides/CompetitorEMSlide';
import { CompetitorXueqiuSlide } from './components/slides/CompetitorXueqiuSlide';
import { CompetitorBloombergSlide } from './components/slides/CompetitorBloombergSlide';
import { CompetitorRobinhoodSlide } from './components/slides/CompetitorRobinhoodSlide';
import { CompetitorEToroSlide } from './components/slides/CompetitorEToroSlide';
import { DevelopmentCostAnalysisSlide } from './components/slides/DevelopmentCostAnalysisSlide';
import { QAInteractiveSlide } from './components/slides/QAInteractiveSlide';
import { PlaceholderSlide } from './components/slides/PlaceholderSlide';
import { motion, AnimatePresence } from 'motion/react';

// 定义演示大纲
const slideContents = [
  {
    component: CoverSlide,
    title: "封面"
  },
  {
    component: ToCvsToBSlide,
    title: "To C vs To B 产品"
  },
  {
    component: ToCBusinessModelSlide,
    title: "To C 商业模式解析"
  },
  {
    component: ToBBusinessModelSlide,
    title: "To B 商业模式解析"
  },
  {
    component: B2CBusinessModelSlide,
    title: "B2C 平台商业模式"
  },
  {
    component: ValueAddedServicesSlide,
    title: "增值服务盈利模式"
  },
  {
    component: MembershipBusinessModelSlide,
    title: "会员制商业模式"
  },
  {
    component: AdRevenueBusinessModelSlide,
    title: "广告变现商业模式"
  },
  {
    component: C2CBusinessModelSlide,
    title: "C2C平台商业模式"
  },
  {
    component: CompetitorWindSlide,
    title: "竞品分析 - 万德"
  },
  {
    component: CompetitorTHSSlide,
    title: "竞品分析 - 同花顺"
  },
  {
    component: CompetitorEMSlide,
    title: "竞品分析 - 东方财富"
  },
  {
    component: CompetitorXueqiuSlide,
    title: "竞品分析 - 雪球"
  },
  {
    component: CompetitorBloombergSlide,
    title: "国际竞品 - Bloomberg Terminal"
  },
  {
    component: CompetitorRobinhoodSlide,
    title: "国际竞品 - Robinhood"
  },
  {
    component: CompetitorEToroSlide,
    title: "国际竞品 - eToro"
  },
  {
    component: BusinessModelInnovationSlide,
    title: "商业模式创新脑暴"
  },
  {
    component: MoreInnovationExamplesSlide,
    title: "更多创新案例"
  },
  {
    component: DevelopmentCostAnalysisSlide,
    title: "自研成本预算分析"
  },
  {
    component: QAInteractiveSlide,
    title: "Q&A 互动环节"
  }
];

export default function App() {
  // 开发时保持当前页面，演示时从第一页开始
  const [currentSlide, setCurrentSlide] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('presentation-current-slide');
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slideContents.length - 1) {
      const newSlide = currentSlide + 1;
      setDirection(1);
      setCurrentSlide(newSlide);
      localStorage.setItem('presentation-current-slide', newSlide.toString());
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1;
      setDirection(-1);
      setCurrentSlide(newSlide);
      localStorage.setItem('presentation-current-slide', newSlide.toString());
    }
  };

  // 重置到第一页（演示模式）
  const resetToFirstSlide = () => {
    setDirection(-1);
    setCurrentSlide(0);
    localStorage.setItem('presentation-current-slide', '0');
  };

  const goToSlide = (slideIndex: number) => {
    setDirection(slideIndex > currentSlide ? 1 : -1);
    setCurrentSlide(slideIndex);
    // 保存当前页面状态
    localStorage.setItem('presentation-current-slide', slideIndex.toString());
  };

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        previousSlide();
      } else if (event.key >= '1' && event.key <= '9') {
        const slideNumber = parseInt(event.key) - 1;
        if (slideNumber < slideContents.length) {
          goToSlide(slideNumber);
        }
      } else if (event.key === 'Home' || (event.key === 'r' && event.ctrlKey)) {
        // Ctrl+R 或 Home 键重置到第一页
        event.preventDefault();
        resetToFirstSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slideContents[currentSlide].component;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="w-full h-screen bg-white overflow-hidden relative">
      {/* 幻灯片内容 */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* 导航控制 */}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slideContents.length}
        onPrevious={previousSlide}
        onNext={nextSlide}
        onGoToSlide={goToSlide}
      />

      {/* 标题指示器 */}
      <div className="fixed top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border">
        <h3 className="text-sm text-gray-600">
          {slideContents[currentSlide].title}
        </h3>
      </div>

      {/* 快捷键提示 */}
      <div className="fixed top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border">
        <p className="text-xs text-gray-500">
          使用 ← → 方向键导航 | 空格键下一页 | Home键回到第一页
        </p>
      </div>
    </div>
  );
}