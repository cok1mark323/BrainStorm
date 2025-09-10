import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  ArrowLeftRight, 
  Users, 
  Shield, 
  TrendingUp,
  Car, 
  Home,
  ShoppingBag,
  Smartphone,
  HandHeart,
  Star,
  CreditCard,
  Search,
  MessageCircle,
  Award,
  BarChart3,
  Globe,
  Percent,
  Clock,
  Target,
  Banknote,
  UserCheck,
  Zap,
  Building2,
  BookOpen
} from 'lucide-react';

export function C2CBusinessModelSlide() {
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
            className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ArrowLeftRight className="w-3 h-3" />
            C2C商业模式
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            C2C平台商业模式与双边市场价值创造
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            连接个人卖家与买家，通过平台化服务实现交易撮合和价值创造的商业模式
          </motion.p>
        </motion.div>

        {/* C2C模式核心逻辑 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-cyan-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-cyan-600" />
            C2C双边市场核心价值逻辑
          </h3>
          <div className="grid grid-cols-5 gap-1 text-xs">
            <div className="bg-cyan-50 p-1.5 rounded text-center">
              <strong>供给聚合</strong><br/>
              汇聚海量个人卖家
            </div>
            <div className="bg-blue-50 p-1.5 rounded text-center">
              <strong>需求匹配</strong><br/>
              智能推荐算法
            </div>
            <div className="bg-green-50 p-1.5 rounded text-center">
              <strong>交易保障</strong><br/>
              信用体系+支付安全
            </div>
            <div className="bg-purple-50 p-1.5 rounded text-center">
              <strong>服务增值</strong><br/>
              物流+金融+营销
            </div>
            <div className="bg-orange-50 p-1.5 rounded text-center">
              <strong>网络效应</strong><br/>
              用户越多价值越大
            </div>
          </div>
        </motion.div>

        {/* 主要C2C平台案例分析 */}
        <motion.div 
          className="grid grid-cols-4 gap-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* 电商交易平台 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-orange-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-orange-100 rounded">
                <ShoppingBag className="w-2 h-2 text-orange-600" />
              </div>
              <h4 className="text-xs text-gray-900">电商交易</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-orange-50 p-1 rounded text-xs">
                <strong>淘宝：</strong>10亿+用户，千万级卖家
              </div>
              <div className="text-xs">
                <p><strong>收入模式：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 交易佣金：3-5%</li>
                  <li>• 广告收入：直通车、钻展</li>
                  <li>• 增值服务：装修、营销工具</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>2023年GMV：</strong>超8万亿元
              </div>
            </div>
          </motion.div>

          {/* 二手交易平台 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-green-100 rounded">
                <Smartphone className="w-2 h-2 text-green-600" />
              </div>
              <h4 className="text-xs text-gray-900">二手交易</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1 rounded text-xs">
                <strong>闲鱼：</strong>月活5000万，日发布50万件
              </div>
              <div className="text-xs">
                <p><strong>收入模式：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 增值服务：验机、保修</li>
                  <li>• 广告推广：商品置顶</li>
                  <li>• 金融服务：分期、保险</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>特色：</strong>信用免押+芝麻信用
              </div>
            </div>
          </motion.div>

          {/* 房产中介平台 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-blue-100 rounded">
                <Home className="w-2 h-2 text-blue-600" />
              </div>
              <h4 className="text-xs text-gray-900">房产中介</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1 rounded text-xs">
                <strong>贝壳找房：</strong>4.5万家门店，45万经纪人
              </div>
              <div className="text-xs">
                <p><strong>收入模式：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 交易佣金：2.5-3%</li>
                  <li>• 平台服务费：技术服务</li>
                  <li>• 金融服务：贷款、保险</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>2023年GTV：</strong>4.2万亿元
              </div>
            </div>
          </motion.div>

          {/* 出行服务平台 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-purple-100 rounded">
                <Car className="w-2 h-2 text-purple-600" />
              </div>
              <h4 className="text-xs text-gray-900">出行服务</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1 rounded text-xs">
                <strong>滴滴出行：</strong>5.5亿用户，1500万司机
              </div>
              <div className="text-xs">
                <p><strong>收入模式：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 订单佣金：20-30%</li>
                  <li>• 平台服务费：信息费</li>
                  <li>• 增值服务：保险、广告</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>特点：</strong>动态定价+供需平衡
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* C2C平台成功要素分析 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">C2C平台关键成功要素</h3>
          <div className="grid grid-cols-6 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>关键要素</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>供给侧</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>需求侧</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>交易保障</strong>
            </div>
            <div className="text-center p-1 bg-orange-50 rounded">
              <strong>技术支撑</strong>
            </div>
            <div className="text-center p-1 bg-red-50 rounded">
              <strong>运营策略</strong>
            </div>

            {/* 用户获取 */}
            <div className="p-1 bg-gray-50 rounded text-center">用户获取</div>
            <div className="p-1 bg-blue-50 rounded text-center">卖家补贴激励</div>
            <div className="p-1 bg-green-50 rounded text-center">买家优惠券</div>
            <div className="p-1 bg-purple-50 rounded text-center">新手保护期</div>
            <div className="p-1 bg-orange-50 rounded text-center">智能推荐</div>
            <div className="p-1 bg-red-50 rounded text-center">地推+广告</div>

            {/* 信任建立 */}
            <div className="p-1 bg-gray-50 rounded text-center">信任建立</div>
            <div className="p-1 bg-blue-50 rounded text-center">身份认证</div>
            <div className="p-1 bg-green-50 rounded text-center">评价体系</div>
            <div className="p-1 bg-purple-50 rounded text-center">担保交易</div>
            <div className="p-1 bg-orange-50 rounded text-center">区块链溯源</div>
            <div className="p-1 bg-red-50 rounded text-center">客服介入</div>

            {/* 网络效应 */}
            <div className="p-1 bg-gray-50 rounded text-center">网络效应</div>
            <div className="p-1 bg-blue-50 rounded text-center">商品丰富度</div>
            <div className="p-1 bg-green-50 rounded text-center">选择多样性</div>
            <div className="p-1 bg-purple-50 rounded text-center">交易成功率</div>
            <div className="p-1 bg-orange-50 rounded text-center">匹配算法</div>
            <div className="p-1 bg-red-50 rounded text-center">社区运营</div>
          </div>
        </motion.div>

        {/* C2C收入模型分析 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <BarChart3 className="w-3 h-3 text-cyan-600" />
              C2C平台收入结构分析
            </h4>
            <div className="space-y-1 text-xs">
              <div className="grid grid-cols-3 gap-1">
                <div className="text-center p-1 bg-gray-100 rounded">
                  <strong>收入来源</strong>
                </div>
                <div className="text-center p-1 bg-blue-50 rounded">
                  <strong>占比</strong>
                </div>
                <div className="text-center p-1 bg-green-50 rounded">
                  <strong>增长潜力</strong>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">交易佣金</div>
                <div className="p-1 bg-blue-50 rounded text-center">40-60%</div>
                <div className="p-1 bg-green-50 rounded text-center">稳定增长</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">广告收入</div>
                <div className="p-1 bg-blue-50 rounded text-center">20-30%</div>
                <div className="p-1 bg-green-50 rounded text-center">快速增长</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">增值服务</div>
                <div className="p-1 bg-blue-50 rounded text-center">10-20%</div>
                <div className="p-1 bg-green-50 rounded text-center">高利润率</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">金融服务</div>
                <div className="p-1 bg-blue-50 rounded text-center">5-15%</div>
                <div className="p-1 bg-green-50 rounded text-center">新兴领域</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-3 h-3 text-green-600" />
              C2C平台关键运营指标
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <Users className="w-3 h-3 text-blue-600" />
                <span><strong>活跃用户数：</strong>月活/日活增长率</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <Percent className="w-3 h-3 text-green-600" />
                <span><strong>取佣率：</strong>平台抽取交易佣金比例</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <Globe className="w-3 h-3 text-purple-600" />
                <span><strong>GMV：</strong>平台总交易金额</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-orange-50 rounded">
                <Clock className="w-3 h-3 text-orange-600" />
                <span><strong>复购率：</strong>用户重复交易比例</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-red-50 rounded">
                <Star className="w-3 h-3 text-red-600" />
                <span><strong>满意度：</strong>交易完成率+评价分数</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 投资服务行业C2C机遇 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-cyan-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <Award className="w-3 h-3" />
            投资服务行业C2C平台机遇分析
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <HandHeart className="w-2 h-2" />
                投资经验分享
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 个人投资者分享实战经验</li>
                <li>• 投资策略+操作记录展示</li>
                <li>• 知识付费：99-999元/份</li>
                <li>• 佣金模式：平台抽取20-30%</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <UserCheck className="w-2 h-2" />
                投顾服务撮合
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 连接个人投资顾问与客户</li>
                <li>• 1对1咨询+组合管理服务</li>
                <li>• 服务费：1000-10000元/月</li>
                <li>• 收入分成：平台15-25%</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <BookOpen className="w-2 h-2" />
                投资工具交易
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 个人开发者出售投资工具</li>
                <li>• 选股模型+量化策略代码</li>
                <li>• 工具价格：299-2999元</li>
                <li>• 交易佣金：平台抽取10-20%</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}