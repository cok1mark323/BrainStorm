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
  Megaphone,
  Crown,
  MessageCircle,
  Play,
  ShoppingBag,
  Zap,
  CheckCircle,
  AlertCircle,
  Star,
  Eye
} from 'lucide-react';

export function CompetitorTHSSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-green-50 to-emerald-50">
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
            同花顺：互联网金融信息服务龙头
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            成立于1995年，中国最大的互联网金融信息服务商，5亿+注册用户
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
            多元化商业模式组合
          </h3>
          <div className="grid grid-cols-5 gap-1 text-xs">
            <div className="bg-blue-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-blue-600" />
                <strong className="text-blue-800">To C</strong>
              </div>
              <p className="text-blue-700">个人投资者服务</p>
            </div>
            <div className="bg-rose-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-rose-600" />
                <strong className="text-rose-800">广告变现</strong>
              </div>
              <p className="text-rose-700">金融产品推广</p>
            </div>
            <div className="bg-amber-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-amber-600" />
                <strong className="text-amber-800">会员制</strong>
              </div>
              <p className="text-amber-700">增值服务订阅</p>
            </div>
            <div className="bg-orange-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-orange-600" />
                <strong className="text-orange-800">B2C平台</strong>
              </div>
              <p className="text-orange-700">基金销售佣金</p>
            </div>
            <div className="bg-green-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <AlertCircle className="w-3 h-3 text-green-600" />
                <strong className="text-green-800">To B</strong>
              </div>
              <p className="text-green-700">机构服务较少</p>
            </div>
          </div>
        </motion.div>

        {/* 核心产品生态 */}
        <motion.div 
          className="grid grid-cols-4 gap-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* 同花顺APP */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-green-100 rounded">
                <Smartphone className="w-2 h-2 text-green-600" />
              </div>
              <h4 className="text-xs text-gray-900">同花顺APP</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1 rounded text-xs">
                <strong>定位：</strong>个人投资者必备工具
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 实时行情查看</li>
                  <li>• 资讯推送服务</li>
                  <li>• 投资策略分享</li>
                  <li>• 模拟炒股游戏</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>用户：</strong>3亿+注册用户
              </div>
            </div>
          </motion.div>

          {/* 投顾服务 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-blue-100 rounded">
                <Crown className="w-2 h-2 text-blue-600" />
              </div>
              <h4 className="text-xs text-gray-900">VIP投顾服务</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1 rounded text-xs">
                <strong>定位：</strong>会员制增值服务
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 专业投资建议</li>
                  <li>• 个股诊断服务</li>
                  <li>• VIP专属研报</li>
                  <li>• 一对一在线咨询</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>收费：</strong>388-2888元/月
              </div>
            </div>
          </motion.div>

          {/* 基金销售 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-orange-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-orange-100 rounded">
                <ShoppingBag className="w-2 h-2 text-orange-600" />
              </div>
              <h4 className="text-xs text-gray-900">基金销售平台</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-orange-50 p-1 rounded text-xs">
                <strong>定位：</strong>第三方基金销售
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 基金产品销售</li>
                  <li>• 投资组合推荐</li>
                  <li>• 定投计划服务</li>
                  <li>• 基金净值查询</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>收入：</strong>申购费+管理费分成
              </div>
            </div>
          </motion.div>

          {/* 财经媒体 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-purple-100 rounded">
                <Play className="w-2 h-2 text-purple-600" />
              </div>
              <h4 className="text-xs text-gray-900">财经媒体平台</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1 rounded text-xs">
                <strong>定位：</strong>内容+直播变现
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 财经资讯发布</li>
                  <li>• 投资直播节目</li>
                  <li>• 专家观点分享</li>
                  <li>• 热点事件解读</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>收入：</strong>广告收入+付费内容
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 运营数据展示 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <BarChart3 className="w-3 h-3 text-green-600" />
              关键运营数据（2023年）
            </h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="w-2 h-2 text-green-600" />
                    <span className="text-xs">营业收入</span>
                  </div>
                  <p className="text-sm text-green-800">47.2亿元</p>
                  <p className="text-xs text-green-600">同比增长12.8%</p>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <DollarSign className="w-2 h-2 text-blue-600" />
                    <span className="text-xs">净利润</span>
                  </div>
                  <p className="text-sm text-blue-800">19.1亿元</p>
                  <p className="text-xs text-blue-600">净利率40.5%</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-purple-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Users className="w-2 h-2 text-purple-600" />
                    <span className="text-xs">注册用户</span>
                  </div>
                  <p className="text-sm text-purple-800">5.4亿用户</p>
                  <p className="text-xs text-purple-600">月活1.5亿+</p>
                </div>
                <div className="bg-orange-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Crown className="w-2 h-2 text-orange-600" />
                    <span className="text-xs">付费用户</span>
                  </div>
                  <p className="text-sm text-orange-800">400万+VIP</p>
                  <p className="text-xs text-orange-600">付费率2.7%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Award className="w-3 h-3 text-blue-600" />
              同花顺核心竞争力
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <Users className="w-3 h-3 text-green-600" />
                <span><strong>用户规模：</strong>5亿+用户基础，流量优势明显</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <Smartphone className="w-3 h-3 text-blue-600" />
                <span><strong>产品体验：</strong>移动端体验优秀，功能完善</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <Globe className="w-3 h-3 text-purple-600" />
                <span><strong>品牌认知：</strong>个人投资者首选平台</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-orange-50 rounded">
                <Megaphone className="w-3 h-3 text-orange-600" />
                <span><strong>内容生态：</strong>丰富的财经内容和社区</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-rose-50 rounded">
                <Zap className="w-3 h-3 text-rose-600" />
                <span><strong>变现能力：</strong>多元化收入来源</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 收入模式结构分析 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">同花顺多元化收入模式结构</h3>
          <div className="grid grid-cols-6 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>收入来源</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>占比</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>商业模式</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>客户群体</strong>
            </div>
            <div className="text-center p-1 bg-orange-50 rounded">
              <strong>定价策略</strong>
            </div>
            <div className="text-center p-1 bg-rose-50 rounded">
              <strong>增长潜力</strong>
            </div>

            {/* 增值服务 */}
            <div className="p-1 bg-gray-50 rounded text-center">增值服务</div>
            <div className="p-1 bg-blue-50 rounded text-center">45%</div>
            <div className="p-1 bg-green-50 rounded text-center">会员制</div>
            <div className="p-1 bg-purple-50 rounded text-center">个人投资者</div>
            <div className="p-1 bg-orange-50 rounded text-center">月费制</div>
            <div className="p-1 bg-rose-50 rounded text-center">稳定增长</div>

            {/* 广告服务 */}
            <div className="p-1 bg-gray-50 rounded text-center">广告服务</div>
            <div className="p-1 bg-blue-50 rounded text-center">35%</div>
            <div className="p-1 bg-green-50 rounded text-center">广告变现</div>
            <div className="p-1 bg-purple-50 rounded text-center">金融机构</div>
            <div className="p-1 bg-orange-50 rounded text-center">CPM/CPC</div>
            <div className="p-1 bg-rose-50 rounded text-center">快速增长</div>

            {/* 基金销售 */}
            <div className="p-1 bg-gray-50 rounded text-center">基金销售</div>
            <div className="p-1 bg-blue-50 rounded text-center">15%</div>
            <div className="p-1 bg-green-50 rounded text-center">B2C平台</div>
            <div className="p-1 bg-purple-50 rounded text-center">个人投资者</div>
            <div className="p-1 bg-orange-50 rounded text-center">佣金分成</div>
            <div className="p-1 bg-rose-50 rounded text-center">高增长</div>

            {/* 其他收入 */}
            <div className="p-1 bg-gray-50 rounded text-center">其他收入</div>
            <div className="p-1 bg-blue-50 rounded text-center">5%</div>
            <div className="p-1 bg-green-50 rounded text-center">混合模式</div>
            <div className="p-1 bg-purple-50 rounded text-center">多元化</div>
            <div className="p-1 bg-orange-50 rounded text-center">灵活定价</div>
            <div className="p-1 bg-rose-50 rounded text-center">探索期</div>
          </div>
        </motion.div>

        {/* 投资服务行业启示 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-green-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <Star className="w-3 h-3" />
            同花顺成功模式对投资服务行业的启示
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">流量为王策略</h4>
              <p className="text-xs">通过免费服务聚集海量用户，再通过多元化方式变现</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">多模式组合</h4>
              <p className="text-xs">同时运用To C、会员制、广告、B2C等多种商业模式</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">移动优先战略</h4>
              <p className="text-xs">抓住移动互联网红利，打造用户体验优秀的移动产品</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}