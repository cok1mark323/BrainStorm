import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Crown, 
  Users, 
  Repeat, 
  Gift,
  ShoppingBag, 
  Video,
  Car,
  Book,
  Target,
  TrendingUp,
  Heart,
  Zap,
  Calendar,
  Award,
  DollarSign,
  BarChart3,
  Clock,
  Percent
} from 'lucide-react';

export function MembershipBusinessModelSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-6xl w-full space-y-4">
        
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Crown className="w-3 h-3" />
            会员制商业模式
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            会员类产品盈利模式与用户价值体系
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            通过会员身份构建用户忠诚度，实现持续稳定收入的订阅制商业模式
          </motion.p>
        </motion.div>

        {/* 会员模式核心逻辑 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-amber-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-amber-600" />
            会员模式核心价值逻辑
          </h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="bg-amber-50 p-1.5 rounded text-center">
              <strong>身份认同</strong><br/>
              会员专属身份标识
            </div>
            <div className="bg-blue-50 p-1.5 rounded text-center">
              <strong>权益打包</strong><br/>
              多项服务组合优惠
            </div>
            <div className="bg-green-50 p-1.5 rounded text-center">
              <strong>持续订阅</strong><br/>
              年费/月费循环收入
            </div>
            <div className="bg-purple-50 p-1.5 rounded text-center">
              <strong>用户忠诚</strong><br/>
              提升用户粘性和LTV
            </div>
          </div>
        </motion.div>

        {/* 主要会员类型案例分析 */}
        <motion.div 
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* 电商会员 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-red-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-red-100 rounded">
                <ShoppingBag className="w-3 h-3 text-red-600" />
              </div>
              <h4 className="text-sm text-gray-900">电商会员</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-red-50 p-1.5 rounded">
                <strong>京东PLUS：</strong>299元/年，2000万+会员
              </div>
              <div>
                <p><strong>核心权益：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 免运费+优先配送</li>
                  <li>• 专享优惠券+返京豆</li>
                  <li>• 生鲜专属+会员价</li>
                  <li>• 联合会员权益（爱奇艺等）</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>商业价值：</strong>会员年消费是普通用户3-5倍
              </div>
            </div>
          </motion.div>

          {/* 视频会员 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-blue-100 rounded">
                <Video className="w-3 h-3 text-blue-600" />
              </div>
              <h4 className="text-sm text-gray-900">视频会员</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1.5 rounded">
                <strong>爱奇艺VIP：</strong>258元/年，1.06亿会员
              </div>
              <div>
                <p><strong>核心权益：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 免广告观看</li>
                  <li>• VIP专享内容</li>
                  <li>• 蓝光画质+杜比音效</li>
                  <li>• 提前看剧+会员抢先</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>收入结构：</strong>会员收入占总收入60%+
              </div>
            </div>
          </motion.div>

          {/* 生活服务会员 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-green-100 rounded">
                <Car className="w-3 h-3 text-green-600" />
              </div>
              <h4 className="text-sm text-gray-900">生活服务会员</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1.5 rounded">
                <strong>美团会员：</strong>99元/年，红包优惠
              </div>
              <div>
                <p><strong>核心权益：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 外卖免配送费</li>
                  <li>• 酒店预订折扣</li>
                  <li>• 打车券+电影票优惠</li>
                  <li>• 生鲜优选+生活缴费</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>策略特点：</strong>低价获客+多场景消费
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 会员模式成功要素分析 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">会员模式关键成功要素</h3>
          <div className="grid grid-cols-5 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>关键要素</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>权益设计</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>定价策略</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>用户体验</strong>
            </div>
            <div className="text-center p-1 bg-orange-50 rounded">
              <strong>续费机制</strong>
            </div>

            {/* 核心内容 */}
            <div className="p-1 bg-gray-50 rounded text-center">价值感知</div>
            <div className="p-1 bg-blue-50 rounded text-center">权益明显超值</div>
            <div className="p-1 bg-green-50 rounded text-center">价格锚点设置</div>
            <div className="p-1 bg-purple-50 rounded text-center">专属身份体验</div>
            <div className="p-1 bg-orange-50 rounded text-center">到期前提醒</div>

            <div className="p-1 bg-gray-50 rounded text-center">使用频次</div>
            <div className="p-1 bg-blue-50 rounded text-center">多场景覆盖</div>
            <div className="p-1 bg-green-50 rounded text-center">分期付款选项</div>
            <div className="p-1 bg-purple-50 rounded text-center">会员专属标识</div>
            <div className="p-1 bg-orange-50 rounded text-center">续费优惠政策</div>

            <div className="p-1 bg-gray-50 rounded text-center">粘性建立</div>
            <div className="p-1 bg-blue-50 rounded text-center">会员等级体系</div>
            <div className="p-1 bg-green-50 rounded text-center">首年优惠价</div>
            <div className="p-1 bg-purple-50 rounded text-center">专属客服通道</div>
            <div className="p-1 bg-orange-50 rounded text-center">自动续费机制</div>
          </div>
        </motion.div>

        {/* 会员收入模型对比 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <BarChart3 className="w-3 h-3 text-amber-600" />
              会员收入模型分析
            </h4>
            <div className="space-y-1 text-xs">
              <div className="grid grid-cols-3 gap-1">
                <div className="text-center p-1 bg-gray-100 rounded">
                  <strong>指标</strong>
                </div>
                <div className="text-center p-1 bg-blue-50 rounded">
                  <strong>典型数值</strong>
                </div>
                <div className="text-center p-1 bg-green-50 rounded">
                  <strong>优化方向</strong>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">会员转化率</div>
                <div className="p-1 bg-blue-50 rounded text-center">3-8%</div>
                <div className="p-1 bg-green-50 rounded text-center">权益优化</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">年续费率</div>
                <div className="p-1 bg-blue-50 rounded text-center">60-80%</div>
                <div className="p-1 bg-green-50 rounded text-center">体验提升</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">会员ARPU</div>
                <div className="p-1 bg-blue-50 rounded text-center">200-500元/年</div>
                <div className="p-1 bg-green-50 rounded text-center">分层定价</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">获客成本</div>
                <div className="p-1 bg-blue-50 rounded text-center">50-150元</div>
                <div className="p-1 bg-green-50 rounded text-center">精准营销</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Repeat className="w-3 h-3 text-green-600" />
              会员生命周期管理
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <Users className="w-3 h-3 text-blue-600" />
                <span><strong>获客期：</strong>免费试用+新人专享价</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <Heart className="w-3 h-3 text-green-600" />
                <span><strong>激活期：</strong>引导使用核心权益功能</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <Calendar className="w-3 h-3 text-purple-600" />
                <span><strong>成长期：</strong>等级升级+专属活动</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-orange-50 rounded">
                <Clock className="w-3 h-3 text-orange-600" />
                <span><strong>续费期：</strong>到期提醒+续费优惠</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-red-50 rounded">
                <Award className="w-3 h-3 text-red-600" />
                <span><strong>忠诚期：</strong>长期会员专属礼品</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 投资服务行业会员化机遇 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-amber-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <TrendingUp className="w-3 h-3" />
            投资服务行业会员制设计策略
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Crown className="w-2 h-2" />
                投资研究会员
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 基础：市场快讯+基础数据</li>
                <li>• 高级：深度研报+投资策略（999元/年）</li>
                <li>• 白金：1对1咨询+线下活动（2999元/年）</li>
                <li>• 权益：专属研究员+优先问答</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Zap className="w-2 h-2" />
                投资工具会员
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 基础：免费选股工具+限额</li>
                <li>• 专业：AI分析+无限次数（599元/年）</li>
                <li>• 机构：API接口+数据导出（1999元/年）</li>
                <li>• 权益：实时推送+专属模型</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Book className="w-2 h-2" />
                投资教育会员
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 基础：免费课程+基础资料</li>
                <li>• 进阶：系统课程+作业点评（1299元/年）</li>
                <li>• 大师：私教指导+实盘跟踪（4999元/年）</li>
                <li>• 权益：专属社群+定期直播</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}