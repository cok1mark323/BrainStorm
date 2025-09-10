import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  DollarSign, 
  Users, 
  Repeat, 
  Crown, 
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  Clock,
  Target,
  Award,
  Database
} from 'lucide-react';

export function BusinessModelDesignSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl w-full space-y-6">
        
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
              <DollarSign className="w-3 h-3" />
              商业模式
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
              <TrendingUp className="w-3 h-3" />
              多元化收入
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            混合商业模式设计
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            SaaS订阅 + 增值服务 + 数据授权的多元化收入模式，确保商业可持续性
          </motion.p>
        </motion.div>

        {/* 核心收入模式 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Repeat className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg text-gray-900">SaaS订阅模式</h3>
            </div>
            <div className="space-y-3">
              <div className="text-2xl text-blue-600">40-50%</div>
              <p className="text-sm text-gray-600">主要收入来源，提供稳定现金流</p>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>基础版</span>
                  <span>2万/月</span>
                </div>
                <div className="flex justify-between">
                  <span>专业版</span>
                  <span>5万/月</span>
                </div>
                <div className="flex justify-between">
                  <span>企业版</span>
                  <span>15万/月</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Crown className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg text-gray-900">增值服务</h3>
            </div>
            <div className="space-y-3">
              <div className="text-2xl text-purple-600">30-35%</div>
              <p className="text-sm text-gray-600">高毛利率，提升客户粘性</p>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>专家咨询</span>
                  <span>2000/小时</span>
                </div>
                <div className="flex justify-between">
                  <span>定制报告</span>
                  <span>5-20万/份</span>
                </div>
                <div className="flex justify-between">
                  <span>培训服务</span>
                  <span>10-50万/项</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg text-gray-900">数据授权</h3>
            </div>
            <div className="space-y-3">
              <div className="text-2xl text-green-600">15-25%</div>
              <p className="text-sm text-gray-600">长期价值，数据资产变现</p>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>API调用</span>
                  <span>0.1-1元/次</span>
                </div>
                <div className="flex justify-between">
                  <span>数据包</span>
                  <span>10-100万/年</span>
                </div>
                <div className="flex justify-between">
                  <span>指数授权</span>
                  <span>50-500万/年</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 详细价格策略 */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-lg border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-600" />
            分层定价策略
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <h4 className="text-base text-gray-900">基础版</h4>
                <span className="text-lg text-blue-600 ml-auto">2万/月</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  基础数据服务
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  AI智能分析（限量）
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  标准报告模板
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  5个并发用户
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t text-xs text-gray-500">
                适合：小型私募、个人投资工作室
              </div>
            </div>

            <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-green-600" />
                <h4 className="text-base text-gray-900">专业版</h4>
                <span className="text-lg text-green-600 ml-auto">5万/月</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  完整数据服务
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  无限AI分析
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  定制化报告
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  20个并发用户
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  API接口服务
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t text-xs text-gray-500">
                适合：中型私募、家族办公室
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-5 h-5 text-purple-600" />
                <h4 className="text-base text-gray-900">企业版</h4>
                <span className="text-lg text-purple-600 ml-auto">15万/月</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  全场景数据覆盖
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  独立AI实例
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  专属定制开发
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  无限用户数
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  专属客户成功经理
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t text-xs text-gray-500">
                适合：大型资管、证券公司
              </div>
            </div>
          </div>
        </motion.div>

        {/* 商业价值主张 */}
        <motion.div 
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6" />
            <h3 className="text-lg">商业价值主张</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center space-y-2">
              <div className="text-2xl">70%</div>
              <h4 className="font-medium">成本降低</h4>
              <p className="text-green-100 text-xs">相比传统投研团队</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl">5x</div>
              <h4 className="font-medium">效率提升</h4>
              <p className="text-green-100 text-xs">研究分析速度</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl">24/7</div>
              <h4 className="font-medium">服务时间</h4>
              <p className="text-green-100 text-xs">全天候智能服务</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl">95%</div>
              <h4 className="font-medium">客户满意度</h4>
              <p className="text-green-100 text-xs">预期目标</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}