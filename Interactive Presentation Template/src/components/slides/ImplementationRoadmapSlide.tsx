import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Calendar, 
  Target, 
  Users, 
  DollarSign, 
  Brain,
  Building2,
  Rocket,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

export function ImplementationRoadmapSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-6xl w-full space-y-6">
        
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
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs">
              <Calendar className="w-3 h-3" />
              落地路线图
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
              <Rocket className="w-3 h-3" />
              分阶段实施
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            落地实施路线图
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            三阶段递进式发展策略，确保项目稳健落地与可持续发展
          </motion.p>
        </motion.div>

        {/* 三阶段发展计划 */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* 第一阶段 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl text-gray-900">第一阶段：MVP产品开发</h3>
                <p className="text-sm text-gray-600">时间：0-9个月 | 投资：350-500万</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm text-green-800 font-medium flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  核心功能开发
                </h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    基础AI智能体集成
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    数据接入与处理
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    基础分析功能
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    用户界面开发
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm text-green-800 font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  市场验证
                </h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    5-10家种子客户
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    产品功能验证
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    商业模式测试
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    用户反馈收集
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm text-green-800 font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  关键指标
                </h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    月活用户：50+
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    付费转化率：20%+
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    月收入：50万+
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    客户满意度：85%+
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 第二阶段 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl text-gray-900">第二阶段：规模化发展</h3>
                <p className="text-sm text-gray-600">时间：9-24个月 | 投资：800-1200万</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm text-blue-800 font-medium flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  产品完善
                </h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    高级AI功能
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    增值服务模块
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    API生态建设
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    移动端应用
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm text-blue-800 font-medium flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  市场拓展
                </h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    100+付费客户
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    销售团队建设
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    渠道合作伙伴
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    品牌建设
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm text-blue-800 font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  关键指标
                </h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    月收入：500万+
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    客户留存率：90%+
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    NPS评分：60+
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    市场份额：5%+
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 第三阶段 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl text-gray-900">第三阶段：生态构建</h3>
                <p className="text-sm text-gray-600">时间：24-36个月 | 投资：1500-2500万</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm text-purple-800 font-medium flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  技术领先
                </h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    自研AI模型
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    技术专利布局
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    开放平台建设
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    行业标准制定
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm text-purple-800 font-medium flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  生态扩展
                </h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    500+企业客户
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    国际市场拓展
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    行业联盟建设
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    资本市场准备
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm text-purple-800 font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  关键指标
                </h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    年收入：2亿+
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    利润率：30%+
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    市场份额：15%+
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    估值：50亿+
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 关键里程碑 */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-lg border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-600" />
            关键里程碑时间线
          </h3>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">3个月：MVP产品发布</h4>
                  <p className="text-xs text-gray-600">基础功能上线，开始种子用户测试</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">6个月：首批付费客户</h4>
                  <p className="text-xs text-gray-600">10家付费客户，月收入突破10万</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center relative z-10">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">12个月：A轮融资</h4>
                  <p className="text-xs text-gray-600">完成A轮融资，估值达到2亿</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center relative z-10">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">18个月：行业影响力</h4>
                  <p className="text-xs text-gray-600">成为行业标杆，100+付费客户</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center relative z-10">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">36个月：IPO准备</h4>
                  <p className="text-xs text-gray-600">启动IPO准备，估值50亿+</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 执行保障 */}
        <motion.div 
          className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6" />
            <h3 className="text-lg">执行保障机制</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center space-y-2">
              <Users className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">团队建设</h4>
              <p className="text-cyan-100 text-xs">核心团队+外包合作模式</p>
            </div>
            <div className="text-center space-y-2">
              <DollarSign className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">资金管理</h4>
              <p className="text-cyan-100 text-xs">分阶段投入，风险可控</p>
            </div>
            <div className="text-center space-y-2">
              <Target className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">目标管理</h4>
              <p className="text-cyan-100 text-xs">OKR目标体系，量化考核</p>
            </div>
            <div className="text-center space-y-2">
              <Clock className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">进度监控</h4>
              <p className="text-cyan-100 text-xs">月度review，及时调整</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}