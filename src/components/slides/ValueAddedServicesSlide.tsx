import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Gift, 
  Star, 
  Crown, 
  Zap,
  Users, 
  TrendingUp,
  Target,
  Layers,
  CheckCircle,
  XCircle,
  DollarSign,
  ArrowUp,
  Music,
  Cloud,
  Gamepad2,
  FileText
} from 'lucide-react';

export function ValueAddedServicesSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl w-full space-y-4">
        
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Gift className="w-3 h-3" />
            增值服务商业模式
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            增值服务类产品盈利模式深度解析
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            免费基础服务吸引用户，付费增值功能实现盈利的经典商业模式
          </motion.p>
        </motion.div>

        {/* 增值服务模式核心逻辑 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-purple-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-purple-600" />
            增值服务模式核心逻辑
          </h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="bg-purple-50 p-1.5 rounded text-center">
              <strong>免费获客</strong><br/>
              基础功能免费使用
            </div>
            <div className="bg-blue-50 p-1.5 rounded text-center">
              <strong>分层服务</strong><br/>
              多档次增值功能
            </div>
            <div className="bg-green-50 p-1.5 rounded text-center">
              <strong>用户转化</strong><br/>
              免费用户转付费会员
            </div>
            <div className="bg-orange-50 p-1.5 rounded text-center">
              <strong>持续收入</strong><br/>
              订阅制稳定现金流
            </div>
          </div>
        </motion.div>

        {/* 典型增值服务案例分析 */}
        <motion.div 
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* 网盘服务 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-blue-100 rounded">
                <Cloud className="w-3 h-3 text-blue-600" />
              </div>
              <h4 className="text-sm text-gray-900">网盘服务</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1.5 rounded">
                <strong>免费：</strong>5-15GB存储空间
              </div>
              <div>
                <p><strong>增值服务：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 百度网盘超级会员：30元/月</li>
                  <li>• 阿里云盘：99元/年</li>
                  <li>• 高速下载+大容量存储</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>转化率：</strong>免费用户转付费约5-8%
              </div>
            </div>
          </motion.div>

          {/* 音乐服务 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-green-100 rounded">
                <Music className="w-3 h-3 text-green-600" />
              </div>
              <h4 className="text-sm text-gray-900">音乐服务</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1.5 rounded">
                <strong>免费：</strong>基础播放+广告
              </div>
              <div>
                <p><strong>增值服务：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• QQ音乐绿钻：20元/月</li>
                  <li>• 网易云音乐：16元/月</li>
                  <li>• 无损音质+独家曲库</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>付费率：</strong>活跃用户付费率约10-15%
              </div>
            </div>
          </motion.div>

          {/* 游戏增值 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-purple-100 rounded">
                <Gamepad2 className="w-3 h-3 text-purple-600" />
              </div>
              <h4 className="text-sm text-gray-900">游戏道具</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1.5 rounded">
                <strong>免费：</strong>基础游戏体验
              </div>
              <div>
                <p><strong>增值服务：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 王者荣耀皮肤：18-288元</li>
                  <li>• 和平精英套装：68-688元</li>
                  <li>• 战令通行证：68元/季</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>ARPU：</strong>付费用户月均消费50-200元
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 增值服务分层策略对比 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">典型增值服务分层策略对比</h3>
          <div className="grid grid-cols-5 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>服务层级</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>免费版</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>基础付费</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>高级付费</strong>
            </div>
            <div className="text-center p-1 bg-orange-50 rounded">
              <strong>顶级付费</strong>
            </div>

            {/* 功能对比 */}
            <div className="p-1 bg-gray-50 rounded text-center">功能权限</div>
            <div className="p-1 bg-blue-50 rounded text-center">基础功能+限制</div>
            <div className="p-1 bg-green-50 rounded text-center">去广告+部分高级功能</div>
            <div className="p-1 bg-purple-50 rounded text-center">全功能+优先体验</div>
            <div className="p-1 bg-orange-50 rounded text-center">专属功能+定制服务</div>

            {/* 价格区间 */}
            <div className="p-1 bg-gray-50 rounded text-center">价格</div>
            <div className="p-1 bg-blue-50 rounded text-center">0元</div>
            <div className="p-1 bg-green-50 rounded text-center">10-30元/月</div>
            <div className="p-1 bg-purple-50 rounded text-center">30-100元/月</div>
            <div className="p-1 bg-orange-50 rounded text-center">100+元/月</div>

            {/* 用户占比 */}
            <div className="p-1 bg-gray-50 rounded text-center">用户占比</div>
            <div className="p-1 bg-blue-50 rounded text-center">80-90%</div>
            <div className="p-1 bg-green-50 rounded text-center">5-15%</div>
            <div className="p-1 bg-purple-50 rounded text-center">2-5%</div>
            <div className="p-1 bg-orange-50 rounded text-center">0.5-2%</div>
          </div>
        </motion.div>

        {/* 增值服务成功要素 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Star className="w-3 h-3 text-purple-600" />
              成功关键要素
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <Users className="w-3 h-3 text-purple-600" />
                <span><strong>用户基数：</strong>免费版要有足够大的用户池</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <Zap className="w-3 h-3 text-blue-600" />
                <span><strong>价值感知：</strong>付费功能要有明显价值差异</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span><strong>转化路径：</strong>设计自然的付费转化流程</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-orange-50 rounded">
                <Crown className="w-3 h-3 text-orange-600" />
                <span><strong>体验优化：</strong>付费用户要有优越感</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2">增值服务设计原则</h4>
            <div className="space-y-1 text-xs">
              <div className="grid grid-cols-3 gap-1">
                <div className="text-center p-1 bg-gray-100 rounded">
                  <strong>设计原则</strong>
                </div>
                <div className="text-center p-1 bg-green-50 rounded">
                  <strong>正确做法</strong>
                </div>
                <div className="text-center p-1 bg-red-50 rounded">
                  <strong>错误做法</strong>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">功能设计</div>
                <div className="p-1 bg-green-50 rounded flex items-center gap-1">
                  <CheckCircle className="w-2 h-2 text-green-600" />
                  <span>增强不限制</span>
                </div>
                <div className="p-1 bg-red-50 rounded flex items-center gap-1">
                  <XCircle className="w-2 h-2 text-red-600" />
                  <span>功能残缺</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">价格策略</div>
                <div className="p-1 bg-green-50 rounded flex items-center gap-1">
                  <CheckCircle className="w-2 h-2 text-green-600" />
                  <span>分层合理</span>
                </div>
                <div className="p-1 bg-red-50 rounded flex items-center gap-1">
                  <XCircle className="w-2 h-2 text-red-600" />
                  <span>价格单一</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">用户体验</div>
                <div className="p-1 bg-green-50 rounded flex items-center gap-1">
                  <CheckCircle className="w-2 h-2 text-green-600" />
                  <span>引导自然</span>
                </div>
                <div className="p-1 bg-red-50 rounded flex items-center gap-1">
                  <XCircle className="w-2 h-2 text-red-600" />
                  <span>强制推销</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded text-center">会员权益</div>
                <div className="p-1 bg-green-50 rounded flex items-center gap-1">
                  <CheckCircle className="w-2 h-2 text-green-600" />
                  <span>特权明显</span>
                </div>
                <div className="p-1 bg-red-50 rounded flex items-center gap-1">
                  <XCircle className="w-2 h-2 text-red-600" />
                  <span>价值模糊</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 投资服务行业增值服务机遇 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-purple-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <ArrowUp className="w-3 h-3" />
            投资服务行业增值服务设计策略
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <FileText className="w-2 h-2" />
                基础信息服务
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 免费：基础市场数据+资讯</li>
                <li>• 付费：实时数据+深度研报</li>
                <li>• 高级：专属策略+1对1咨询</li>
                <li>• 定价：99-999元/月</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Target className="w-2 h-2" />
                投资工具服务
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 免费：基础选股工具</li>
                <li>• 付费：AI投研助手</li>
                <li>• 高级：量化策略回测</li>
                <li>• 定价：199-1999元/月</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Users className="w-2 h-2" />
                社区增值服务
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 免费：基础交流社区</li>
                <li>• 付费：专家直播+问答</li>
                <li>• 高级：私密圈子+线下活动</li>
                <li>• 定价：299-2999元/年</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}