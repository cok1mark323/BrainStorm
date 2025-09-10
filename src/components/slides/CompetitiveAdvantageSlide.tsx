import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Zap, 
  Target, 
  Shield, 
  Users, 
  Brain,
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Settings,
  Award,
  Globe
} from 'lucide-react';

export function CompetitiveAdvantageSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-orange-50 to-red-50">
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
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs">
              <Star className="w-3 h-3" />
              竞争优势
            </div>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs">
              <Award className="w-3 h-3" />
              差异化
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            差异化竞争优势
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            构建多维度护城河，打造中小机构专属的AI驱动投资服务生态
          </motion.p>
        </motion.div>

        {/* 核心竞争优势 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg text-gray-900">精准定位</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">专注中小机构未被满足的需求</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 填补市场空白，避开巨头竞争</li>
                <li>• 深度理解目标客户痛点</li>
                <li>• 提供性价比最优解决方案</li>
                <li>• 灵活响应客户个性化需求</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg text-gray-900">AI优先</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">原生AI架构，非后加改造</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 全链路AI智能化设计</li>
                <li>• 多模型融合与协作</li>
                <li>• 持续学习优化机制</li>
                <li>• 低成本高效率运营</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg text-gray-900">成本效率</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">极致的成本控制和效率提升</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 99%成本节约vs传统模式</li>
                <li>• 24/7不间断服务能力</li>
                <li>• 可无限扩展用户规模</li>
                <li>• 边际成本趋近于零</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg text-gray-900">客户粘性</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">深度集成，形成依赖壁垒</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 嵌入客户投资决策流程</li>
                <li>• 个性化数据积累</li>
                <li>• 高切换成本</li>
                <li>• 网络效应增强</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-lg text-gray-900">敏捷迭代</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">快速响应市场变化和需求</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 模块化架构易于升级</li>
                <li>• 敏捷开发快速迭代</li>
                <li>• 实时用户反馈机制</li>
                <li>• 持续产品优化</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg text-gray-900">数据安全</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">金融级安全标准与合规</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 端到端数据加密</li>
                <li>• 多重身份验证</li>
                <li>• 审计跟踪机制</li>
                <li>• 监管合规保障</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 竞争对比分析 */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-lg border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-600" />
            竞争对比分析
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-3 text-gray-900">比较维度</th>
                  <th className="text-center p-3 text-green-600">智投慧选</th>
                  <th className="text-center p-3 text-gray-600">万德Bloomberg</th>
                  <th className="text-center p-3 text-gray-600">同花顺东财</th>
                  <th className="text-center p-3 text-gray-600">传统投顾</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b">
                  <td className="p-3 text-gray-600">目标客户</td>
                  <td className="p-3 text-center text-green-600">中小机构专属</td>
                  <td className="p-3 text-center text-gray-500">大型机构</td>
                  <td className="p-3 text-center text-gray-500">个人+机构</td>
                  <td className="p-3 text-center text-gray-500">高净值个人</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600">AI应用深度</td>
                  <td className="p-3 text-center text-green-600">全链路AI原生</td>
                  <td className="p-3 text-center text-gray-500">局部AI功能</td>
                  <td className="p-3 text-center text-gray-500">辅助AI工具</td>
                  <td className="p-3 text-center text-gray-500">几乎无AI</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600">价格水平</td>
                  <td className="p-3 text-center text-green-600">2-15万/月</td>
                  <td className="p-3 text-center text-gray-500">50-200万/年</td>
                  <td className="p-3 text-center text-gray-500">几千-几万/月</td>
                  <td className="p-3 text-center text-gray-500">50-200万/年</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600">服务深度</td>
                  <td className="p-3 text-center text-green-600">投资全流程</td>
                  <td className="p-3 text-center text-gray-500">数据+基础分析</td>
                  <td className="p-3 text-center text-gray-500">交易+资讯</td>
                  <td className="p-3 text-center text-gray-500">咨询建议</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600">响应速度</td>
                  <td className="p-3 text-center text-green-600">实时秒级</td>
                  <td className="p-3 text-center text-gray-500">分钟级</td>
                  <td className="p-3 text-center text-gray-500">分钟-小时级</td>
                  <td className="p-3 text-center text-gray-500">小时-天级</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-600">个性化程度</td>
                  <td className="p-3 text-center text-green-600">深度定制</td>
                  <td className="p-3 text-center text-gray-500">标准化为主</td>
                  <td className="p-3 text-center text-gray-500">有限定制</td>
                  <td className="p-3 text-center text-gray-500">完全定制</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 护城河建设 */}
        <motion.div 
          className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6" />
            <h3 className="text-lg">护城河建设策略</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center space-y-2">
              <Settings className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">技术壁垒</h4>
              <p className="text-orange-100 text-xs">AI算法持续优化，技术领先优势</p>
            </div>
            <div className="text-center space-y-2">
              <Database className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">数据壁垒</h4>
              <p className="text-orange-100 text-xs">客户数据积累，网络效应增强</p>
            </div>
            <div className="text-center space-y-2">
              <Users className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">生态壁垒</h4>
              <p className="text-orange-100 text-xs">深度集成客户业务流程</p>
            </div>
            <div className="text-center space-y-2">
              <Globe className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">品牌壁垒</h4>
              <p className="text-orange-100 text-xs">行业口碑与专业认知建立</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}