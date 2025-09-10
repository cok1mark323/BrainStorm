import { PresentationSlide } from '../PresentationSlide';
import { motion } from 'motion/react';
import { DollarSign, TrendingUp, Target, Lightbulb } from 'lucide-react';

export function CoverSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl w-full space-y-6">
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Lightbulb className="w-3 h-3" />
            内部培训 · 商业模式解析
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            什么是
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              互联网软件
            </span>
            商业模式？
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            简单来说，就是软件公司如何<strong>创造价值</strong>、<strong>获取用户</strong>、<strong>赚到钱</strong>，并且能够<strong>持续发展</strong>的完整逻辑
          </motion.p>
        </motion.div>

        {/* 核心要素 - 横向布局 */}
        <motion.div 
          className="grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* 盈利模式 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-green-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-green-100 rounded-lg">
                <DollarSign className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-base text-gray-900">盈利模式</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              软件产品通过哪些路径将用户价值转化为企业收入？
              包括直接付费、间接变现、平台抽佣等多种收入来源组合，
              构建可持续的商业闭环。
            </p>
          </motion.div>

          {/* 增长策略 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-blue-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-blue-100 rounded-lg">
                <TrendingUp className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-base text-gray-900">增长策略</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              如何系统性地获取用户、提升留存、促进增长？
              通过产品策略、营销手段、用户体验优化等方式，
              建立用户获取-激活-留存-变现的增长飞轮。
            </p>
          </motion.div>

          {/* 用户价值 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-purple-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-purple-100 rounded-lg">
                <Target className="w-4 h-4 text-purple-600" />
              </div>
              <h3 className="text-base text-gray-900">用户价值</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              软件为用户解决什么核心问题，创造什么独特价值？
              需要明确用户痛点、需求场景，设计差异化的价值主张，
              让用户愿意选择并持续使用我们的产品。
            </p>
          </motion.div>
        </motion.div>

        {/* 补充要素 - 横向紧凑布局 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {/* 成本与用户 */}
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-base text-gray-900 mb-2">成本结构</h3>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <div className="text-center p-1 bg-orange-50 rounded">
                <div className="text-xs mb-0.5">👨‍💻</div>
                <div className="text-gray-700">外包开发</div>
              </div>
              <div className="text-center p-1 bg-orange-50 rounded">
                <div className="text-xs mb-0.5">☁️</div>
                <div className="text-gray-700">云服务器</div>
              </div>
              <div className="text-center p-1 bg-orange-50 rounded">
                <div className="text-xs mb-0.5">🤖</div>
                <div className="text-gray-700">AI智能体</div>
              </div>
              <div className="text-center p-1 bg-orange-50 rounded">
                <div className="text-xs mb-0.5">🔧</div>
                <div className="text-gray-700">运维支持</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-base text-gray-900 mb-2">目标用户</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 p-2 bg-indigo-50 rounded-lg">
                <div className="text-sm">👤</div>
                <div>
                  <div className="text-gray-900">个人用户</div>
                  <div className="text-xs text-gray-600">个人投资者、理财用户</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-indigo-50 rounded-lg">
                <div className="text-sm">🏢</div>
                <div>
                  <div className="text-gray-900">企业用户</div>
                  <div className="text-xs text-gray-600">金融机构、投资公司</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 核心公式 - 简化版 */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h3 className="text-base mb-2">商业模式核心公式</h3>
          <div className="flex items-center justify-center gap-2 text-xs">
            <span className="bg-white/20 px-2 py-1 rounded">用户价值</span>
            <span className="text-sm">+</span>
            <span className="bg-white/20 px-2 py-1 rounded">盈利方式</span>
            <span className="text-sm">+</span>
            <span className="bg-white/20 px-2 py-1 rounded">增长策略</span>
          </div>
        </motion.div>
      </div>

    </PresentationSlide>
  );
}