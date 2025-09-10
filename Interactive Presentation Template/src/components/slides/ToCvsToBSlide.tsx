import { PresentationSlide } from '../PresentationSlide';
import { motion } from 'motion/react';
import { Users, Building2, Clock, DollarSign, Target, TrendingUp } from 'lucide-react';

export function ToCvsToBSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl w-full space-y-4">
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Target className="w-3 h-3" />
            商业模式基础 · 用户分类
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            用户级产品（To C）vs 企业级产品（To B）
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            理解不同用户群体的根本差异，是设计商业模式的基础前提
          </motion.p>
        </motion.div>

        {/* 核心定义对比 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* To C 定义 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-blue-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-blue-100 rounded-lg">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base text-gray-900">To C (Consumer)</h3>
                <p className="text-xs text-gray-600">面向个人消费者</p>
              </div>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1.5 rounded">
                <strong>核心逻辑：</strong>解决个人用户的日常需求和痛点，通过情感连接和便利性获得用户忠诚度
              </div>
              <div className="space-y-0.5">
                <p><strong>用户特征：</strong>决策感性化，追求体验和性价比</p>
                <p><strong>获客方式：</strong>口碑传播、社交推荐、病毒营销</p>
                <p><strong>成功关键：</strong>产品体验、品牌认知、用户粘性</p>
              </div>
            </div>
          </motion.div>

          {/* To B 定义 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-green-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-green-100 rounded-lg">
                <Building2 className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="text-base text-gray-900">To B (Business)</h3>
                <p className="text-xs text-gray-600">面向企业客户</p>
              </div>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1.5 rounded">
                <strong>核心逻辑：</strong>提升企业效率、降低成本或增加收入，通过量化价值证明获得企业采购决策
              </div>
              <div className="space-y-0.5">
                <p><strong>用户特征：</strong>决策理性化，看重ROI和可靠性</p>
                <p><strong>获客方式：</strong>直销团队、渠道合作、行业展会</p>
                <p><strong>成功关键：</strong>解决方案完整性、服务支持、客户成功</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 关键差异矩阵 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">核心差异对比</h3>
          <div className="grid grid-cols-4 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>对比维度</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>To C 特征</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>To B 特征</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>商业模式影响</strong>
            </div>

            {/* 决策流程 */}
            <div className="p-1 bg-gray-50 rounded flex items-center gap-1">
              <Clock className="w-3 h-3 text-gray-600" />
              <span>决策流程</span>
            </div>
            <div className="p-1 bg-blue-50 rounded">
              冲动性决策<br/>
              <span className="text-xs text-gray-600">分钟到天</span>
            </div>
            <div className="p-1 bg-green-50 rounded">
              理性化决策<br/>
              <span className="text-xs text-gray-600">周到月</span>
            </div>
            <div className="p-1 bg-purple-50 rounded">
              影响获客成本和转化策略
            </div>

            {/* 付费意愿 */}
            <div className="p-1 bg-gray-50 rounded flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-gray-600" />
              <span>付费模式</span>
            </div>
            <div className="p-1 bg-blue-50 rounded">
              小额高频<br/>
              <span className="text-xs text-gray-600">价格敏感</span>
            </div>
            <div className="p-1 bg-green-50 rounded">
              大额低频<br/>
              <span className="text-xs text-gray-600">注重ROI</span>
            </div>
            <div className="p-1 bg-purple-50 rounded">
              决定定价策略和收入规模
            </div>

            {/* 增长方式 */}
            <div className="p-1 bg-gray-50 rounded flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-gray-600" />
              <span>增长驱动</span>
            </div>
            <div className="p-1 bg-blue-50 rounded">
              用户数量驱动<br/>
              <span className="text-xs text-gray-600">规模效应</span>
            </div>
            <div className="p-1 bg-green-50 rounded">
              客户价值驱动<br/>
              <span className="text-xs text-gray-600">深度服务</span>
            </div>
            <div className="p-1 bg-purple-50 rounded">
              影响扩张策略和资源配置
            </div>
          </div>
        </motion.div>

        {/* 投资服务行业的思考 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-blue-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h3 className="text-base mb-2 text-center">投资服务行业的双重特性</h3>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">个人投资者服务 (To C)</h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 情感化决策：受市场情绪影响大</li>
                <li>• 教育需求：需要投资知识普及</li>
                <li>• 便民工具：简化投资流程和体验</li>
                <li>• 社交属性：投资交流和跟随</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">机构客户服务 (To B)</h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 专业工具：复杂的分析和风控系统</li>
                <li>• 合规要求：满足监管和内控需求</li>
                <li>• 定制化：针对机构特定业务需求</li>
                <li>• 集成能力：与现有系统无缝对接</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </PresentationSlide>
  );
}