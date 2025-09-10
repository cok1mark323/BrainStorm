import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Sparkles, 
  Gamepad2, 
  Car, 
  Home,
  Coffee, 
  Music,
  Camera,
  Palette,
  Video,
  MessageCircle,
  Smartphone,
  Monitor,
  Headphones,
  Shirt,
  Utensils,
  Plane,
  TreePine,
  Dumbbell,
  PawPrint,
  Baby,
  GraduationCap,
  Stethoscope,
  Wrench,
  TrendingUp,
  Globe,
  Users,
  Zap,
  Crown,
  Target,
  DollarSign
} from 'lucide-react';

export function MoreInnovationExamplesSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-6xl w-full space-y-4">
        
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Sparkles className="w-3 h-3" />
            更多创新案例
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            跨行业商业模式创新产品矩阵
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            探索各行业如何灵活运用多种商业模式组合，创造新的商业价值
          </motion.p>
        </motion.div>

        {/* 娱乐文化行业创新 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-emerald-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Music className="w-3 h-3 text-emerald-600" />
            娱乐文化行业创新产品
          </h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            {/* 游戏社交平台 */}
            <div className="bg-emerald-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Gamepad2 className="w-2 h-2" />
                游戏社交平台
              </h4>
              <div className="space-y-1">
                <p className="text-xs">游戏内容+社交互动+直播</p>
                <div className="flex flex-wrap gap-0.5">
                  <span className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-xs">To C</span>
                  <span className="bg-cyan-100 text-cyan-700 px-1 py-0.5 rounded text-xs">C2C</span>
                  <span className="bg-amber-100 text-amber-700 px-1 py-0.5 rounded text-xs">会员</span>
                </div>
                <p className="text-xs">道具付费+会员+直播打赏</p>
              </div>
            </div>

            {/* 短视频创作平台 */}
            <div className="bg-blue-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Video className="w-2 h-2" />
                短视频创作平台
              </h4>
              <div className="space-y-1">
                <p className="text-xs">内容创作+AI剪辑+分发</p>
                <div className="flex flex-wrap gap-0.5">
                  <span className="bg-orange-100 text-orange-700 px-1 py-0.5 rounded text-xs">B2C</span>
                  <span className="bg-rose-100 text-rose-700 px-1 py-0.5 rounded text-xs">广告</span>
                  <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值</span>
                </div>
                <p className="text-xs">广告分成+高级功能+模板售卖</p>
              </div>
            </div>

            {/* 音乐版权交易 */}
            <div className="bg-purple-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Headphones className="w-2 h-2" />
                音乐版权交易
              </h4>
              <div className="space-y-1">
                <p className="text-xs">音乐人+用户+平台</p>
                <div className="flex flex-wrap gap-0.5">
                  <span className="bg-cyan-100 text-cyan-700 px-1 py-0.5 rounded text-xs">C2C</span>
                  <span className="bg-green-100 text-green-700 px-1 py-0.5 rounded text-xs">To B</span>
                  <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值</span>
                </div>
                <p className="text-xs">版权交易佣金+企业授权费</p>
              </div>
            </div>

            {/* 艺术品NFT平台 */}
            <div className="bg-orange-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Palette className="w-2 h-2" />
                艺术品NFT平台
              </h4>
              <div className="space-y-1">
                <p className="text-xs">数字艺术+区块链+收藏</p>
                <div className="flex flex-wrap gap-0.5">
                  <span className="bg-cyan-100 text-cyan-700 px-1 py-0.5 rounded text-xs">C2C</span>
                  <span className="bg-amber-100 text-amber-700 px-1 py-0.5 rounded text-xs">会员</span>
                  <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值</span>
                </div>
                <p className="text-xs">交易手续费+会员+认证服务</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 生活服务行业创新 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* 智慧出行生态 */}
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Car className="w-3 h-3 text-blue-600" />
              智慧出行生态创新
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-blue-50 p-2 rounded">
                <h5 className="text-sm mb-1">共享出行平台</h5>
                <p className="text-xs mb-1">打车+拼车+代驾一体化</p>
                <div className="flex gap-0.5 mb-1">
                  <span className="bg-cyan-100 text-cyan-700 px-1 py-0.5 rounded text-xs">C2C</span>
                  <span className="bg-amber-100 text-amber-700 px-1 py-0.5 rounded text-xs">会员</span>
                </div>
                <p className="text-xs">佣金20%+会员免费券</p>
              </div>
              <div className="bg-green-50 p-2 rounded">
                <h5 className="text-sm mb-1">智能停车管理</h5>
                <p className="text-xs mb-1">停车位预约+自动缴费</p>
                <div className="flex gap-0.5 mb-1">
                  <span className="bg-green-100 text-green-700 px-1 py-0.5 rounded text-xs">To B</span>
                  <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值</span>
                </div>
                <p className="text-xs">SaaS年费+交易手续费</p>
              </div>
            </div>
          </div>

          {/* 智能家居生态 */}
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Home className="w-3 h-3 text-green-600" />
              智能家居生态创新
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-purple-50 p-2 rounded">
                <h5 className="text-sm mb-1">家装设计平台</h5>
                <p className="text-xs mb-1">设计师+用户+材料商</p>
                <div className="flex gap-0.5 mb-1">
                  <span className="bg-orange-100 text-orange-700 px-1 py-0.5 rounded text-xs">B2C</span>
                  <span className="bg-cyan-100 text-cyan-700 px-1 py-0.5 rounded text-xs">C2C</span>
                </div>
                <p className="text-xs">设计费分成+材料佣金</p>
              </div>
              <div className="bg-teal-50 p-2 rounded">
                <h5 className="text-sm mb-1">智能设备管理</h5>
                <p className="text-xs mb-1">设备连接+数据分析</p>
                <div className="flex gap-0.5 mb-1">
                  <span className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-xs">To C</span>
                  <span className="bg-amber-100 text-amber-700 px-1 py-0.5 rounded text-xs">会员</span>
                </div>
                <p className="text-xs">硬件利润+会员增值</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 细分垂直领域创新 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">细分垂直领域商业模式创新</h3>
          <div className="grid grid-cols-6 gap-2 text-xs">
            {/* 健身运动 */}
            <div className="bg-red-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Dumbbell className="w-2 h-2" />
                智能健身
              </h4>
              <p className="text-xs mb-1">AI教练+社区激励</p>
              <div className="flex gap-0.5 mb-1">
                <span className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-xs">To C</span>
                <span className="bg-amber-100 text-amber-700 px-1 py-0.5 rounded text-xs">会员</span>
              </div>
              <p className="text-xs">月会员99元+私教</p>
            </div>

            {/* 宠物服务 */}
            <div className="bg-yellow-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <PawPrint className="w-2 h-2" />
                宠物生态
              </h4>
              <p className="text-xs mb-1">医疗+用品+社交</p>
              <div className="flex gap-0.5 mb-1">
                <span className="bg-orange-100 text-orange-700 px-1 py-0.5 rounded text-xs">B2C</span>
                <span className="bg-cyan-100 text-cyan-700 px-1 py-0.5 rounded text-xs">C2C</span>
              </div>
              <p className="text-xs">电商佣金+服务费</p>
            </div>

            {/* 母婴育儿 */}
            <div className="bg-pink-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Baby className="w-2 h-2" />
                母婴平台
              </h4>
              <p className="text-xs mb-1">知识+用品+社区</p>
              <div className="flex gap-0.5 mb-1">
                <span className="bg-orange-100 text-orange-700 px-1 py-0.5 rounded text-xs">B2C</span>
                <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值</span>
              </div>
              <p className="text-xs">电商+专家咨询</p>
            </div>

            {/* 在线教育 */}
            <div className="bg-indigo-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <GraduationCap className="w-2 h-2" />
                职业教育
              </h4>
              <p className="text-xs mb-1">课程+就业+认证</p>
              <div className="flex gap-0.5 mb-1">
                <span className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-xs">To C</span>
                <span className="bg-green-100 text-green-700 px-1 py-0.5 rounded text-xs">To B</span>
              </div>
              <p className="text-xs">课程费+企业培训</p>
            </div>

            {/* 医疗健康 */}
            <div className="bg-green-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Stethoscope className="w-2 h-2" />
                远程医疗
              </h4>
              <p className="text-xs mb-1">问诊+购药+健康管理</p>
              <div className="flex gap-0.5 mb-1">
                <span className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-xs">To C</span>
                <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值</span>
              </div>
              <p className="text-xs">问诊费+药品佣金</p>
            </div>

            {/* 维修服务 */}
            <div className="bg-gray-50 p-2 rounded">
              <h4 className="text-sm mb-1 flex items-center gap-1">
                <Wrench className="w-2 h-2" />
                上门维修
              </h4>
              <p className="text-xs mb-1">师傅+用户+保障</p>
              <div className="flex gap-0.5 mb-1">
                <span className="bg-cyan-100 text-cyan-700 px-1 py-0.5 rounded text-xs">C2C</span>
                <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值</span>
              </div>
              <p className="text-xs">抽佣15%+保险</p>
            </div>
          </div>
        </motion.div>

        {/* 新兴技术赋能的商业模式 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Zap className="w-3 h-3 text-yellow-600" />
              AI技术驱动的新模式
            </h4>
            <div className="space-y-2 text-xs">
              <div className="bg-yellow-50 p-2 rounded">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="text-sm">AI内容创作平台</h5>
                  <div className="flex gap-0.5">
                    <span className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-xs">To C</span>
                    <span className="bg-green-100 text-green-700 px-1 py-0.5 rounded text-xs">To B</span>
                  </div>
                </div>
                <p className="text-xs">AI写作+设计+视频制作，按次付费+订阅制</p>
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="text-sm">智能客服机器人</h5>
                  <div className="flex gap-0.5">
                    <span className="bg-green-100 text-green-700 px-1 py-0.5 rounded text-xs">To B</span>
                    <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值</span>
                  </div>
                </div>
                <p className="text-xs">基础版SaaS+高级定制+按对话量计费</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Globe className="w-3 h-3 text-blue-600" />
              区块链赋能的新模式
            </h4>
            <div className="space-y-2 text-xs">
              <div className="bg-purple-50 p-2 rounded">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="text-sm">去中心化内容平台</h5>
                  <div className="flex gap-0.5">
                    <span className="bg-cyan-100 text-cyan-700 px-1 py-0.5 rounded text-xs">C2C</span>
                    <span className="bg-rose-100 text-rose-700 px-1 py-0.5 rounded text-xs">广告</span>
                  </div>
                </div>
                <p className="text-xs">内容创作者直接变现+平台token奖励</p>
              </div>
              <div className="bg-green-50 p-2 rounded">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="text-sm">数字资产交易平台</h5>
                  <div className="flex gap-0.5">
                    <span className="bg-cyan-100 text-cyan-700 px-1 py-0.5 rounded text-xs">C2C</span>
                    <span className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-xs">增值</span>
                  </div>
                </div>
                <p className="text-xs">交易手续费+高级交易工具+数据服务</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 商业模式创新成功指标 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-emerald-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <TrendingUp className="w-3 h-3" />
            商业模式创新评估维度
          </h3>
          <div className="grid grid-cols-5 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Target className="w-2 h-2" />
                市场定位
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 目标用户明确</li>
                <li>• 痛点解决有效</li>
                <li>• 差异化优势明显</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <DollarSign className="w-2 h-2" />
                盈利模式
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 收入来源多元化</li>
                <li>• 成本结构合理</li>
                <li>• 规模效应明显</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Users className="w-2 h-2" />
                用户增长
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 获客成本可控</li>
                <li>• 留存率持续提升</li>
                <li>• 病毒式增长潜力</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Zap className="w-2 h-2" />
                技术壁垒
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 核心技术优势</li>
                <li>• 数据资产积累</li>
                <li>• 持续创新能力</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Crown className="w-2 h-2" />
                竞争护城河
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 品牌认知度高</li>
                <li>• 网络效应强</li>
                <li>• 转换成本高</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}