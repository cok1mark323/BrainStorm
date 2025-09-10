import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  ShoppingCart, 
  Car, 
  Users, 
  Store,
  DollarSign, 
  Zap,
  TrendingUp,
  Target,
  Layers,
  ArrowRightLeft,
  Clock,
  MapPin
} from 'lucide-react';

export function B2CBusinessModelSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl w-full space-y-4">
        
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Layers className="w-3 h-3" />
            B2C 平台模式深度解析
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            B2C平台商业模式：多方共赢的生态系统
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            连接企业与消费者的平台模式，让每个参与方都能在交易中获得价值
          </motion.p>
        </motion.div>

        {/* B2C平台模式核心定义 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-orange-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-orange-600" />
            B2C平台模式核心特征
          </h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="bg-orange-50 p-1.5 rounded text-center">
              <strong>连接多方</strong><br/>
              企业-平台-消费者三方生态
            </div>
            <div className="bg-blue-50 p-1.5 rounded text-center">
              <strong>多元收入</strong><br/>
              佣金+广告+增值服务
            </div>
            <div className="bg-green-50 p-1.5 rounded text-center">
              <strong>网络效应</strong><br/>
              用户越多价值越大
            </div>
            <div className="bg-purple-50 p-1.5 rounded text-center">
              <strong>数据驱动</strong><br/>
              用户行为数据变现
            </div>
          </div>
        </motion.div>

        {/* 核心案例分析：外卖和打车 */}
        <motion.div 
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* 外卖平台案例 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-red-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-red-100 rounded">
                <ShoppingCart className="w-3 h-3 text-red-600" />
              </div>
              <h4 className="text-sm text-gray-900">外卖平台模式（美团外卖）</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-red-50 p-1.5 rounded">
                <strong>三方价值：</strong>商家获客+用户便利+骑手收入
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-blue-50 p-1 rounded">
                  <strong>商家端收入：</strong><br/>
                  • 佣金抽成 18-22%<br/>
                  • 配送费分成<br/>
                  • 广告推广费
                </div>
                <div className="bg-green-50 p-1 rounded">
                  <strong>用户端收入：</strong><br/>
                  • 配送费收入<br/>
                  • 会员费收入<br/>
                  • 金融服务费
                </div>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>2023年数据：</strong>美团外卖年交易额超8000亿，佣金收入1000亿+
              </div>
            </div>
          </motion.div>

          {/* 打车平台案例 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-blue-100 rounded">
                <Car className="w-3 h-3 text-blue-600" />
              </div>
              <h4 className="text-sm text-gray-900">网约车平台模式（滴滴出行）</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1.5 rounded">
                <strong>三方价值：</strong>司机接单+乘客出行+平台撮合
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-orange-50 p-1 rounded">
                  <strong>司机端收入：</strong><br/>
                  • 订单佣金 20-25%<br/>
                  • 信息服务费<br/>
                  • 车辆租赁分成
                </div>
                <div className="bg-purple-50 p-1 rounded">
                  <strong>乘客端收入：</strong><br/>
                  • 动态调价差额<br/>
                  • 会员费收入<br/>
                  • 广告展示费
                </div>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>业务数据：</strong>日订单3000万+，单均佣金4-6元
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 其他B2C平台案例展示 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">其他典型B2C平台收入模式</h3>
          <div className="grid grid-cols-4 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>平台类型</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>代表产品</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>主要收入来源</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>多方价值分配</strong>
            </div>

            {/* 电商平台 */}
            <div className="p-1 bg-gray-50 rounded text-center">电商平台</div>
            <div className="p-1 bg-blue-50 rounded text-center">淘宝/天猫</div>
            <div className="p-1 bg-green-50 rounded text-center">佣金3-5%+广告费</div>
            <div className="p-1 bg-purple-50 rounded text-center">商家销售+买家便利+平台抽成</div>

            {/* 短视频平台 */}
            <div className="p-1 bg-gray-50 rounded text-center">短视频</div>
            <div className="p-1 bg-blue-50 rounded text-center">抖音/快手</div>
            <div className="p-1 bg-green-50 rounded text-center">广告费+直播分成</div>
            <div className="p-1 bg-purple-50 rounded text-center">创作者收入+用户娱乐+广告主曝光</div>

            {/* 旅游平台 */}
            <div className="p-1 bg-gray-50 rounded text-center">在线旅游</div>
            <div className="p-1 bg-blue-50 rounded text-center">携程/去哪儿</div>
            <div className="p-1 bg-green-50 rounded text-center">佣金8-15%+增值服务</div>
            <div className="p-1 bg-purple-50 rounded text-center">酒店获客+用户便利+平台佣金</div>

            {/* 同城服务 */}
            <div className="p-1 bg-gray-50 rounded text-center">同城服务</div>
            <div className="p-1 bg-blue-50 rounded text-center">58同城/boss直聘</div>
            <div className="p-1 bg-green-50 rounded text-center">会员费+推广费</div>
            <div className="p-1 bg-purple-50 rounded text-center">商家推广+用户信息+平台服务费</div>
          </div>
        </motion.div>

        {/* B2C平台成功要素分析 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-3 h-3 text-orange-600" />
              平台成功关键要素
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-orange-50 rounded">
                <Users className="w-3 h-3 text-orange-600" />
                <span><strong>双边增长：</strong>供需两端同时发力获客</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <ArrowRightLeft className="w-3 h-3 text-blue-600" />
                <span><strong>匹配效率：</strong>优化供需匹配算法</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <Clock className="w-3 h-3 text-green-600" />
                <span><strong>体验优化：</strong>持续提升服务体验</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <DollarSign className="w-3 h-3 text-purple-600" />
                <span><strong>价值平衡：</strong>确保各方都有合理收益</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2">收入结构演进路径</h4>
            <div className="space-y-1 text-xs">
              <div className="grid grid-cols-3 gap-1">
                <div className="text-center p-1 bg-gray-100 rounded">
                  <strong>阶段</strong>
                </div>
                <div className="text-center p-1 bg-blue-50 rounded">
                  <strong>收入重点</strong>
                </div>
                <div className="text-center p-1 bg-green-50 rounded">
                  <strong>策略目标</strong>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">启动期</div>
                <div className="p-1 bg-blue-50 rounded text-center">补贴获客</div>
                <div className="p-1 bg-green-50 rounded text-center">建立网络效应</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">成长期</div>
                <div className="p-1 bg-blue-50 rounded text-center">交易佣金</div>
                <div className="p-1 bg-green-50 rounded text-center">扩大市场份额</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">成熟期</div>
                <div className="p-1 bg-blue-50 rounded text-center">多元变现</div>
                <div className="p-1 bg-green-50 rounded text-center">利润最大化</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">扩张期</div>
                <div className="p-1 bg-blue-50 rounded text-center">生态收入</div>
                <div className="p-1 bg-green-50 rounded text-center">生态系统化</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 投资服务行业B2C化机遇 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-orange-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <MapPin className="w-3 h-3" />
            投资服务行业B2C平台化机遇
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">投资教育平台</h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 专家-平台-投资者模式</li>
                <li>• 课程分成+会员费+广告</li>
                <li>• 知识付费年费199-999元</li>
                <li>• 专家获得收入分成50-70%</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">投资跟单平台</h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 投顾-平台-跟单用户</li>
                <li>• 跟单佣金+管理费分成</li>
                <li>• 按收益分成20-30%</li>
                <li>• 投顾获得业绩提成</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">投资工具平台</h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 工具提供商-平台-用户</li>
                <li>• 订阅费+交易分成+数据费</li>
                <li>• 专业版年费2000-5000元</li>
                <li>• 开发者获得收入分账</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}