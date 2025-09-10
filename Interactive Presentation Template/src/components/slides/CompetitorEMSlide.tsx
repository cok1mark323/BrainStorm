import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Globe, 
  TrendingUp, 
  Users, 
  Target,
  DollarSign,
  BarChart3,
  MessageCircle,
  Award,
  ArrowLeftRight,
  Crown,
  Megaphone,
  ShoppingBag,
  Building2,
  Zap,
  CheckCircle,
  AlertTriangle,
  Star,
  Eye,
  CreditCard
} from 'lucide-react';

export function CompetitorEMSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-orange-50 to-amber-50">
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
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs">
              <Globe className="w-3 h-3" />
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
            东方财富：互联网金融服务生态领军者
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            成立于2005年，从财经门户起家，发展为综合金融服务生态平台
          </motion.p>
        </motion.div>

        {/* 商业模式定位 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-orange-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-orange-600" />
            综合性金融服务生态商业模式
          </h3>
          <div className="grid grid-cols-6 gap-1 text-xs">
            <div className="bg-blue-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-blue-600" />
                <strong className="text-blue-800">To C</strong>
              </div>
              <p className="text-blue-700">个人用户服务</p>
            </div>
            <div className="bg-rose-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-rose-600" />
                <strong className="text-rose-800">广告变现</strong>
              </div>
              <p className="text-rose-700">流量变现</p>
            </div>
            <div className="bg-orange-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-orange-600" />
                <strong className="text-orange-800">B2C平台</strong>
              </div>
              <p className="text-orange-700">券商+基金代销</p>
            </div>
            <div className="bg-amber-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-amber-600" />
                <strong className="text-amber-800">会员制</strong>
              </div>
              <p className="text-amber-700">增值服务</p>
            </div>
            <div className="bg-cyan-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-3 h-3 text-cyan-600" />
                <strong className="text-cyan-800">C2C</strong>
              </div>
              <p className="text-cyan-700">股吧社区</p>
            </div>
            <div className="bg-green-100 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <AlertTriangle className="w-3 h-3 text-green-600" />
                <strong className="text-green-800">To B</strong>
              </div>
              <p className="text-green-700">机构服务较少</p>
            </div>
          </div>
        </motion.div>

        {/* 核心业务生态 */}
        <motion.div 
          className="grid grid-cols-4 gap-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* 东方财富网 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-orange-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-orange-100 rounded">
                <Globe className="w-2 h-2 text-orange-600" />
              </div>
              <h4 className="text-xs text-gray-900">东方财富网</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-orange-50 p-1 rounded text-xs">
                <strong>定位：</strong>财经门户+社区
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 财经资讯发布</li>
                  <li>• 股吧社区讨论</li>
                  <li>• 行情数据展示</li>
                  <li>• 投资工具集合</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>流量：</strong>月访问量10亿+PV
              </div>
            </div>
          </motion.div>

          {/* 东方财富证券 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-blue-100 rounded">
                <ArrowLeftRight className="w-2 h-2 text-blue-600" />
              </div>
              <h4 className="text-xs text-gray-900">东方财富证券</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1 rounded text-xs">
                <strong>定位：</strong>互联网券商
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 股票交易服务</li>
                  <li>• 基金代销平台</li>
                  <li>• 融资融券业务</li>
                  <li>• 投资顾问服务</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>客户：</strong>1500万+开户</div>
            </div>
          </motion.div>

          {/* 天天基金网 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-green-100 rounded">
                <ShoppingBag className="w-2 h-2 text-green-600" />
              </div>
              <h4 className="text-xs text-gray-900">天天基金网</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1 rounded text-xs">
                <strong>定位：</strong>基金销售龙头
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 基金产品销售</li>
                  <li>• 基金评级体系</li>
                  <li>• 投资组合工具</li>
                  <li>• 基金经理跟踪</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>规模：</strong>基金保有量第一
              </div>
            </div>
          </motion.div>

          {/* 数据服务 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-purple-100 rounded">
                <BarChart3 className="w-2 h-2 text-purple-600" />
              </div>
              <h4 className="text-xs text-gray-900">数据中心</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1 rounded text-xs">
                <strong>定位：</strong>金融数据服务
              </div>
              <div className="text-xs">
                <p><strong>核心功能：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• Choice数据终端</li>
                  <li>• 行业数据分析</li>
                  <li>• 公司财务数据</li>
                  <li>• 市场研究报告</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>客户：</strong>机构+个人用户
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 运营数据与业绩表现 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <BarChart3 className="w-3 h-3 text-orange-600" />
              关键运营数据（2023年）
            </h4>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-orange-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="w-2 h-2 text-orange-600" />
                    <span className="text-xs">营业收入</span>
                  </div>
                  <p className="text-sm text-orange-800">71.9亿元</p>
                  <p className="text-xs text-orange-600">同比增长27.3%</p>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <DollarSign className="w-2 h-2 text-blue-600" />
                    <span className="text-xs">净利润</span>
                  </div>
                  <p className="text-sm text-blue-800">46.8亿元</p>
                  <p className="text-xs text-blue-600">净利率65.1%</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <CreditCard className="w-2 h-2 text-green-600" />
                    <span className="text-xs">券商业务</span>
                  </div>
                  <p className="text-sm text-green-800">1500万客户</p>
                  <p className="text-xs text-green-600">市占率前列</p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <ShoppingBag className="w-2 h-2 text-purple-600" />
                    <span className="text-xs">基金保有量</span>
                  </div>
                  <p className="text-sm text-purple-800">1.8万亿元</p>
                  <p className="text-xs text-purple-600">连续多年第一</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Award className="w-3 h-3 text-blue-600" />
              东方财富核心优势
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-orange-50 rounded">
                <Globe className="w-3 h-3 text-orange-600" />
                <span><strong>流量入口：</strong>财经门户巨大流量优势</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-cyan-50 rounded">
                <MessageCircle className="w-3 h-3 text-cyan-600" />
                <span><strong>社区生态：</strong>股吧社区用户粘性强</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <Building2 className="w-3 h-3 text-blue-600" />
                <span><strong>金融牌照：</strong>全金融牌照业务协同</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <ArrowLeftRight className="w-3 h-3 text-green-600" />
                <span><strong>转化效率：</strong>流量到交易转化率高</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <Zap className="w-3 h-3 text-purple-600" />
                <span><strong>技术能力：</strong>互联网技术+金融服务</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 生态协同效应分析 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">东方财富生态协同收入模式</h3>
          <div className="grid grid-cols-6 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>业务板块</strong>
            </div>
            <div className="text-center p-1 bg-orange-50 rounded">
              <strong>收入占比</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>商业模式</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>核心指标</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>协同效应</strong>
            </div>
            <div className="text-center p-1 bg-rose-50 rounded">
              <strong>增长驱动</strong>
            </div>

            {/* 证券业务 */}
            <div className="p-1 bg-gray-50 rounded text-center">证券业务</div>
            <div className="p-1 bg-orange-50 rounded text-center">45%</div>
            <div className="p-1 bg-blue-50 rounded text-center">B2C平台</div>
            <div className="p-1 bg-green-50 rounded text-center">1500万客户</div>
            <div className="p-1 bg-purple-50 rounded text-center">门户导流</div>
            <div className="p-1 bg-rose-50 rounded text-center">交易量增长</div>

            {/* 基金销售 */}
            <div className="p-1 bg-gray-50 rounded text-center">基金销售</div>
            <div className="p-1 bg-orange-50 rounded text-center">30%</div>
            <div className="p-1 bg-blue-50 rounded text-center">B2C平台</div>
            <div className="p-1 bg-green-50 rounded text-center">1.8万亿保有</div>
            <div className="p-1 bg-purple-50 rounded text-center">用户转化</div>
            <div className="p-1 bg-rose-50 rounded text-center">保有量增长</div>

            {/* 广告服务 */}
            <div className="p-1 bg-gray-50 rounded text-center">广告服务</div>
            <div className="p-1 bg-orange-50 rounded text-center">15%</div>
            <div className="p-1 bg-blue-50 rounded text-center">广告变现</div>
            <div className="p-1 bg-green-50 rounded text-center">10亿+PV</div>
            <div className="p-1 bg-purple-50 rounded text-center">流量变现</div>
            <div className="p-1 bg-rose-50 rounded text-center">品牌广告</div>

            {/* 数据服务 */}
            <div className="p-1 bg-gray-50 rounded text-center">数据服务</div>
            <div className="p-1 bg-orange-50 rounded text-center">8%</div>
            <div className="p-1 bg-blue-50 rounded text-center">To B/To C</div>
            <div className="p-1 bg-green-50 rounded text-center">Choice终端</div>
            <div className="p-1 bg-purple-50 rounded text-center">数据赋能</div>
            <div className="p-1 bg-rose-50 rounded text-center">付费用户</div>

            {/* 其他业务 */}
            <div className="p-1 bg-gray-50 rounded text-center">其他业务</div>
            <div className="p-1 bg-orange-50 rounded text-center">2%</div>
            <div className="p-1 bg-blue-50 rounded text-center">混合模式</div>
            <div className="p-1 bg-green-50 rounded text-center">新业务探索</div>
            <div className="p-1 bg-purple-50 rounded text-center">生态延伸</div>
            <div className="p-1 bg-rose-50 rounded text-center">创新业务</div>
          </div>
        </motion.div>

        {/* 投资服务行业启示 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-orange-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <Star className="w-3 h-3" />
            东方财富生态模式对投资服务行业的启示
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">流量+交易闭环</h4>
              <p className="text-xs">通过内容和社区吸引流量，再转化为金融服务收入</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">全牌照协同优势</h4>
              <p className="text-xs">通过多金融牌照实现业务协同，提升用户价值</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">生态化发展策略</h4>
              <p className="text-xs">构建从获客到服务的完整生态，实现价值最大化</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}