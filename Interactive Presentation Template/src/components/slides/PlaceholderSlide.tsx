import { PresentationSlide } from '../PresentationSlide';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

interface PlaceholderSlideProps {
  title: string;
  description?: string;
  slideNumber: number;
}

export function PlaceholderSlide({ title, description, slideNumber }: PlaceholderSlideProps) {
  return (
    <PresentationSlide className="bg-gradient-to-br from-gray-50 to-white">
      <motion.div 
        className="max-w-4xl text-center space-y-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Plus className="w-12 h-12 text-blue-500" />
        </motion.div>
        
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl text-gray-900">
            第 {slideNumber} 页: {title}
          </h2>
          
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
        
        <motion.div 
          className="p-8 bg-white rounded-xl border-2 border-dashed border-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-500">
            这一页的内容待完善。您可以在这里添加：
          </p>
          <ul className="mt-4 text-left text-gray-600 space-y-2">
            <li>• 核心概念和定义</li>
            <li>• 实际案例分析</li>
            <li>• 图表和可视化数据</li>
            <li>• 交互式演示</li>
          </ul>
        </motion.div>
      </motion.div>
    </PresentationSlide>
  );
}