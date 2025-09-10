import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Users, 
  TrendingUp, 
  Copy, 
  Target,
  DollarSign,
  BarChart3,
  Globe,
  Award,
  MessageCircle,
  Crown,
  Heart,
  ArrowLeftRight,
  Zap,
  CheckCircle,
  AlertTriangle,
  Star,
  Eye,
  UserPlus
} from 'lucide-react';

export function CompetitorEToroSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl w-full space-y-4">
        
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
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
              <Users className="w-3 h-3" />
              国际竞品
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
              <div className="w-3 h-2 bg-blue-600 rounded-sm"></div>
              🇮🇱 以色列
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            eToro：社交交易平台先驱
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            成立于2007年，全球领先的社交交易平台，"复制交易"模式创新者
          </motion.p>
        </motion.div>

        {/* 商业模式定位 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-blue-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-blue-600" />
            社交驱动的多元化投资服务商业模式
          </h3>
          <div className="grid grid-cols-5 gap-1 text-xs">
            <div className="bg-cyan-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-cyan-600" />
                <strong className="text-cyan-800">C2C社交</strong>
              </div>
              <p className="text-cyan-700">投资者互动复制</p>
            </div>
            <div className="bg-green-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <strong className="text-green-800">价差收入</strong>
              </div>
              <p className="text-green-700">交易点差变现</p>
            </div>
            <div className="bg-purple-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-purple-600" />
                <strong className="text-purple-800">佣金分成</strong>
              </div>
              <p className="text-purple-700">投资大V激励</p>
            </div>
            <div className="bg-orange-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-orange-600" />
                <strong className="text-orange-800">利息收入</strong>
              </div>
              <p className="text-orange-700">资金存管收益</p>
            </div>
            <div className="bg-blue-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <AlertTriangle className="w-3 h-3 text-blue-600" />
                <strong className="text-blue-800">To B较少</strong>
            
              </div>
              <p className="text-blue-700">主要面向个人</p>
            </div>
          </div>
        </motion.div>

        {/* 核心产品功能 */}
        <motion.div 
          className="grid grid-cols-4 gap-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* 复制交易 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-blue-100 rounded">
                <Copy className="w-2 h-2 text-blue-600" />
              </div>
              <h4 className="text-xs text-gray-900">复制交易</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1 rounded text-xs">
                <strong>定位：</strong>社交交易核心功能
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 一键复制交易者</li>
                  <li>• 实时同步操作</li>
                  <li>• 风险管理设置</li>
                  <li>• 投资组合跟踪</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>特色：</strong>自动化跟投
              </div>
            </div>
          </motion.div>

          {/* 社交网络 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-cyan-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-cyan-100 rounded">
                <MessageCircle className="w-2 h-2 text-cyan-600" />
              </div>
              <h4 className="text-xs text-gray-900">投资社区</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-cyan-50 p-1 rounded text-xs">
                <strong>定位：</strong>投资者社交网络
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 投资观点分享</li>
                  <li>• 交易策略讨论</li>
                  <li>• 大V投资者排行</li>
                  <li>• 实时动态跟踪</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>用户：</strong>3000万+注册
              </div>
            </div>
          </motion.div>

          {/* 多资产交易 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-green-100 rounded">
                <BarChart3 className="w-2 h-2 text-green-600" />
              </div>
              <h4 className="text-xs text-gray-900">多资产平台</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1 rounded text-xs">
                <strong>定位：</strong>一站式交易平台
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 股票CFD交易</li>
                  <li>• 外汇交易服务</li>
                  <li>• 加密货币交易</li>
                  <li>• 商品期货投资</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>覆盖：</strong>3000+交易品种
              </div>
            </div>
          </motion.div>

          {/* 投资者激励 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-purple-100 rounded">
                <Crown className="w-2 h-2 text-purple-600" />
              </div>
              <h4 className="text-xs text-gray-900">投资者激励</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1 rounded text-xs">
                <strong>定位：</strong>优秀投资者变现
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 复制交易分成</li>
                  <li>• 投资者等级体系</li>
                  <li>• 月度奖励计划</li>
                  <li>• 专业认证标识</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>收益：</strong>最高2%年化分成
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 全球业务数据 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Globe className="w-3 h-3 text-blue-600" />
              eToro全球业务数据
            </h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Users className="w-2 h-2 text-blue-600" />
                    <span className="text-xs">注册用户</span>
                  </div>
                  <p className="text-sm text-blue-800">3000万+</p>
                  <p className="text-xs text-blue-600">全球用户</p>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Globe className="w-2 h-2 text-green-600" />
                    <span className="text-xs">市场覆盖</span>
                  </div>
                  <p className="text-sm text-green-800">140+国家</p>
                  <p className="text-xs text-green-600">全球化布局</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-purple-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Copy className="w-2 h-2 text-purple-600" />
                    <span className="text-xs">复制交易</span>
                  </div>
                  <p className="text-sm text-purple-800">活跃投资者</p>
                  <p className="text-xs text-purple-600">数万名可复制</p>
                </div>
                <div className="bg-orange-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <DollarSign className="w-2 h-2 text-orange-600" />
                    <span className="text-xs">资产管理</span>
                  </div>
                  <p className="text-sm text-orange-800">100亿美元+</p>
                  <p className="text-xs text-orange-600">用户资产总额</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Award className="w-3 h-3 text-green-600" />
              eToro核心竞争优势
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <Copy className="w-3 h-3 text-blue-600" />
                <span><strong>复制交易先发：</strong>社交交易模式开创者</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-cyan-50 rounded">
                <MessageCircle className="w-3 h-3 text-cyan-600" />
                <span><strong>社区生态：</strong>投资者互动粘性强</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <Globe className="w-3 h-3 text-green-600" />
                <span><strong>全球化优势：</strong>跨境投资便利</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <BarChart3 className="w-3 h-3 text-purple-600" />
                <span><strong>多资产配置：</strong>丰富投资品种</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-orange-50 rounded">
                <Zap className="w-3 h-3 text-orange-600" />
                <span><strong>技术创新：</strong>不断优化用户体验</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* eToro社交交易生态分析 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">eToro社交交易生态循环</h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            {/* 新手用户 */}
            <div className="bg-blue-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <UserPlus className="w-2 h-2" />
                新手用户
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 免费注册开户</li>
                <li>• 浏览投资者排行</li>
                <li>• 学习投资知识</li>
                <li>• 小额资金试水</li>
              </ul>
              <div className="mt-1 text-center">
                <span className="bg-blue-200 text-blue-800 px-1 py-0.5 rounded text-xs">获客成本低</span>
              </div>
            </div>

            {/* 复制跟随者 */}
            <div className="bg-green-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Copy className="w-2 h-2" />
                复制跟随者
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 选择优秀投资者</li>
                <li>• 设置复制参数</li>
                <li>• 自动同步交易</li>
                <li>• 获得投资收益</li>
              </ul>
              <div className="mt-1 text-center">
                <span className="bg-green-200 text-green-800 px-1 py-0.5 rounded text-xs">主要收入来源</span>
              </div>
            </div>

            {/* 优秀投资者 */}
            <div className="bg-purple-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Crown className="w-2 h-2" />
                优秀投资者
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 展示投资业绩</li>
                <li>• 分享投资策略</li>
                <li>• 获得跟随者</li>
                <li>• 赚取分成收益</li>
              </ul>
              <div className="mt-1 text-center">
                <span className="bg-purple-200 text-purple-800 px-1 py-0.5 rounded text-xs">内容生产者</span>
              </div>
            </div>

            {/* 平台价值 */}
            <div className="bg-orange-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Star className="w-2 h-2" />
                平台价值
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 撮合供需双方</li>
                <li>• 降低投资门槛</li>
                <li>• 提供技术支持</li>
                <li>• 获得交易价差</li>
              </ul>
              <div className="mt-1 text-center">
                <span className="bg-orange-200 text-orange-800 px-1 py-0.5 rounded text-xs">平台效应</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* eToro财务表现 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <BarChart3 className="w-3 h-3 text-green-600" />
              财务表现（2023年）
            </h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="w-2 h-2 text-green-600" />
                    <span className="text-xs">净营收</span>
                  </div>
                  <p className="text-sm text-green-800">7.3亿美元</p>
                  <p className="text-xs text-green-600">同比增长18%</p>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <DollarSign className="w-2 h-2 text-blue-600" />
                    <span className="text-xs">净利润</span>
                  </div>
                  <p className="text-sm text-blue-800">0.64亿美元</p>
                  <p className="text-xs text-blue-600">实现盈利</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-2 rounded">
                <h5 className="text-sm text-gray-800 mb-1">收入构成</h5>
                <div className="grid grid-cols-3 gap-1 text-xs">
                  <div className="text-center">
                    <p className="text-green-700">价差: 75%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-700">佣金: 15%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-purple-700">其他: 10%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-3 h-3 text-red-600" />
              eToro面临的挑战
            </h4>
            <div className="space-y-2 text-xs">
              <div className="bg-red-50 p-2 rounded">
                <h5 className="text-sm text-red-800 mb-1">监管风险</h5>
                <ul className="space-y-0.5 text-xs text-red-700">
                  <li>• CFD交易监管趋严</li>
                  <li>• 不同国家监管差异</li>
                  <li>• 杠杆限制政策影响</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-2 rounded">
                <h5 className="text-sm text-orange-800 mb-1">竞争加剧</h5>
                <ul className="space-y-0.5 text-xs text-orange-700">
                  <li>• 传统券商数字化转型</li>
                  <li>• 新兴fintech竞争</li>
                  <li>• 产品同质化趋势</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 对中国市场的启示 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-blue-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <Star className="w-3 h-3" />
            eToro社交交易模式对中国的启示
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">社交+交易创新</h4>
              <p className="text-xs">通过社交元素降低投资门槛，让小白用户也能参与投资</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">双边激励机制</h4>
              <p className="text-xs">投资大V通过分享获得收益，平台通过撮合获得价差</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">全球化视野</h4>
              <p className="text-xs">多资产、多市场配置，为用户提供全球投资机会</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}