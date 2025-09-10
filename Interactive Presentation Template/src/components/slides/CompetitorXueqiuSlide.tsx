import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  MessageCircle, 
  TrendingUp, 
  Users, 
  Target,
  DollarSign,
  BarChart3,
  Globe,
  Award,
  ArrowLeftRight,
  Crown,
  Megaphone,
  Heart,
  User,
  Zap,
  CheckCircle,
  AlertCircle,
  Star,
  Eye,
  BookOpen
} from 'lucide-react';

export function CompetitorXueqiuSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-cyan-50 to-blue-50">
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
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs">
              <MessageCircle className="w-3 h-3" />
              中国竞品
            </div>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs">
              <div className="w-3 h-2 bg-red-600 rounded-sm"></div>
              🇨🇳 中国
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            雪球：投资者社交网络平台
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            成立于2010年，专注投资者社交和智能投资服务的平台
          </motion.p>
        </motion.div>

        {/* 商业模式定位 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-cyan-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-cyan-600" />
            社交驱动的综合投资服务商业模式
          </h3>
          <div className="grid grid-cols-5 gap-1 text-xs">
            <div className="bg-cyan-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-cyan-600" />
                <strong className="text-cyan-800">C2C社交</strong>
              </div>
              <p className="text-cyan-700">投资者互动社区</p>
            </div>
            <div className="bg-blue-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-blue-600" />
                <strong className="text-blue-800">To C服务</strong>
              </div>
              <p className="text-blue-700">个人投资工具</p>
            </div>
            <div className="bg-amber-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-amber-600" />
                <strong className="text-amber-800">会员制</strong>
              </div>
              <p className="text-amber-700">付费增值服务</p>
            </div>
            <div className="bg-orange-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-orange-600" />
                <strong className="text-orange-800">B2C代销</strong>
              </div>
              <p className="text-orange-700">基金产品销售</p>
            </div>
            <div className="bg-rose-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <AlertCircle className="w-3 h-3 text-rose-600" />
                <strong className="text-rose-800">广告收入</strong>
              </div>
              <p className="text-rose-700">品牌合作有限</p>
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
          {/* 雪球社区 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-cyan-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-cyan-100 rounded">
                <MessageCircle className="w-2 h-2 text-cyan-600" />
              </div>
              <h4 className="text-xs text-gray-900">雪球社区</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-cyan-50 p-1 rounded text-xs">
                <strong>定位：</strong>投资者社交网络
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 投资观点分享</li>
                  <li>• 组合跟投功能</li>
                  <li>• 大V投资者互动</li>
                  <li>• 实时讨论交流</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>用户：</strong>5000万+注册用户
              </div>
            </div>
          </motion.div>

          {/* 蛋卷基金 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-orange-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-orange-100 rounded">
                <ArrowLeftRight className="w-2 h-2 text-orange-600" />
              </div>
              <h4 className="text-xs text-gray-900">蛋卷基金</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-orange-50 p-1 rounded text-xs">
                <strong>定位：</strong>基金投资平台
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 基金产品销售</li>
                  <li>• 组合策略推荐</li>
                  <li>• 智能定投服务</li>
                  <li>• 基金经理跟踪</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>规模：</strong>500亿+管理规模
              </div>
            </div>
          </motion.div>

          {/* 雪球Pro */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-purple-100 rounded">
                <Crown className="w-2 h-2 text-purple-600" />
              </div>
              <h4 className="text-xs text-gray-900">雪球Pro</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1 rounded text-xs">
                <strong>定位：</strong>专业投资工具
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 深度数据分析</li>
                  <li>• 专业研究报告</li>
                  <li>• 投资策略回测</li>
                  <li>• 实时预警提醒</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>收费：</strong>198元/月起
              </div>
            </div>
          </motion.div>

          {/* 雪球投顾 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-green-100 rounded">
                <User className="w-2 h-2 text-green-600" />
              </div>
              <h4 className="text-xs text-gray-900">雪球投顾</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1 rounded text-xs">
                <strong>定位：</strong>智能投资顾问
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 个性化资产配置</li>
                  <li>• 智能组合管理</li>
                  <li>• 风险评估服务</li>
                  <li>• 投资建议推荐</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>模式：</strong>管理费+超额收益分成
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 用户画像与社区生态 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Users className="w-3 h-3 text-cyan-600" />
              雪球用户画像与数据
            </h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-cyan-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Users className="w-2 h-2 text-cyan-600" />
                    <span className="text-xs">注册用户</span>
                  </div>
                  <p className="text-sm text-cyan-800">5000万+</p>
                  <p className="text-xs text-cyan-600">月活约1500万</p>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-2 h-2 text-blue-600" />
                    <span className="text-xs">核心用户</span>
                  </div>
                  <p className="text-sm text-blue-800">中产投资者</p>
                  <p className="text-xs text-blue-600">资产30-500万</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Heart className="w-2 h-2 text-green-600" />
                    <span className="text-xs">社区活跃度</span>
                  </div>
                  <p className="text-sm text-green-800">日均发帖10万+</p>
                  <p className="text-xs text-green-600">互动率较高</p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Crown className="w-2 h-2 text-purple-600" />
                    <span className="text-xs">付费转化</span>
                  </div>
                  <p className="text-sm text-purple-800">付费率约3%</p>
                  <p className="text-xs text-purple-600">ARPU较高</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Award className="w-3 h-3 text-blue-600" />
              雪球独特竞争优势
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-cyan-50 rounded">
                <MessageCircle className="w-3 h-3 text-cyan-600" />
                <span><strong>社交基因：</strong>投资者社交网络先发优势</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <Users className="w-3 h-3 text-blue-600" />
                <span><strong>高质量用户：</strong>中产阶级投资者聚集地</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <Star className="w-3 h-3 text-green-600" />
                <span><strong>KOL生态：</strong>优质投资大V内容输出</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <Globe className="w-3 h-3 text-purple-600" />
                <span><strong>港美股优势：</strong>海外投资信息专业</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-orange-50 rounded">
                <Zap className="w-3 h-3 text-orange-600" />
                <span><strong>产品创新：</strong>投资工具不断迭代升级</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 收入模式与商业化分析 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">雪球商业化收入模式分析</h3>
          <div className="grid grid-cols-6 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>收入来源</strong>
            </div>
            <div className="text-center p-1 bg-cyan-50 rounded">
              <strong>占比估算</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>商业模式</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>用户群体</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>定价策略</strong>
            </div>
            <div className="text-center p-1 bg-orange-50 rounded">
              <strong>发展阶段</strong>
            </div>

            {/* 基金代销 */}
            <div className="p-1 bg-gray-50 rounded text-center">基金代销</div>
            <div className="p-1 bg-cyan-50 rounded text-center">40%</div>
            <div className="p-1 bg-blue-50 rounded text-center">B2C平台</div>
            <div className="p-1 bg-green-50 rounded text-center">个人投资者</div>
            <div className="p-1 bg-purple-50 rounded text-center">申购费+尾佣</div>
            <div className="p-1 bg-orange-50 rounded text-center">快速增长</div>

            {/* 付费订阅 */}
            <div className="p-1 bg-gray-50 rounded text-center">付费订阅</div>
            <div className="p-1 bg-cyan-50 rounded text-center">35%</div>
            <div className="p-1 bg-blue-50 rounded text-center">会员制</div>
            <div className="p-1 bg-green-50 rounded text-center">专业投资者</div>
            <div className="p-1 bg-purple-50 rounded text-center">月费/年费</div>
            <div className="p-1 bg-orange-50 rounded text-center">稳定增长</div>

            {/* 投顾服务 */}
            <div className="p-1 bg-gray-50 rounded text-center">投顾服务</div>
            <div className="p-1 bg-cyan-50 rounded text-center">20%</div>
            <div className="p-1 bg-blue-50 rounded text-center">To C服务</div>
            <div className="p-1 bg-green-50 rounded text-center">高净值用户</div>
            <div className="p-1 bg-purple-50 rounded text-center">管理费+业绩</div>
            <div className="p-1 bg-orange-50 rounded text-center">起步阶段</div>

            {/* 其他收入 */}
            <div className="p-1 bg-gray-50 rounded text-center">其他收入</div>
            <div className="p-1 bg-cyan-50 rounded text-center">5%</div>
            <div className="p-1 bg-blue-50 rounded text-center">多元化</div>
            <div className="p-1 bg-green-50 rounded text-center">B端+C端</div>
            <div className="p-1 bg-purple-50 rounded text-center">项目制</div>
            <div className="p-1 bg-orange-50 rounded text-center">探索期</div>
          </div>
        </motion.div>

        {/* 雪球发展历程与挑战 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-3 h-3 text-green-600" />
              雪球发展历程关键节点
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-start gap-2 p-1.5 bg-blue-50 rounded">
                <div className="w-4 text-blue-600 text-xs">2010</div>
                <span>创立雪球，定位投资者社交网络</span>
              </div>
              <div className="flex items-start gap-2 p-1.5 bg-green-50 rounded">
                <div className="w-4 text-green-600 text-xs">2014</div>
                <span>推出蛋卷基金，切入基金销售</span>
              </div>
              <div className="flex items-start gap-2 p-1.5 bg-purple-50 rounded">
                <div className="w-4 text-purple-600 text-xs">2017</div>
                <span>获得基金销售牌照，正式商业化</span>
              </div>
              <div className="flex items-start gap-2 p-1.5 bg-orange-50 rounded">
                <div className="w-4 text-orange-600 text-xs">2019</div>
                <span>推出雪球Pro，付费订阅服务</span>
              </div>
              <div className="flex items-start gap-2 p-1.5 bg-cyan-50 rounded">
                <div className="w-4 text-cyan-600 text-xs">2021</div>
                <span>获得投顾牌照，推出智能投顾</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-3 h-3 text-red-600" />
              雪球面临的挑战与机遇
            </h4>
            <div className="space-y-2 text-xs">
              <div className="bg-red-50 p-2 rounded">
                <h5 className="text-sm text-red-800 mb-1">主要挑战</h5>
                <ul className="space-y-0.5 text-xs text-red-700">
                  <li>• 用户增长放缓，获客成本上升</li>
                  <li>• 商业化效率有待提升</li>
                  <li>• 面临同花顺等巨头竞争</li>
                </ul>
              </div>
              <div className="bg-green-50 p-2 rounded">
                <h5 className="text-sm text-green-800 mb-1">发展机遇</h5>
                <ul className="space-y-0.5 text-xs text-green-700">
                  <li>• 中产阶级投资需求增长</li>
                  <li>• 海外投资市场扩大</li>
                  <li>• AI驱动的投资服务创新</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 投资服务行业启示 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-cyan-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <Star className="w-3 h-3" />
            雪球社交投资模式对行业的启示
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">社交+投资创新</h4>
              <p className="text-xs">通过社交网络降低投资门槛，提升用户参与度和粘性</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">垂直社区价值</h4>
              <p className="text-xs">专业投资者社区比泛社交平台有更高的商业价值</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">内容驱动增长</h4>
              <p className="text-xs">优质投资内容和KOL是吸引用户和商业化的核心</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}