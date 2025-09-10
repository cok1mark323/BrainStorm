import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Brain, 
  Cpu, 
  Database, 
  Cloud, 
  Zap,
  Settings,
  Shield,
  BarChart3,
  MessageSquare,
  FileText,
  TrendingUp,
  Users
} from 'lucide-react';

export function AIIntegrationSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-purple-50 to-pink-50">
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
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">
              <Brain className="w-3 h-3" />
              AI智能体
            </div>
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs">
              <Zap className="w-3 h-3" />
              技术架构
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AI智能体集成策略
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            多层次AI架构设计，实现低成本、高效率、可扩展的智能化投资服务
          </motion.p>
        </motion.div>

        {/* AI架构层次 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-purple-600" />
              </div>
              <h3 className="text-sm text-gray-900">大模型接入</h3>
            </div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• GPT-4/Claude API</li>
              <li>• 千问/文心一言</li>
              <li>• 垂直金融模型</li>
              <li>• 多模型融合</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Database className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-sm text-gray-900">知识引擎</h3>
            </div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 向量数据库</li>
              <li>• 金融知识图谱</li>
              <li>• RAG检索增强</li>
              <li>• 实时更新机制</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Cpu className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-sm text-gray-900">推理引擎</h3>
            </div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 多agent协作</li>
              <li>• 工作流编排</li>
              <li>• 决策树优化</li>
              <li>• 结果验证</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <Cloud className="w-4 h-4 text-orange-600" />
              </div>
              <h3 className="text-sm text-gray-900">服务接口</h3>
            </div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• RESTful API</li>
              <li>• WebSocket推送</li>
              <li>• SDK封装</li>
              <li>• 监控告警</li>
            </ul>
          </div>
        </motion.div>

        {/* 核心AI智能体 */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-lg border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-purple-600" />
            核心AI智能体设计
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                <h4 className="text-sm text-purple-800">研究分析师Agent</h4>
              </div>
              <ul className="text-xs text-purple-700 space-y-1">
                <li>• 财务数据分析</li>
                <li>• 行业比较研究</li>
                <li>• 估值模型构建</li>
                <li>• 投资逻辑梳理</li>
              </ul>
              <div className="mt-3 text-xs text-purple-600">
                成本: ~1000元/月
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h4 className="text-sm text-blue-800">市场策略师Agent</h4>
              </div>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• 宏观经济分析</li>
                <li>• 市场趋势预测</li>
                <li>• 主题投资挖掘</li>
                <li>• 资产配置建议</li>
              </ul>
              <div className="mt-3 text-xs text-blue-600">
                成本: ~1500元/月
              </div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-green-600" />
                <h4 className="text-sm text-green-800">风控专家Agent</h4>
              </div>
              <ul className="text-xs text-green-700 space-y-1">
                <li>• 实时风险监测</li>
                <li>• 压力测试模拟</li>
                <li>• 合规性检查</li>
                <li>• 预警机制触发</li>
              </ul>
              <div className="mt-3 text-xs text-green-600">
                成本: ~800元/月
              </div>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-orange-600" />
                <h4 className="text-sm text-orange-800">智能客服Agent</h4>
              </div>
              <ul className="text-xs text-orange-700 space-y-1">
                <li>• 自然语言交互</li>
                <li>• 问题智能路由</li>
                <li>• 个性化回答</li>
                <li>• 学习优化机制</li>
              </ul>
              <div className="mt-3 text-xs text-orange-600">
                成本: ~500元/月
              </div>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-indigo-600" />
                <h4 className="text-sm text-indigo-800">报告生成Agent</h4>
              </div>
              <ul className="text-xs text-indigo-700 space-y-1">
                <li>• 自动化写作</li>
                <li>• 图表生成</li>
                <li>• 模板适配</li>
                <li>• 多格式输出</li>
              </ul>
              <div className="mt-3 text-xs text-indigo-600">
                成本: ~600元/月
              </div>
            </div>
            
            <div className="p-4 bg-cyan-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-cyan-600" />
                <h4 className="text-sm text-cyan-800">协调管理Agent</h4>
              </div>
              <ul className="text-xs text-cyan-700 space-y-1">
                <li>• 任务分配调度</li>
                <li>• 结果整合验证</li>
                <li>• 质量控制</li>
                <li>• 用户偏好学习</li>
              </ul>
              <div className="mt-3 text-xs text-cyan-600">
                成本: ~400元/月
              </div>
            </div>
          </div>
        </motion.div>

        {/* 技术实现优势 */}
        <motion.div 
          className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6" />
            <h3 className="text-lg">AI集成优势与成本效益</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center space-y-2">
              <div className="text-2xl">4800元</div>
              <h4 className="font-medium">月度AI成本</h4>
              <p className="text-purple-100 text-xs">全套智能体运营成本</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl">≈50万</div>
              <h4 className="font-medium">等效人力成本</h4>
              <p className="text-purple-100 text-xs">传统2-3人投研团队</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl">99%</div>
              <h4 className="font-medium">成本节约率</h4>
              <p className="text-purple-100 text-xs">相比传统人力模式</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl">秒级</div>
              <h4 className="font-medium">响应速度</h4>
              <p className="text-purple-100 text-xs">实时智能分析</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <h4 className="font-medium mb-2">外包开发策略</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-medium text-purple-100 mb-1">第一阶段（6个月）</p>
                <ul className="space-y-1 text-purple-200">
                  <li>• MVP产品开发：200-300万</li>
                  <li>• 核心AI集成：100-150万</li>
                  <li>• 基础功能测试：50-80万</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-purple-100 mb-1">运营阶段</p>
                <ul className="space-y-1 text-purple-200">
                  <li>• AI服务费用：5-8万/月</li>
                  <li>• 云服务成本：3-5万/月</li>
                  <li>• 维护升级：2-3万/月</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}