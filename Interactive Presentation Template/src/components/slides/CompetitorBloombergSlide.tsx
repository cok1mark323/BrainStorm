import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Monitor, 
  TrendingUp, 
  Users, 
  Target,
  DollarSign,
  BarChart3,
  Globe,
  Award,
  Database,
  Crown,
  Megaphone,
  Building2,
  Zap,
  CheckCircle,
  AlertTriangle,
  Star,
  Clock,
  Shield
} from 'lucide-react';

export function CompetitorBloombergSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-amber-50 to-orange-50">
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
              <Globe className="w-3 h-3" />
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
            Bloomberg Terminal：全球金融信息终端之王
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            成立于1981年，全球最权威的金融信息服务商，华尔街标配工具
          </motion.p>
        </motion.div>

        {/* 商业模式定位 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-amber-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-amber-600" />
            极致专业的To B商业模式
          </h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="bg-green-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <strong className="text-green-800">核心：To B</strong>
              </div>
              <p className="text-green-700">专业机构客户</p>
            </div>
            <div className="bg-purple-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-purple-600" />
                <strong className="text-purple-800">模式：订阅制</strong>
              </div>
              <p className="text-purple-700">终端租赁服务</p>
            </div>
            <div className="bg-blue-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-blue-600" />
                <strong className="text-blue-800">辅助：增值服务</strong>
              </div>
              <p className="text-blue-700">定制化解决方案</p>
            </div>
            <div className="bg-orange-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <AlertTriangle className="w-3 h-3 text-orange-600" />
                <strong className="text-orange-800">极少：To C</strong>
              </div>
              <p className="text-orange-700">几乎不涉及个人</p>
            </div>
          </div>
        </motion.div>

        {/* 核心产品功能 */}
        <motion.div 
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Bloomberg Terminal */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-amber-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-amber-100 rounded">
                <Monitor className="w-3 h-3 text-amber-600" />
              </div>
              <h4 className="text-sm text-gray-900">Bloomberg Terminal</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-amber-50 p-1.5 rounded">
                <strong>定位：</strong>专业金融工作站
              </div>
              <div>
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 实时市场数据</li>
                  <li>• 新闻资讯服务</li>
                  <li>• 交易执行平台</li>
                  <li>• 分析工具集合</li>
                  <li>• 专业通讯系统</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>收费：</strong>$2,000+/月/终端
              </div>
            </div>
          </motion.div>

          {/* Bloomberg API */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-blue-100 rounded">
                <Database className="w-3 h-3 text-blue-600" />
              </div>
              <h4 className="text-sm text-gray-900">Bloomberg API</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1.5 rounded">
                <strong>定位：</strong>数据接口服务
              </div>
              <div>
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 历史数据API</li>
                  <li>• 实时数据流</li>
                  <li>• 参考数据服务</li>
                  <li>• 企业数据集成</li>
                  <li>• 风险管理工具</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>收费：</strong>按数据量+年费
              </div>
            </div>
          </motion.div>

          {/* Bloomberg媒体 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-green-100 rounded">
                <Megaphone className="w-3 h-3 text-green-600" />
              </div>
              <h4 className="text-sm text-gray-900">Bloomberg媒体</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1.5 rounded">
                <strong>定位：</strong>财经媒体帝国
              </div>
              <div>
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• Bloomberg TV</li>
                  <li>• Bloomberg News</li>
                  <li>• Bloomberg Radio</li>
                  <li>• 彭博商业周刊</li>
                  <li>• 线下会议活动</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>收入：</strong>广告+订阅+活动
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 运营数据与市场地位 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <BarChart3 className="w-3 h-3 text-amber-600" />
              Bloomberg关键数据（2023年）
            </h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-amber-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="w-2 h-2 text-amber-600" />
                    <span className="text-xs">年营收</span>
                  </div>
                  <p className="text-sm text-amber-800">120亿美元</p>
                  <p className="text-xs text-amber-600">稳定增长</p>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Monitor className="w-2 h-2 text-green-600" />
                    <span className="text-xs">终端数量</span>
                  </div>
                  <p className="text-sm text-green-800">325,000+</p>
                  <p className="text-xs text-green-600">全球部署</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Users className="w-2 h-2 text-blue-600" />
                    <span className="text-xs">员工规模</span>
                  </div>
                  <p className="text-sm text-blue-800">20,000+人</p>
                  <p className="text-xs text-blue-600">全球布局</p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Globe className="w-2 h-2 text-purple-600" />
                    <span className="text-xs">市场覆盖</span>
                  </div>
                  <p className="text-sm text-purple-800">176个国家</p>
                  <p className="text-xs text-purple-600">全球领导地位</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Award className="w-3 h-3 text-blue-600" />
              Bloomberg核心竞争优势
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-amber-50 rounded">
                <Database className="w-3 h-3 text-amber-600" />
                <span><strong>数据权威性：</strong>40年数据积累，行业标准</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <Shield className="w-3 h-3 text-blue-600" />
                <span><strong>客户粘性：</strong>专业用户难以替换</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <Clock className="w-3 h-3 text-green-600" />
                <span><strong>实时性：</strong>毫秒级数据更新能力</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <Building2 className="w-3 h-3 text-purple-600" />
                <span><strong>生态完整：</strong>数据+工具+交易一体化</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-orange-50 rounded">
                <Crown className="w-3 h-3 text-orange-600" />
                <span><strong>品牌地位：</strong>华尔街金融精英必备</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bloomberg商业模式分析 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">Bloomberg商业模式深度解析</h3>
          <div className="grid grid-cols-6 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>收入来源</strong>
            </div>
            <div className="text-center p-1 bg-amber-50 rounded">
              <strong>占比</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>客户类型</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>定价策略</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>护城河</strong>
            </div>
            <div className="text-center p-1 bg-orange-50 rounded">
              <strong>发展趋势</strong>
            </div>

            {/* Terminal订阅 */}
            <div className="p-1 bg-gray-50 rounded text-center">Terminal订阅</div>
            <div className="p-1 bg-amber-50 rounded text-center">85%</div>
            <div className="p-1 bg-blue-50 rounded text-center">投行、基金、银行</div>
            <div className="p-1 bg-green-50 rounded text-center">$24,000/年</div>
            <div className="p-1 bg-purple-50 rounded text-center">数据垄断</div>
            <div className="p-1 bg-orange-50 rounded text-center">稳定增长</div>

            {/* 企业解决方案 */}
            <div className="p-1 bg-gray-50 rounded text-center">企业解决方案</div>
            <div className="p-1 bg-amber-50 rounded text-center">10%</div>
            <div className="p-1 bg-blue-50 rounded text-center">大型金融机构</div>
            <div className="p-1 bg-green-50 rounded text-center">定制报价</div>
            <div className="p-1 bg-purple-50 rounded text-center">技术壁垒</div>
            <div className="p-1 bg-orange-50 rounded text-center">快速增长</div>

            {/* 媒体业务 */}
            <div className="p-1 bg-gray-50 rounded text-center">媒体业务</div>
            <div className="p-1 bg-amber-50 rounded text-center">3%</div>
            <div className="p-1 bg-blue-50 rounded text-center">广告商+订阅者</div>
            <div className="p-1 bg-green-50 rounded text-center">广告+订阅</div>
            <div className="p-1 bg-purple-50 rounded text-center">内容权威</div>
            <div className="p-1 bg-orange-50 rounded text-center">平稳发展</div>

            {/* 其他服务 */}
            <div className="p-1 bg-gray-50 rounded text-center">其他服务</div>
            <div className="p-1 bg-amber-50 rounded text-center">2%</div>
            <div className="p-1 bg-blue-50 rounded text-center">多元化客户</div>
            <div className="p-1 bg-green-50 rounded text-center">项目制</div>
            <div className="p-1 bg-purple-50 rounded text-center">品牌优势</div>
            <div className="p-1 bg-orange-50 rounded text-center">探索阶段</div>
          </div>
        </motion.div>

        {/* Bloomberg vs 中国竞品对比启示 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-amber-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <Star className="w-3 h-3" />
            Bloomberg模式对中国投资服务的启示
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">专业化极致深耕</h4>
              <p className="text-xs">专注To B市场，不追求大众化，通过专业性建立绝对优势</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">高价值订阅模式</h4>
              <p className="text-xs">$24,000年费证明专业服务的高价值，客户付费意愿强</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">数据+工具生态</h4>
              <p className="text-xs">不仅提供数据，更提供完整的工作流解决方案</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}