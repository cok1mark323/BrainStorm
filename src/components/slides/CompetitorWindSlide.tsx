import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Target,
  DollarSign,
  BarChart3,
  Globe,
  Award,
  Zap,
  Database,
  Monitor,
  BookOpen,
  MessageCircle,
  Shield,
  Clock,
  Star,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export function CompetitorWindSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-blue-50 to-slate-50">
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
              <Building2 className="w-3 h-3" />
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
            万德资讯：中国金融数据服务领导者
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            成立于1994年，中国最大的金融数据、信息和软件服务企业
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
            商业模式定位
          </h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="bg-green-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <strong className="text-green-800">主要模式：To B</strong>
              </div>
              <p className="text-green-700">面向金融机构提供数据服务</p>
            </div>
            <div className="bg-blue-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-blue-600" />
                <strong className="text-blue-800">辅助模式：增值服务</strong>
              </div>
              <p className="text-blue-700">定制化解决方案</p>
            </div>
            <div className="bg-purple-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-purple-600" />
                <strong className="text-purple-800">补充模式：会员制</strong>
              </div>
              <p className="text-purple-700">不同等级数据服务</p>
            </div>
            <div className="bg-orange-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <AlertTriangle className="w-3 h-3 text-orange-600" />
                <strong className="text-orange-800">少量：To C</strong>
              </div>
              <p className="text-orange-700">个人投资者产品</p>
            </div>
          </div>
        </motion.div>

        {/* 核心产品矩阵 */}
        <motion.div 
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Wind终端 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-blue-100 rounded">
                <Monitor className="w-3 h-3 text-blue-600" />
              </div>
              <h4 className="text-sm text-gray-900">Wind终端</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1.5 rounded">
                <strong>定位：</strong>专业投资分析工具
              </div>
              <div>
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 实时行情数据</li>
                  <li>• 投资组合分析</li>
                  <li>• 风险管理工具</li>
                  <li>• 研究报告数据库</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>收费：</strong>13,800-28,800元/年/终端
              </div>
            </div>
          </motion.div>

          {/* 数据服务 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-green-100 rounded">
                <Database className="w-3 h-3 text-green-600" />
              </div>
              <h4 className="text-sm text-gray-900">数据服务API</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1.5 rounded">
                <strong>定位：</strong>机构数据接口服务
              </div>
              <div>
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 历史数据API</li>
                  <li>• 实时数据推送</li>
                  <li>• 财务数据接口</li>
                  <li>• 宏观经济数据</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>收费：</strong>按调用量计费+年费
              </div>
            </div>
          </motion.div>

          {/* 量化平台 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-purple-100 rounded">
                <Zap className="w-3 h-3 text-purple-600" />
              </div>
              <h4 className="text-sm text-gray-900">量化交易平台</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1.5 rounded">
                <strong>定位：</strong>机构量化投资工具
              </div>
              <div>
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 策略回测系统</li>
                  <li>• 算法交易执行</li>
                  <li>• 风险控制模块</li>
                  <li>• 绩效归因分析</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>收费：</strong>定制报价，20万+/年
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
              <BarChart3 className="w-3 h-3 text-blue-600" />
              关键运营数据（2023年）
            </h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="w-2 h-2 text-blue-600" />
                    <span className="text-xs">营业收入</span>
                  </div>
                  <p className="text-sm text-blue-800">39.84亿元</p>
                  <p className="text-xs text-blue-600">同比增长8.2%</p>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <DollarSign className="w-2 h-2 text-green-600" />
                    <span className="text-xs">净利润</span>
                  </div>
                  <p className="text-sm text-green-800">18.63亿元</p>
                  <p className="text-xs text-green-600">净利率46.8%</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-purple-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Users className="w-2 h-2 text-purple-600" />
                    <span className="text-xs">客户数量</span>
                  </div>
                  <p className="text-sm text-purple-800">4万+机构客户</p>
                  <p className="text-xs text-purple-600">覆盖率90%+</p>
                </div>
                <div className="bg-orange-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Monitor className="w-2 h-2 text-orange-600" />
                    <span className="text-xs">终端数量</span>
                  </div>
                  <p className="text-sm text-orange-800">38万+终端</p>
                  <p className="text-xs text-orange-600">市场占有率70%+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Award className="w-3 h-3 text-green-600" />
              核心竞争优势
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <Database className="w-3 h-3 text-blue-600" />
                <span><strong>数据优势：</strong>30年数据积累，覆盖全球市场</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <Shield className="w-3 h-3 text-green-600" />
                <span><strong>客户粘性：</strong>机构客户转换成本高</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <Globe className="w-3 h-3 text-purple-600" />
                <span><strong>品牌地位：</strong>中国金融数据服务第一品牌</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-orange-50 rounded">
                <Zap className="w-3 h-3 text-orange-600" />
                <span><strong>技术领先：</strong>AI+大数据分析能力</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-red-50 rounded">
                <Clock className="w-3 h-3 text-red-600" />
                <span><strong>实时性：</strong>毫秒级数据更新能力</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 收入模式详细分析 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">万德收入模式结构分析</h3>
          <div className="grid grid-cols-5 gap-2 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>收入来源</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>占比</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>客户群体</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>定价模式</strong>
            </div>
            <div className="text-center p-1 bg-orange-50 rounded">
              <strong>增长趋势</strong>
            </div>

            {/* 金融终端 */}
            <div className="p-1 bg-gray-50 rounded text-center">金融终端</div>
            <div className="p-1 bg-blue-50 rounded text-center">65%</div>
            <div className="p-1 bg-green-50 rounded text-center">券商、基金、保险</div>
            <div className="p-1 bg-purple-50 rounded text-center">年费制</div>
            <div className="p-1 bg-orange-50 rounded text-center">稳定增长</div>

            {/* 数据服务 */}
            <div className="p-1 bg-gray-50 rounded text-center">数据服务</div>
            <div className="p-1 bg-blue-50 rounded text-center">20%</div>
            <div className="p-1 bg-green-50 rounded text-center">金融机构、科技公司</div>
            <div className="p-1 bg-purple-50 rounded text-center">按量+年费</div>
            <div className="p-1 bg-orange-50 rounded text-center">快速增长</div>

            {/* 软件服务 */}
            <div className="p-1 bg-gray-50 rounded text-center">软件服务</div>
            <div className="p-1 bg-blue-50 rounded text-center">10%</div>
            <div className="p-1 bg-green-50 rounded text-center">大型金融机构</div>
            <div className="p-1 bg-purple-50 rounded text-center">定制报价</div>
            <div className="p-1 bg-orange-50 rounded text-center">稳定增长</div>

            {/* 其他服务 */}
            <div className="p-1 bg-gray-50 rounded text-center">其他服务</div>
            <div className="p-1 bg-blue-50 rounded text-center">5%</div>
            <div className="p-1 bg-green-50 rounded text-center">多元化客户</div>
            <div className="p-1 bg-purple-50 rounded text-center">项目制</div>
            <div className="p-1 bg-orange-50 rounded text-center">探索阶段</div>
          </div>
        </motion.div>

        {/* 投资服务行业启示 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-blue-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <Star className="w-3 h-3" />
            万德成功模式对投资服务行业的启示
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">数据护城河</h4>
              <p className="text-xs">通过长期积累建立数据壁垒，形成不可替代的核心资产</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">To B模式稳定性</h4>
              <p className="text-xs">机构客户付费能力强，客户生命周期长，收入可预测性好</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">产品矩阵策略</h4>
              <p className="text-xs">从终端到API，从标准化到定制化，满足不同层次需求</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}