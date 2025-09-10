import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Target, 
  Users, 
  Building2, 
  TrendingUp, 
  Brain,
  Shield,
  Zap,
  Globe,
  Star
} from 'lucide-react';

export function ProductPositioningSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-blue-50 to-indigo-50">
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
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
              <Target className="w-3 h-3" />
              产品设计
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
              <Zap className="w-3 h-3" />
              AI赋能
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            智投慧选：AI驱动的投资者服务平台
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            基于AI智能体技术，为机构投资者提供专业、智能、个性化的投资决策支持服务
          </motion.p>
        </motion.div>

        {/* 核心定位 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg text-gray-900">产品定位</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              专注于机构投资者的专业服务平台，结合AI智能分析与人工专业服务，提供一站式投资决策支持
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg text-gray-900">目标用户</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">私募基金管理人</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">家族办公室</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">资产管理公司</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg text-gray-900">核心价值</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              通过AI智能体降低研究成本，提升决策效率，为中小机构提供媲美大型机构的专业服务能力
            </p>
          </div>
        </motion.div>

        {/* 用户画像详细分析 */}
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-lg border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            目标用户画像分析
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm text-blue-800 mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  私募基金（资产规模10-100亿）
                </h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• 需要专业的投研支持，但成本敏感</li>
                  <li>• 希望快速获取市场洞察和投资机会</li>
                  <li>• 需要合规性和风险管理工具</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="text-sm text-green-800 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  家族办公室（资产规模5-50亿）
                </h4>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• 追求稳健收益和资产保值</li>
                  <li>• 需要跨资产类别的配置建议</li>
                  <li>• 重视个性化和定制化服务</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="text-sm text-purple-800 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  资产管理公司（中小型）
                </h4>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• 需要提升投研能力和效率</li>
                  <li>• 希望降低人力成本</li>
                  <li>• 需要差异化的产品和服务</li>
                </ul>
              </div>
              
              <div className="p-4 bg-amber-50 rounded-lg">
                <h4 className="text-sm text-amber-800 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  共同特征与需求
                </h4>
                <ul className="text-xs text-amber-700 space-y-1">
                  <li>• 预算有限，追求高性价比</li>
                  <li>• 重视服务的专业性和及时性</li>
                  <li>• 希望通过技术提升竞争力</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 市场机会 */}
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6" />
            <h3 className="text-lg">市场机会与时机</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium">政策机遇</h4>
              <p className="text-blue-100">资管新规推动行业规范化，中小机构急需专业工具提升竞争力</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">技术成熟</h4>
              <p className="text-blue-100">AI大模型技术日趋成熟，可以低成本接入专业的智能分析能力</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">市场空白</h4>
              <p className="text-blue-100">现有服务主要面向大型机构，中小机构服务存在明显空白</p>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}