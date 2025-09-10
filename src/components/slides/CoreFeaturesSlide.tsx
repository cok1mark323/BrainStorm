import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Brain, 
  Database, 
  Shield, 
  BarChart3, 
  Users,
  MessageSquare,
  Search,
  AlertTriangle,
  TrendingUp,
  FileText,
  Settings,
  Globe
} from 'lucide-react';

export function CoreFeaturesSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-indigo-50 to-purple-50">
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
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs">
              <Settings className="w-3 h-3" />
              功能架构
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">
              <Brain className="w-3 h-3" />
              AI驱动
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            核心功能与服务架构
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            以AI智能体为核心，构建投研-决策-执行-监控的完整服务闭环
          </motion.p>
        </motion.div>

        {/* 核心功能模块 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-sm text-gray-900">AI智能分析</h3>
            </div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 市场趋势预测</li>
              <li>• 个股深度分析</li>
              <li>• 宏观经济研判</li>
              <li>• 行业比较研究</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Database className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-sm text-gray-900">数据服务</h3>
            </div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 实时行情数据</li>
              <li>• 财务数据分析</li>
              <li>• 另类数据挖掘</li>
              <li>• 定制化指标</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-purple-600" />
              </div>
              <h3 className="text-sm text-gray-900">投资组合</h3>
            </div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 资产配置建议</li>
              <li>• 风险评估模型</li>
              <li>• 业绩归因分析</li>
              <li>• 组合优化算法</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-orange-600" />
              </div>
              <h3 className="text-sm text-gray-900">风险监控</h3>
            </div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 实时风险监测</li>
              <li>• 预警机制</li>
              <li>• 压力测试</li>
              <li>• 合规检查</li>
            </ul>
          </div>
        </motion.div>

        {/* AI智能体详细功能 */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-lg border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-600" />
            AI智能体核心能力
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm text-blue-800 mb-2 flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  智能研究助手
                </h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• 自动筛选投资标的</li>
                  <li>• 生成深度研究报告</li>
                  <li>• 多因子模型分析</li>
                  <li>• 同业对比分析</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="text-sm text-green-800 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  智能投顾对话
                </h4>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• 自然语言查询</li>
                  <li>• 实时问答服务</li>
                  <li>• 个性化建议</li>
                  <li>• 投资逻辑解释</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="text-sm text-purple-800 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  市场洞察引擎
                </h4>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• 市场情绪分析</li>
                  <li>• 事件驱动研究</li>
                  <li>• 资金流向追踪</li>
                  <li>• 热点主题挖掘</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="text-sm text-orange-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  风险预警系统
                </h4>
                <ul className="text-xs text-orange-700 space-y-1">
                  <li>• 异常交易监测</li>
                  <li>• 黑天鹅事件预警</li>
                  <li>• 流动性风险评估</li>
                  <li>• 信用风险监控</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h4 className="text-sm text-indigo-800 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  报告生成器
                </h4>
                <ul className="text-xs text-indigo-700 space-y-1">
                  <li>• 自动化报告生成</li>
                  <li>• 可视化图表制作</li>
                  <li>• 多格式输出</li>
                  <li>• 定制化模板</li>
                </ul>
              </div>
              
              <div className="p-4 bg-cyan-50 rounded-lg">
                <h4 className="text-sm text-cyan-800 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  协作平台
                </h4>
                <ul className="text-xs text-cyan-700 space-y-1">
                  <li>• 团队协作工具</li>
                  <li>• 知识库管理</li>
                  <li>• 决策流程跟踪</li>
                  <li>• 权限分级管理</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 服务架构图 */}
        <motion.div 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6" />
            <h3 className="text-lg">技术架构优势</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6" />
              </div>
              <h4 className="font-medium">AI大模型接入</h4>
              <p className="text-indigo-100 text-xs">低成本接入顶级AI能力</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Database className="w-6 h-6" />
              </div>
              <h4 className="font-medium">云原生架构</h4>
              <p className="text-indigo-100 text-xs">弹性扩展，按需付费</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-medium">安全合规</h4>
              <p className="text-indigo-100 text-xs">金融级安全标准</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Settings className="w-6 h-6" />
              </div>
              <h4 className="font-medium">模块化设计</h4>
              <p className="text-indigo-100 text-xs">灵活组合，快速迭代</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}