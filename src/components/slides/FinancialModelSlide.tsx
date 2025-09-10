import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  PieChart, 
  Calculator,
  Target,
  Users,
  Clock,
  Award,
  ArrowUp,
  Percent,
  Building2
} from 'lucide-react';

export function FinancialModelSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-emerald-50 to-teal-50">
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
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs">
              <Calculator className="w-3 h-3" />
              财务模型
            </div>
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs">
              <TrendingUp className="w-3 h-3" />
              盈利预测
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            财务模型与盈利预测
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            基于保守估算的三年财务预测模型，展现项目商业价值与投资回报
          </motion.p>
        </motion.div>

        {/* 三年财务预测表 */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-lg border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-600" />
            三年财务预测（万元）
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-emerald-50 border-b-2 border-emerald-200">
                  <th className="text-left p-4 text-emerald-800 font-medium">财务指标</th>
                  <th className="text-center p-4 text-emerald-800 font-medium">第1年</th>
                  <th className="text-center p-4 text-emerald-800 font-medium">第2年</th>
                  <th className="text-center p-4 text-emerald-800 font-medium">第3年</th>
                  <th className="text-center p-4 text-emerald-800 font-medium">复合增长率</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">总收入</td>
                  <td className="p-4 text-center text-green-600 font-medium">600</td>
                  <td className="p-4 text-center text-green-600 font-medium">3,500</td>
                  <td className="p-4 text-center text-green-600 font-medium">12,000</td>
                  <td className="p-4 text-center text-emerald-600 font-medium">365%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">- SaaS订阅</td>
                  <td className="p-4 text-center text-gray-600">300</td>
                  <td className="p-4 text-center text-gray-600">1,800</td>
                  <td className="p-4 text-center text-gray-600">6,000</td>
                  <td className="p-4 text-center text-gray-600">316%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">- 增值服务</td>
                  <td className="p-4 text-center text-gray-600">200</td>
                  <td className="p-4 text-center text-gray-600">1,200</td>
                  <td className="p-4 text-center text-gray-600">4,200</td>
                  <td className="p-4 text-center text-gray-600">359%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">- 数据授权</td>
                  <td className="p-4 text-center text-gray-600">100</td>
                  <td className="p-4 text-center text-gray-600">500</td>
                  <td className="p-4 text-center text-gray-600">1,800</td>
                  <td className="p-4 text-center text-gray-600">349%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">总成本</td>
                  <td className="p-4 text-center text-red-600">450</td>
                  <td className="p-4 text-center text-red-600">2,100</td>
                  <td className="p-4 text-center text-red-600">6,000</td>
                  <td className="p-4 text-center text-red-600">235%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">- 技术开发</td>
                  <td className="p-4 text-center text-gray-600">200</td>
                  <td className="p-4 text-center text-gray-600">800</td>
                  <td className="p-4 text-center text-gray-600">2,000</td>
                  <td className="p-4 text-center text-gray-600">225%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">- 销售营销</td>
                  <td className="p-4 text-center text-gray-600">120</td>
                  <td className="p-4 text-center text-gray-600">700</td>
                  <td className="p-4 text-center text-gray-600">2,400</td>
                  <td className="p-4 text-center text-gray-600">315%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-700">- 运营管理</td>
                  <td className="p-4 text-center text-gray-600">130</td>
                  <td className="p-4 text-center text-gray-600">600</td>
                  <td className="p-4 text-center text-gray-600">1,600</td>
                  <td className="p-4 text-center text-gray-600">206%</td>
                </tr>
                <tr className="bg-emerald-50 border-b-2 border-emerald-200">
                  <td className="p-4 font-bold text-emerald-900">净利润</td>
                  <td className="p-4 text-center font-bold text-emerald-700">150</td>
                  <td className="p-4 text-center font-bold text-emerald-700">1,400</td>
                  <td className="p-4 text-center font-bold text-emerald-700">6,000</td>
                  <td className="p-4 text-center font-bold text-emerald-700">467%</td>
                </tr>
                <tr className="bg-teal-50">
                  <td className="p-4 font-bold text-teal-900">利润率</td>
                  <td className="p-4 text-center font-bold text-teal-700">25%</td>
                  <td className="p-4 text-center font-bold text-teal-700">40%</td>
                  <td className="p-4 text-center font-bold text-teal-700">50%</td>
                  <td className="p-4 text-center font-bold text-teal-700">+25pp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 关键经营指标 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-2">付费客户数</h3>
            <div className="text-2xl text-blue-600 mb-1">500+</div>
            <p className="text-xs text-gray-500">第3年预期</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-2">ARPU值</h3>
            <div className="text-2xl text-green-600 mb-1">24万</div>
            <p className="text-xs text-gray-500">年均客单价</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Percent className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-2">客户留存率</h3>
            <div className="text-2xl text-purple-600 mb-1">92%</div>
            <p className="text-xs text-gray-500">年度留存</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-2">回收期</h3>
            <div className="text-2xl text-orange-600 mb-1">18个月</div>
            <p className="text-xs text-gray-500">投资回收</p>
          </div>
        </motion.div>

        {/* 投资回报分析 */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-lg border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-600" />
            投资回报分析
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-lg">
                <h4 className="text-sm text-emerald-800 font-medium mb-2 flex items-center gap-2">
                  <ArrowUp className="w-4 h-4" />
                  核心假设
                </h4>
                <ul className="text-xs text-emerald-700 space-y-1">
                  <li>• 目标市场：中小机构约1000家</li>
                  <li>• 市场渗透率：第3年达到50%</li>
                  <li>• 平均客单价：24万/年</li>
                  <li>• 客户留存率：90%+</li>
                  <li>• 毛利率：75-85%</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm text-blue-800 font-medium mb-2 flex items-center gap-2">
                  <Calculator className="w-4 h-4" />
                  投资需求
                </h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• 第1年：500万（产品开发）</li>
                  <li>• 第2年：1200万（市场拓展）</li>
                  <li>• 第3年：2500万（规模化）</li>
                  <li>• 总投资：4200万</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="text-sm text-green-800 font-medium mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  投资回报
                </h4>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• 3年累计收入：1.61亿</li>
                  <li>• 3年累计净利润：7550万</li>
                  <li>• ROI：180%（3年）</li>
                  <li>• IRR：89%</li>
                  <li>• 预期估值：50亿（3年后）</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="text-sm text-orange-800 font-medium mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  估值逻辑
                </h4>
                <ul className="text-xs text-orange-700 space-y-1">
                  <li>• 收入倍数：4-5倍（SaaS标准）</li>
                  <li>• 利润倍数：25-30倍（成长性）</li>
                  <li>• 市场份额价值：行业定价权</li>
                  <li>• 数据资产价值：长期护城河</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 敏感性分析 */}
        <motion.div 
          className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <PieChart className="w-6 h-6" />
            <h3 className="text-lg">敏感性分析与风险管控</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">保守情景（70%目标）</h4>
              <ul className="text-emerald-100 text-xs space-y-1">
                <li>• 第3年收入：8400万</li>
                <li>• 净利润率：35%</li>
                <li>• ROI：120%</li>
                <li>• 仍有良好回报</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">基准情景（100%目标）</h4>
              <ul className="text-emerald-100 text-xs space-y-1">
                <li>• 第3年收入：1.2亿</li>
                <li>• 净利润率：50%</li>
                <li>• ROI：180%</li>
                <li>• 预期基准表现</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">乐观情景（130%目标）</h4>
              <ul className="text-emerald-100 text-xs space-y-1">
                <li>• 第3年收入：1.56亿</li>
                <li>• 净利润率：55%</li>
                <li>• ROI：250%</li>
                <li>• 超额收益空间</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}