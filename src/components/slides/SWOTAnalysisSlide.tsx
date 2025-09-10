import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  TrendingUp, 
  AlertTriangle, 
  Target, 
  Shield,
  Star,
  Zap,
  Brain,
  Users,
  DollarSign,
  Globe,
  Building2,
  Award
} from 'lucide-react';

export function SWOTAnalysisSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-slate-50 to-gray-50">
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
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs">
              <Target className="w-3 h-3" />
              SWOT分析
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
              <Shield className="w-3 h-3" />
              战略规划
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            SWOT战略分析
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            全面评估内外部环境，制定科学的战略发展路径
          </motion.p>
        </motion.div>

        {/* SWOT四象限 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* 优势 Strengths */}
          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg text-green-800">优势 (Strengths)</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Brain className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-green-800 font-medium">AI技术领先</h4>
                  <p className="text-xs text-green-700">原生AI架构，多模型融合能力</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-green-800 font-medium">精准定位</h4>
                  <p className="text-xs text-green-700">专注中小机构，避开巨头竞争</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-green-800 font-medium">成本优势</h4>
                  <p className="text-xs text-green-700">99%成本节约，极致性价比</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-green-800 font-medium">响应敏捷</h4>
                  <p className="text-xs text-green-700">实时服务，快速迭代能力</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-green-800 font-medium">行业背景</h4>
                  <p className="text-xs text-green-700">深耕投资服务，理解客户需求</p>
                </div>
              </div>
            </div>
          </div>

          {/* 劣势 Weaknesses */}
          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg text-red-800">劣势 (Weaknesses)</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-red-800 font-medium">团队规模</h4>
                  <p className="text-xs text-red-700">技术团队有限，依赖外包开发</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-red-800 font-medium">品牌认知</h4>
                  <p className="text-xs text-red-700">新品牌，市场认知度待建立</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-red-800 font-medium">资金有限</h4>
                  <p className="text-xs text-red-700">初期投入受限，影响发展速度</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-red-800 font-medium">数据积累</h4>
                  <p className="text-xs text-red-700">缺少历史数据，需要时间积累</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-red-800 font-medium">合规风险</h4>
                  <p className="text-xs text-red-700">金融监管要求高，合规成本大</p>
                </div>
              </div>
            </div>
          </div>

          {/* 机会 Opportunities */}
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg text-blue-800">机会 (Opportunities)</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-blue-800 font-medium">政策支持</h4>
                  <p className="text-xs text-blue-700">AI+金融政策利好，数字化转型</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-blue-800 font-medium">市场空白</h4>
                  <p className="text-xs text-blue-700">中小机构服务蓝海，竞争较少</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Brain className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-blue-800 font-medium">技术成熟</h4>
                  <p className="text-xs text-blue-700">AI大模型普及，接入成本降低</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-blue-800 font-medium">需求增长</h4>
                  <p className="text-xs text-blue-700">机构数字化需求爆发式增长</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-blue-800 font-medium">生态合作</h4>
                  <p className="text-xs text-blue-700">与AI厂商、数据商深度合作</p>
                </div>
              </div>
            </div>
          </div>

          {/* 威胁 Threats */}
          <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg text-orange-800">威胁 (Threats)</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-orange-800 font-medium">巨头入局</h4>
                  <p className="text-xs text-orange-700">万德、同花顺等巨头下沉竞争</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Brain className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-orange-800 font-medium">技术门槛</h4>
                  <p className="text-xs text-orange-700">AI技术快速发展，需持续投入</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-orange-800 font-medium">监管变化</h4>
                  <p className="text-xs text-orange-700">金融AI监管政策不确定性</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-orange-800 font-medium">价格战</h4>
                  <p className="text-xs text-orange-700">竞争加剧可能引发价格战</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-orange-800 font-medium">经济波动</h4>
                  <p className="text-xs text-orange-700">经济下行影响客户付费意愿</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 战略建议 */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-lg border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-slate-600" />
            基于SWOT的战略建议
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="text-sm text-green-800 font-medium mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  SO策略（优势+机会）
                </h4>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• 利用AI技术优势抢占中小机构市场空白</li>
                  <li>• 与AI厂商深度合作，强化技术护城河</li>
                  <li>• 快速响应政策机遇，扩大市场影响力</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm text-blue-800 font-medium mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  WO策略（劣势+机会）
                </h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• 通过合作伙伴弥补技术团队不足</li>
                  <li>• 利用政策红利获得资金和资源支持</li>
                  <li>• 建立行业联盟提升品牌认知度</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="text-sm text-orange-800 font-medium mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  ST策略（优势+威胁）
                </h4>
                <ul className="text-xs text-orange-700 space-y-1">
                  <li>• 依靠成本优势构建价格竞争壁垒</li>
                  <li>• 专注细分市场，避免与巨头正面竞争</li>
                  <li>• 持续技术创新保持领先优势</li>
                </ul>
              </div>
              
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="text-sm text-red-800 font-medium mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  WT策略（劣势+威胁）
                </h4>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>• 建立战略合作降低技术和资金风险</li>
                  <li>• 完善合规体系应对监管变化</li>
                  <li>• 多元化收入模式降低经营风险</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 关键成功因素 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-500 to-gray-600 rounded-xl p-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-6 h-6" />
            <h3 className="text-lg">关键成功因素</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center space-y-2">
              <Brain className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">技术领先</h4>
              <p className="text-slate-200 text-xs">持续AI技术创新与优化</p>
            </div>
            <div className="text-center space-y-2">
              <Users className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">客户成功</h4>
              <p className="text-slate-200 text-xs">深度理解需求，提升满意度</p>
            </div>
            <div className="text-center space-y-2">
              <Globe className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">生态建设</h4>
              <p className="text-slate-200 text-xs">构建合作伙伴生态网络</p>
            </div>
            <div className="text-center space-y-2">
              <Award className="w-8 h-8 mx-auto" />
              <h4 className="font-medium">品牌塑造</h4>
              <p className="text-slate-200 text-xs">建立专业品牌和行业影响力</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}