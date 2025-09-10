import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Users, 
  CreditCard, 
  Play, 
  Gamepad2, 
  DollarSign, 
  Zap,
  Gift,
  Target,
  TrendingUp
} from 'lucide-react';

export function ToCBusinessModelSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl w-full space-y-4">
        
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-1"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Users className="w-3 h-3" />
            To C 商业模式深度解析
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            To C 产品商业模式剖析与案例分析
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            从用户心理到商业逻辑，解读中国To C产品的成功盈利密码
          </motion.p>
        </motion.div>

        {/* To C 商业模式核心特征 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-blue-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-blue-600" />
            To C 商业模式核心逻辑
          </h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="bg-blue-50 p-1 rounded text-center">
              <strong>用户规模导向</strong><br/>
              千万级用户基数
            </div>
            <div className="bg-green-50 p-1 rounded text-center">
              <strong>低单价高频次</strong><br/>
              小额多次消费
            </div>
            <div className="bg-purple-50 p-1 rounded text-center">
              <strong>情感化驱动</strong><br/>
              娱乐社交需求
            </div>
            <div className="bg-orange-50 p-1 rounded text-center">
              <strong>网络效应</strong><br/>
              增长自我强化
            </div>
          </div>
        </motion.div>

        {/* 主要盈利模式分类 */}
        <motion.div 
          className="grid grid-cols-3 gap-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* 内容付费模式 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-1 bg-green-100 rounded">
                <CreditCard className="w-3 h-3 text-green-600" />
              </div>
              <h4 className="text-xs text-gray-900">内容付费模式</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1 rounded">
                <strong>核心：</strong>优质内容稀缺性，用户为价值买单
              </div>
              <div>
                <p><strong>案例：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 得到App（年营收过亿）</li>
                  <li>• 喜马拉雅（会员+打赏）</li>
                  <li>• 知乎Live、知乎盐选</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded">
                <strong>要素：</strong>内容质量+个人IP+持续更新
              </div>
            </div>
          </motion.div>

          {/* 视频娱乐模式 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-1 bg-purple-100 rounded">
                <Play className="w-3 h-3 text-purple-600" />
              </div>
              <h4 className="text-xs text-gray-900">视频娱乐模式</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1 rounded">
                <strong>核心：</strong>时间消费+娱乐价值+社交体验
              </div>
              <div>
                <p><strong>案例：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 爱奇艺（会员248元/年）</li>
                  <li>• 腾讯视频（广告+会员）</li>
                  <li>• B站（大会员+直播打赏）</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded">
                <strong>要素：</strong>优质内容+用户时长+社区氛围
              </div>
            </div>
          </motion.div>

          {/* 游戏娱乐模式 */}
          <motion.div 
            className="bg-white rounded-lg p-2 shadow-lg border-t-4 border-red-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="p-1 bg-red-100 rounded">
                <Gamepad2 className="w-3 h-3 text-red-600" />
              </div>
              <h4 className="text-xs text-gray-900">游戏娱乐模式</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-red-50 p-1 rounded">
                <strong>核心：</strong>沉浸体验+虚拟价值+社交竞技
              </div>
              <div>
                <p><strong>案例：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 王者荣耀（皮肤+通行证）</li>
                  <li>• 原神（年收入30亿美元）</li>
                  <li>• 开心消消乐（道具+广告）</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1 rounded">
                <strong>要素：</strong>游戏性+付费设计+社交机制
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 盈利模式对比分析 */}
        <motion.div 
          className="bg-white rounded-lg p-2 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-sm text-gray-900 mb-1 text-center">盈利模式效果对比</h3>
          <div className="grid grid-cols-5 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>模式类型</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>用户付费率</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>ARPU值</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>用户粘性</strong>
            </div>
            <div className="text-center p-1 bg-orange-50 rounded">
              <strong>扩张难度</strong>
            </div>

            {/* 内容付费 */}
            <div className="p-1 bg-gray-50 rounded text-center">内容付费</div>
            <div className="p-1 bg-blue-50 rounded text-center">5-15%</div>
            <div className="p-1 bg-green-50 rounded text-center">50-200元/年</div>
            <div className="p-1 bg-purple-50 rounded text-center">中等</div>
            <div className="p-1 bg-orange-50 rounded text-center">较高</div>

            {/* 视频娱乐 */}
            <div className="p-1 bg-gray-50 rounded text-center">视频娱乐</div>
            <div className="p-1 bg-blue-50 rounded text-center">10-25%</div>
            <div className="p-1 bg-green-50 rounded text-center">150-300元/年</div>
            <div className="p-1 bg-purple-50 rounded text-center">高</div>
            <div className="p-1 bg-orange-50 rounded text-center">中等</div>

            {/* 游戏娱乐 */}
            <div className="p-1 bg-gray-50 rounded text-center">游戏娱乐</div>
            <div className="p-1 bg-blue-50 rounded text-center">3-8%</div>
            <div className="p-1 bg-green-50 rounded text-center">300-1000元/年</div>
            <div className="p-1 bg-purple-50 rounded text-center">极高</div>
            <div className="p-1 bg-orange-50 rounded text-center">低</div>
          </div>
        </motion.div>

        {/* 投资服务行业思考 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-blue-600 rounded-lg p-2 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-sm mb-1 text-center flex items-center justify-center gap-2">
            <TrendingUp className="w-3 h-3" />
            投资服务行业To C化的机遇与挑战
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Gift className="w-3 h-3" />
                学习借鉴点
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• <strong>内容营销：</strong>投资教育内容付费化</li>
                <li>• <strong>社区运营：</strong>投资者社群和互动体验</li>
                <li>• <strong>工具服务：</strong>简化投资决策和操作流程</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs flex items-center gap-1">
                <Zap className="w-3 h-3" />
                关键差异点
              </h4>
              <ul className="space-y-0.5 text-xs">
                <li>• <strong>监管限制：</strong>金融服务合规要求更严格</li>
                <li>• <strong>专业门槛：</strong>投资知识要求较高</li>
                <li>• <strong>风险属性：</strong>涉及用户真实资金安全</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}