import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Lightbulb, 
  Zap, 
  Sparkles, 
  Rocket,
  Brain, 
  Target,
  TrendingUp,
  Users,
  Crown,
  ShoppingBag,
  Megaphone,
  ArrowLeftRight,
  Plus,
  Building2,
  Smartphone,
  Globe,
  BookOpen,
  Video,
  MessageCircle,
  Award,
  DollarSign,
  Heart,
  Gamepad2,
  Car,
  Home,
  Briefcase,
  Coffee,
  Music,
  Camera,
  Palette
} from 'lucide-react';

export function BusinessModelInnovationSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="max-w-6xl w-full space-y-4">
        
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Brain className="w-3 h-3" />
            商业模式创新脑暴
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            商业模式整合与创新产品设想
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            基于前面9种商业模式，脑暴创新产品形态和商业逻辑组合
          </motion.p>
        </motion.div>

        {/* 商业模式标签云 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-violet-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-violet-600" />
            可组合的商业模式标签
          </h3>
          <div className="flex flex-wrap gap-1 text-xs">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">To C</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">To B</span>
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">B2C平台</span>
            <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">C2C平台</span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">增值服务</span>
            <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full">会员制</span>
            <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full">广告变现</span>
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">私域流量</span>
            <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full">数据变现</span>
          </div>
        </motion.div>

        {/* 投资服务行业创新产品脑暴 */}
        <motion.div 
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* 智能投顾产品 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-blue-100 rounded">
                <Brain className="w-3 h-3 text-blue-600" />
              </div>
              <h4 className="text-sm text-gray-900">AI智能投顾平台</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1.5 rounded">
                <strong>产品设想：</strong>个性化投资组合AI推荐
              </div>
              <div>
                <p><strong>商业模式组合：</strong></p>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-xs">To C</span>
                  <span className="bg-amber-100 text-amber-700 px-1 py-0.5 rounded text-xs">会员制</span>
                  <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值服务</span>
                </div>
              </div>
              <div className="bg-gray-50 p-1.5 rounded text-xs">
                <strong>收入模式：</strong>基础免费+高级会员999元/年+专业版2999元/年
              </div>
            </div>
          </motion.div>

          {/* 投资社区产品 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-green-100 rounded">
                <Users className="w-3 h-3 text-green-600" />
              </div>
              <h4 className="text-sm text-gray-900">投资者社区平台</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1.5 rounded">
                <strong>产品设想：</strong>投资经验分享+策略讨论
              </div>
              <div>
                <p><strong>商业模式组合：</strong></p>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="bg-cyan-100 text-cyan-700 px-1 py-0.5 rounded text-xs">C2C</span>
                  <span className="bg-rose-100 text-rose-700 px-1 py-0.5 rounded text-xs">广告变现</span>
                  <span className="bg-amber-100 text-amber-700 px-1 py-0.5 rounded text-xs">会员制</span>
                </div>
              </div>
              <div className="bg-gray-50 p-1.5 rounded text-xs">
                <strong>收入模式：</strong>知识付费+广告收入+会员订阅+投顾撮合佣金
              </div>
            </div>
          </motion.div>

          {/* 企业投资决策工具 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-purple-100 rounded">
                <Building2 className="w-3 h-3 text-purple-600" />
              </div>
              <h4 className="text-sm text-gray-900">企业投资决策SaaS</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1.5 rounded">
                <strong>产品设想：</strong>风险评估+投资组合管理
              </div>
              <div>
                <p><strong>商业模式组合：</strong></p>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="bg-green-100 text-green-700 px-1 py-0.5 rounded text-xs">To B</span>
                  <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值服务</span>
                  <span className="bg-teal-100 text-teal-700 px-1 py-0.5 rounded text-xs">数据变现</span>
                </div>
              </div>
              <div className="bg-gray-50 p-1.5 rounded text-xs">
                <strong>收入模式：</strong>基础版9999元/年+企业版29999元/年+定制开发
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 跨行业创新产品脑暴 */}
        <motion.div 
          className="grid grid-cols-4 gap-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {/* 教育培训 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-indigo-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-indigo-100 rounded">
                <BookOpen className="w-2 h-2 text-indigo-600" />
              </div>
              <h4 className="text-xs text-gray-900">AI学习平台</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-indigo-50 p-1 rounded text-xs">
                个性化学习路径推荐
              </div>
              <div className="flex flex-wrap gap-0.5">
                <span className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-xs">To C</span>
                <span className="bg-amber-100 text-amber-700 px-1 py-0.5 rounded text-xs">会员</span>
              </div>
              <div className="text-xs">基础免费+会员99元/月</div>
            </div>
          </motion.div>

          {/* 电商零售 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-orange-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-orange-100 rounded">
                <ShoppingBag className="w-2 h-2 text-orange-600" />
              </div>
              <h4 className="text-xs text-gray-900">社交电商平台</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-orange-50 p-1 rounded text-xs">
                内容种草+直播带货
              </div>
              <div className="flex flex-wrap gap-0.5">
                <span className="bg-orange-100 text-orange-700 px-1 py-0.5 rounded text-xs">B2C</span>
                <span className="bg-rose-100 text-rose-700 px-1 py-0.5 rounded text-xs">广告</span>
              </div>
              <div className="text-xs">佣金3%+广告收入</div>
            </div>
          </motion.div>

          {/* 健康医疗 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-red-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-red-100 rounded">
                <Heart className="w-2 h-2 text-red-600" />
              </div>
              <h4 className="text-xs text-gray-900">AI健康管家</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-red-50 p-1 rounded text-xs">
                健康数据分析+专家咨询
              </div>
              <div className="flex flex-wrap gap-0.5">
                <span className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-xs">To C</span>
                <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值</span>
              </div>
              <div className="text-xs">基础免费+专家咨询299元</div>
            </div>
          </motion.div>

          {/* 企业服务 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-teal-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-teal-100 rounded">
                <Briefcase className="w-2 h-2 text-teal-600" />
              </div>
              <h4 className="text-xs text-gray-900">智能HR平台</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-teal-50 p-1 rounded text-xs">
                AI招聘+员工管理
              </div>
              <div className="flex flex-wrap gap-0.5">
                <span className="bg-green-100 text-green-700 px-1 py-0.5 rounded text-xs">To B</span>
                <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值</span>
              </div>
              <div className="text-xs">基础版5999元/年+定制</div>
            </div>
          </motion.div>
        </motion.div>

        {/* 商业模式组合创新思路 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center flex items-center justify-center gap-2">
            <Lightbulb className="w-3 h-3 text-yellow-600" />
            商业模式组合创新思路
          </h3>
          <div className="grid grid-cols-5 gap-2 text-xs">
            {/* 双边驱动 */}
            <div className="bg-gradient-to-b from-blue-50 to-green-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <ArrowLeftRight className="w-2 h-2" />
                双边驱动模式
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• C2C + 广告变现</li>
                <li>• B2C + 会员制</li>
                <li>• To B + To C混合</li>
              </ul>
            </div>

            {/* 分层订阅 */}
            <div className="bg-gradient-to-b from-purple-50 to-amber-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Crown className="w-2 h-2" />
                分层订阅模式
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 免费版引流</li>
                <li>• 基础会员留存</li>
                <li>• 高级会员变现</li>
              </ul>
            </div>

            {/* 数据驱动 */}
            <div className="bg-gradient-to-b from-rose-50 to-orange-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Target className="w-2 h-2" />
                数据变现模式
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 用户行为分析</li>
                <li>• 精准广告投放</li>
                <li>• 数据报告售卖</li>
              </ul>
            </div>

            {/* 生态整合 */}
            <div className="bg-gradient-to-b from-teal-50 to-cyan-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Globe className="w-2 h-2" />
                生态整合模式
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 多产品矩阵</li>
                <li>• 跨平台导流</li>
                <li>• 服务生态协同</li>
              </ul>
            </div>

            {/* AI赋能 */}
            <div className="bg-gradient-to-b from-indigo-50 to-violet-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Zap className="w-2 h-2" />
                AI赋能模式
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 智能推荐算法</li>
                <li>• 个性化服务</li>
                <li>• 效率提升收费</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 成功要素总结 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-violet-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <Rocket className="w-3 h-3" />
            商业模式创新成功要素
          </h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">用户价值</h4>
              <p className="text-xs">解决真实痛点，创造核心价值</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">商业逻辑</h4>
              <p className="text-xs">清晰的盈利路径，可持续增长</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">技术支撑</h4>
              <p className="text-xs">AI等新技术提升效率和体验</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">模式创新</h4>
              <p className="text-xs">多种商业模式灵活组合应用</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}