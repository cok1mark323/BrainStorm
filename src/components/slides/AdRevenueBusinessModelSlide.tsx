import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Megaphone, 
  Eye, 
  Target, 
  TrendingUp,
  Users, 
  Search,
  Heart,
  ShoppingBag,
  Play,
  BarChart3,
  MousePointer,
  Clock,
  DollarSign,
  Zap,
  Globe,
  Filter,
  Award,
  Smartphone,
  Monitor
} from 'lucide-react';

export function AdRevenueBusinessModelSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="max-w-6xl w-full space-y-4">
        
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Megaphone className="w-3 h-3" />
            广告变现商业模式
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            广告变现产品商业逻辑与盈利机制
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            通过流量和用户注意力经济实现变现，连接广告主与目标用户的商业模式
          </motion.p>
        </motion.div>

        {/* 广告变现核心逻辑 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-rose-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-rose-600" />
            广告变现核心价值链
          </h3>
          <div className="grid grid-cols-5 gap-1 text-xs">
            <div className="bg-rose-50 p-1.5 rounded text-center">
              <strong>流量获取</strong><br/>
              吸引大量活跃用户
            </div>
            <div className="bg-blue-50 p-1.5 rounded text-center">
              <strong>用户画像</strong><br/>
              精准数据分析标签
            </div>
            <div className="bg-green-50 p-1.5 rounded text-center">
              <strong>广告投放</strong><br/>
              智能匹配算法
            </div>
            <div className="bg-purple-50 p-1.5 rounded text-center">
              <strong>效果追踪</strong><br/>
              转化数据优化
            </div>
            <div className="bg-orange-50 p-1.5 rounded text-center">
              <strong>收入分成</strong><br/>
              多方利益分配
            </div>
          </div>
        </motion.div>

        {/* 主要广告形式案例分析 */}
        <motion.div 
          className="grid grid-cols-4 gap-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* 搜索广告 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-blue-100 rounded">
                <Search className="w-2 h-2 text-blue-600" />
              </div>
              <h4 className="text-xs text-gray-900">搜索广告</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1 rounded text-xs">
                <strong>百度搜索：</strong>2023年广告收入763亿
              </div>
              <div className="text-xs">
                <p><strong>计费模式：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• CPC：0.3-50元/点击</li>
                  <li>• 竞价排名机制</li>
                  <li>• 质量度影响价格</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>优势：</strong>用户意图明确，转化率高
              </div>
            </div>
          </motion.div>

          {/* 信息流广告 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-green-100 rounded">
                <Eye className="w-2 h-2 text-green-600" />
              </div>
              <h4 className="text-xs text-gray-900">信息流广告</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1 rounded text-xs">
                <strong>今日头条：</strong>2023年广告收入超1800亿
              </div>
              <div className="text-xs">
                <p><strong>计费模式：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• CPM：5-100元/千次展示</li>
                  <li>• 算法推荐投放</li>
                  <li>• 原生内容形式</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>优势：</strong>用户体验自然，覆盖面广
              </div>
            </div>
          </motion.div>

          {/* 社交广告 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-purple-100 rounded">
                <Heart className="w-2 h-2 text-purple-600" />
              </div>
              <h4 className="text-xs text-gray-900">社交广告</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1 rounded text-xs">
                <strong>微信朋友圈：</strong>单条广告50万/天起
              </div>
              <div className="text-xs">
                <p><strong>计费模式：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• CPM：150-300元/千次</li>
                  <li>• 社交关系传播</li>
                  <li>• 精准人群定向</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>优势：</strong>信任度高，口碑传播
              </div>
            </div>
          </motion.div>

          {/* 电商广告 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-orange-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-0.5 bg-orange-100 rounded">
                <ShoppingBag className="w-2 h-2 text-orange-600" />
              </div>
              <h4 className="text-xs text-gray-900">电商广告</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-orange-50 p-1 rounded text-xs">
                <strong>淘宝直通车：</strong>2023年广告收入超1200亿
              </div>
              <div className="text-xs">
                <p><strong>计费模式：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• CPC：0.1-20元/点击</li>
                  <li>• 购买意向强烈</li>
                  <li>• ROI效果可追踪</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded text-xs">
                <strong>优势：</strong>直接带来销售转化
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 广告计费模式对比 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">广告计费模式与收入效率对比</h3>
          <div className="grid grid-cols-6 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>计费模式</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>全称</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>计费单位</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>价格区间</strong>
            </div>
            <div className="text-center p-1 bg-orange-50 rounded">
              <strong>适用场景</strong>
            </div>
            <div className="text-center p-1 bg-red-50 rounded">
              <strong>收入稳定性</strong>
            </div>

            {/* CPM */}
            <div className="p-1 bg-gray-50 rounded text-center">CPM</div>
            <div className="p-1 bg-blue-50 rounded text-center">千次展示费用</div>
            <div className="p-1 bg-green-50 rounded text-center">1000次展示</div>
            <div className="p-1 bg-purple-50 rounded text-center">5-300元</div>
            <div className="p-1 bg-orange-50 rounded text-center">品牌曝光</div>
            <div className="p-1 bg-red-50 rounded text-center">高</div>

            {/* CPC */}
            <div className="p-1 bg-gray-50 rounded text-center">CPC</div>
            <div className="p-1 bg-blue-50 rounded text-center">每次点击费用</div>
            <div className="p-1 bg-green-50 rounded text-center">1次点击</div>
            <div className="p-1 bg-purple-50 rounded text-center">0.1-50元</div>
            <div className="p-1 bg-orange-50 rounded text-center">流量获取</div>
            <div className="p-1 bg-red-50 rounded text-center">中</div>

            {/* CPA */}
            <div className="p-1 bg-gray-50 rounded text-center">CPA</div>
            <div className="p-1 bg-blue-50 rounded text-center">每次行动费用</div>
            <div className="p-1 bg-green-50 rounded text-center">1次转化</div>
            <div className="p-1 bg-purple-50 rounded text-center">10-500元</div>
            <div className="p-1 bg-orange-50 rounded text-center">效果营销</div>
            <div className="p-1 bg-red-50 rounded text-center">低</div>

            {/* CPV */}
            <div className="p-1 bg-gray-50 rounded text-center">CPV</div>
            <div className="p-1 bg-blue-50 rounded text-center">每次观看费用</div>
            <div className="p-1 bg-green-50 rounded text-center">1次完整观看</div>
            <div className="p-1 bg-purple-50 rounded text-center">0.01-2元</div>
            <div className="p-1 bg-orange-50 rounded text-center">视频广告</div>
            <div className="p-1 bg-red-50 rounded text-center">中高</div>
          </div>
        </motion.div>

        {/* 广告变现成功要素 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-3 h-3 text-rose-600" />
              广告变现关键要素
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-rose-50 rounded">
                <Users className="w-3 h-3 text-rose-600" />
                <span><strong>用户规模：</strong>足够大的流量基础</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <Filter className="w-3 h-3 text-blue-600" />
                <span><strong>数据能力：</strong>精准的用户画像分析</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <Zap className="w-3 h-3 text-green-600" />
                <span><strong>技术算法：</strong>智能投放匹配系统</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <BarChart3 className="w-3 h-3 text-purple-600" />
                <span><strong>效果监测：</strong>完整的数据追踪体系</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2">广告收入优化策略</h4>
            <div className="space-y-1 text-xs">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-center p-1 bg-gray-100 rounded">
                  <strong>优化维度</strong>
                </div>
                <div className="text-center p-1 bg-green-50 rounded">
                  <strong>具体策略</strong>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">流量质量</div>
                <div className="p-1 bg-green-50 rounded text-center">提升用户活跃度和停留时长</div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">广告密度</div>
                <div className="p-1 bg-green-50 rounded text-center">平衡用户体验与广告收入</div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">定向精度</div>
                <div className="p-1 bg-green-50 rounded text-center">提升广告与用户匹配度</div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">创意质量</div>
                <div className="p-1 bg-green-50 rounded text-center">提升广告点击率和转化率</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 投资服务行业广告变现机遇 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-rose-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <Award className="w-3 h-3" />
            投资服务行业广告变现策略设计
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Monitor className="w-2 h-2" />
                内容广告变现
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 投资资讯+金融产品推广</li>
                <li>• 研报内容+券商开户广告</li>
                <li>• CPM模式：专业用户价值高</li>
                <li>• 单价：50-200元/千次展示</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Smartphone className="w-2 h-2" />
                工具广告变现
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 选股工具+投顾服务推荐</li>
                <li>• 数据分析+付费会员转化</li>
                <li>• CPA模式：按注册/开户计费</li>
                <li>• 单价：100-1000元/有效转化</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Globe className="w-2 h-2" />
                社区广告变现
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 投资交流+理财产品植入</li>
                <li>• 用户讨论+精准广告投放</li>
                <li>• CPC模式：按兴趣点击计费</li>
                <li>• 单价：2-20元/有效点击</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}