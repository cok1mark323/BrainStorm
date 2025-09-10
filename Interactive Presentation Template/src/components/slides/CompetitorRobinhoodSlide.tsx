import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Smartphone, 
  TrendingUp, 
  Users, 
  Target,
  DollarSign,
  BarChart3,
  Globe,
  Award,
  Zap,
  Crown,
  Heart,
  ArrowLeftRight,
  Shield,
  CheckCircle,
  AlertTriangle,
  Star,
  TrendingDown,
  Gift
} from 'lucide-react';

export function CompetitorRobinhoodSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-green-50 to-teal-50">
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
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
              <Smartphone className="w-3 h-3" />
              国际竞品
            </div>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs">
              <div className="w-3 h-2 bg-red-600 rounded-sm"></div>
              🇺🇸 美国
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Robinhood：零佣金交易革命者
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            成立于2013年，颠覆传统券商模式，让投资平民化的美国金融科技独角兽
          </motion.p>
        </motion.div>

        {/* 商业模式定位 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-green-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-green-600" />
            颠覆性的To C金融服务商业模式
          </h3>
          <div className="grid grid-cols-5 gap-1 text-xs">
            <div className="bg-blue-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-blue-600" />
                <strong className="text-blue-800">核心：To C</strong>
              </div>
              <p className="text-blue-700">年轻散户投资者</p>
            </div>
            <div className="bg-teal-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-teal-600" />
                <strong className="text-teal-800">订单流变现</strong>
              </div>
              <p className="text-teal-700">PFOF收入模式</p>
            </div>
            <div className="bg-purple-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-purple-600" />
                <strong className="text-purple-800">增值服务</strong>
              </div>
              <p className="text-purple-700">Robinhood Gold</p>
            </div>
            <div className="bg-orange-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-orange-600" />
                <strong className="text-orange-800">利息收入</strong>
              </div>
              <p className="text-orange-700">现金管理业务</p>
            </div>
            <div className="bg-amber-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <AlertTriangle className="w-3 h-3 text-amber-600" />
                <strong className="text-amber-800">加密货币</strong>
              </div>
              <p className="text-amber-700">数字资产交易</p>
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
          {/* 零佣金交易 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-green-100 rounded">
                <ArrowLeftRight className="w-2 h-2 text-green-600" />
              </div>
              <h4 className="text-xs text-gray-900">零佣金交易</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1 rounded text-xs">
                <strong>定位：</strong>免费股票交易平台
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 零佣金股票交易</li>
                  <li>• ETF投资服务</li>
                  <li>• 期权交易功能</li>
                  <li>• 碎股投资支持</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>特色：</strong>游戏化界面设计
              </div>
            </div>
          </motion.div>

          {/* Robinhood Gold */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-amber-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-amber-100 rounded">
                <Crown className="w-2 h-2 text-amber-600" />
              </div>
              <h4 className="text-xs text-gray-900">Robinhood Gold</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-amber-50 p-1 rounded text-xs">
                <strong>定位：</strong>付费会员服务
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 保证金交易服务</li>
                  <li>• 专业研究报告</li>
                  <li>• 更大投资额度</li>
                  <li>• 优先客服支持</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>收费：</strong>$5/月
              </div>
            </div>
          </motion.div>

          {/* 加密货币交易 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-blue-100 rounded">
                <Zap className="w-2 h-2 text-blue-600" />
              </div>
              <h4 className="text-xs text-gray-900">加密货币</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1 rounded text-xs">
                <strong>定位：</strong>数字资产交易
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 比特币交易</li>
                  <li>• 以太坊等主流币</li>
                  <li>• 24/7交易服务</li>
                  <li>• 数字钱包功能</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>收入：</strong>价差+交易费
              </div>
            </div>
          </motion.div>

          {/* 现金管理 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-purple-100 rounded">
                <DollarSign className="w-2 h-2 text-purple-600" />
              </div>
              <h4 className="text-xs text-gray-900">现金管理</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1 rounded text-xs">
                <strong>定位：</strong>高收益储蓄服务
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 高息储蓄账户</li>
                  <li>• 银行卡服务</li>
                  <li>• 自动投资功能</li>
                  <li>• 支出分类管理</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>收益：</strong>4.5% APY
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 用户画像与增长数据 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Users className="w-3 h-3 text-green-600" />
              Robinhood用户画像与数据
            </h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Users className="w-2 h-2 text-green-600" />
                    <span className="text-xs">注册用户</span>
                  </div>
                  <p className="text-sm text-green-800">2300万+</p>
                  <p className="text-xs text-green-600">快速增长中</p>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Heart className="w-2 h-2 text-blue-600" />
                    <span className="text-xs">平均年龄</span>
                  </div>
                  <p className="text-sm text-blue-800">31岁</p>
                  <p className="text-xs text-blue-600">千禧一代为主</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-purple-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <DollarSign className="w-2 h-2 text-purple-600" />
                    <span className="text-xs">平均账户</span>
                  </div>
                  <p className="text-sm text-purple-800">$3,500</p>
                  <p className="text-xs text-purple-600">小额投资为主</p>
                </div>
                <div className="bg-orange-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Crown className="w-2 h-2 text-orange-600" />
                    <span className="text-xs">Gold用户</span>
                  </div>
                  <p className="text-sm text-orange-800">600万+</p>
                  <p className="text-xs text-orange-600">付费转化率26%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <BarChart3 className="w-3 h-3 text-blue-600" />
              财务表现（2023年）
            </h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="w-2 h-2 text-blue-600" />
                    <span className="text-xs">净营收</span>
                  </div>
                  <p className="text-sm text-blue-800">19.3亿美元</p>
                  <p className="text-xs text-blue-600">同比增长37%</p>
                </div>
                <div className="bg-red-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingDown className="w-2 h-2 text-red-600" />
                    <span className="text-xs">净亏损</span>
                  </div>
                  <p className="text-sm text-red-800">5.41亿美元</p>
                  <p className="text-xs text-red-600">仍在亏损中</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-2 rounded">
                <h5 className="text-sm text-gray-800 mb-1">收入构成</h5>
                <div className="grid grid-cols-3 gap-1 text-xs">
                  <div className="text-center">
                    <p className="text-green-700">PFOF: 42%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-700">利息: 32%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-purple-700">其他: 26%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Robinhood商业模式创新点 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">Robinhood商业模式创新分析</h3>
          <div className="grid grid-cols-5 gap-2 text-xs">
            {/* 零佣金革命 */}
            <div className="bg-green-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Gift className="w-2 h-2" />
                零佣金革命
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 颠覆传统券商收费模式</li>
                <li>• 降低投资门槛至$0</li>
                <li>• 吸引年轻用户群体</li>
                <li>• 推动行业标准改变</li>
              </ul>
            </div>

            {/* PFOF收入模式 */}
            <div className="bg-blue-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <ArrowLeftRight className="w-2 h-2" />
                PFOF变现
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 订单流支付模式</li>
                <li>• 与做市商合作</li>
                <li>• 用户免费，B端付费</li>
                <li>• 规模效应显著</li>
              </ul>
            </div>

            {/* 移动优先 */}
            <div className="bg-purple-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Smartphone className="w-2 h-2" />
                移动优先
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 手机App为主要载体</li>
                <li>• 简洁直观的UI设计</li>
                <li>• 游戏化投资体验</li>
                <li>• 社交分享功能</li>
              </ul>
            </div>

            {/* 产品多元化 */}
            <div className="bg-orange-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Zap className="w-2 h-2" />
                产品扩张
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 股票→加密货币</li>
                <li>• 投资→现金管理</li>
                <li>• 交易→金融服务</li>
                <li>• 构建金融生态</li>
              </ul>
            </div>

            {/* 争议与挑战 */}
            <div className="bg-red-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <AlertTriangle className="w-2 h-2" />
                争议挑战
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• PFOF模式质疑</li>
                <li>• 监管压力增加</li>
                <li>• 系统稳定性问题</li>
                <li>• 盈利能力待证明</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 对中国市场的启示 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-green-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <Star className="w-3 h-3" />
            Robinhood模式对中国投资服务的启示
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">用户体验革命</h4>
              <p className="text-xs">通过极简设计和游戏化体验降低投资门槛，吸引年轻用户</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">免费+增值模式</h4>
              <p className="text-xs">核心服务免费获客，通过增值服务和隐性收费实现变现</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">移动金融创新</h4>
              <p className="text-xs">移动优先战略，从投资工具扩展到综合金融服务平台</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}