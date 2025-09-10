import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Calculator, 
  Users, 
  Server, 
  Code, 
  Shield,
  Clock,
  DollarSign,
  TrendingUp,
  Building2,
  Brain,
  Database,
  Smartphone,
  Cloud,
  Settings,
  AlertTriangle,
  CheckCircle,
  Target,
  Zap
} from 'lucide-react';

export function DevelopmentCostAnalysisSlide() {
  const developmentTeam = [
    {
      role: "技术总监",
      count: 1,
      salary: "50-60万/年",
      description: "技术架构设计、团队管理",
      color: "bg-purple-100 text-purple-800"
    },
    {
      role: "前端开发工程师",
      count: 3,
      salary: "25-35万/年",
      description: "Web端、移动端界面开发",
      color: "bg-blue-100 text-blue-800"
    },
    {
      role: "后端开发工程师", 
      count: 4,
      salary: "30-40万/年",
      description: "API接口、数据处理、系统架构",
      color: "bg-green-100 text-green-800"
    },
    {
      role: "AI算法工程师",
      count: 2,
      salary: "40-50万/年",
      description: "智能推荐、数据分析算法",
      color: "bg-orange-100 text-orange-800"
    },
    {
      role: "产品经理",
      count: 2,
      salary: "25-30万/年",
      description: "需求分析、产品设计",
      color: "bg-pink-100 text-pink-800"
    },
    {
      role: "UI/UX设计师",
      count: 2,
      salary: "20-25万/年",
      description: "界面设计、用户体验",
      color: "bg-cyan-100 text-cyan-800"
    },
    {
      role: "测试工程师",
      count: 2,
      salary: "18-25万/年",
      description: "功能测试、性能测试",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      role: "DevOps工程师",
      count: 1,
      salary: "35-45万/年",
      description: "部署运维、系统监控",
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  const infrastructureCosts = [
    {
      category: "云服务器",
      items: ["阿里云ECS集群", "负载均衡", "CDN加速"],
      monthlyCost: "8-15万/月",
      annualCost: "100-180万/年",
      icon: Server,
      color: "text-blue-600"
    },
    {
      category: "数据库服务",
      items: ["RDS数据库", "Redis缓存", "数据备份"],
      monthlyCost: "3-8万/月",
      annualCost: "36-96万/年",
      icon: Database,
      color: "text-green-600"
    },
    {
      category: "AI服务",
      items: ["机器学习平台", "GPU计算资源", "大模型API"],
      monthlyCost: "5-12万/月",
      annualCost: "60-144万/年",
      icon: Brain,
      color: "text-purple-600"
    },
    {
      category: "安全防护",
      items: ["WAF防火墙", "DDoS防护", "SSL证书"],
      monthlyCost: "2-5万/月",
      annualCost: "24-60万/年",
      icon: Shield,
      color: "text-red-600"
    },
    {
      category: "第三方服务",
      items: ["支付接口", "短信服务", "实名认证"],
      monthlyCost: "1-3万/月",
      annualCost: "12-36万/年",
      icon: Settings,
      color: "text-orange-600"
    }
  ];

  const productModules = [
    {
      name: "AI智能投顾平台",
      complexity: "高",
      developmentTime: "8-12个月",
      teamSize: "12-15人",
      estimatedCost: "400-600万",
      features: ["个性化推荐", "风险评估", "组合优化", "实时监控"],
      reference: "参考：蚂蚁财富、理财魔方"
    },
    {
      name: "投资者社区平台",
      complexity: "中",
      developmentTime: "6-8个月", 
      teamSize: "8-10人",
      estimatedCost: "250-400万",
      features: ["社交功能", "内容发布", "直播互动", "知识付费"],
      reference: "参考：雪球、股吧、知乎"
    },
    {
      name: "企业投资决策SaaS",
      complexity: "高",
      developmentTime: "10-14个月",
      teamSize: "15-18人",
      estimatedCost: "500-800万",
      features: ["数据分析", "风险建模", "报表生成", "多租户架构"],
      reference: "参考：用友、金蝶、Salesforce"
    }
  ];

  const totalCostSummary = {
    firstYear: {
      development: "600-1000万",
      infrastructure: "250-400万",
      operation: "150-250万",
      total: "1000-1650万"
    },
    secondYear: {
      development: "400-600万",
      infrastructure: "300-500万", 
      operation: "200-350万",
      total: "900-1450万"
    },
    thirdYear: {
      development: "300-500万",
      infrastructure: "400-600万",
      operation: "300-500万", 
      total: "1000-1600万"
    }
  };

  return (
    <PresentationSlide className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl w-full space-y-6">
        
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-600 to-blue-600 text-white px-6 py-3 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Calculator className="w-6 h-6" />
            <span className="text-lg">自研成本预算分析</span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            脑暴产品自主研发投入预估
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            基于第17页脑暴的创新产品功能，评估自主研发所需的人力资源、技术投入和运维成本
          </motion.p>
        </motion.div>

        {/* 开发团队配置 */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-xl text-gray-800 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-600" />
            研发团队人力配置（17人标准团队）
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {developmentTeam.map((member, index) => (
              <motion.div
                key={member.role}
                className="bg-white rounded-lg p-4 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-gray-800">{member.role}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${member.color}`}>
                    {member.count}人
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-2">{member.description}</p>
                <div className="text-xs">
                  <span className="text-gray-500">薪资:</span>
                  <span className="text-blue-600 ml-1">{member.salary}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg text-gray-800">团队年度成本预算</h3>
            </div>
            <p className="text-gray-700">
              <span className="text-2xl text-blue-600">480-650万元/年</span>
              <span className="text-sm text-gray-500 ml-2">（含五险一金、年终奖、培训费用等）</span>
            </p>
          </div>
        </motion.div>

        {/* 基础设施成本 */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-xl text-gray-800 flex items-center gap-2">
            <Cloud className="w-6 h-6 text-green-600" />
            基础设施与运维成本
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {infrastructureCosts.slice(0, 3).map((infra, index) => (
              <motion.div
                key={infra.category}
                className="bg-white rounded-lg p-4 shadow-lg border border-gray-200"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <infra.icon className={`w-5 h-5 ${infra.color}`} />
                  <h3 className="text-lg text-gray-800">{infra.category}</h3>
                </div>
                
                <div className="space-y-2">
                  <ul className="text-sm text-gray-600 space-y-1">
                    {infra.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-2">
                    <div className="text-sm">
                      <span className="text-gray-500">月成本:</span>
                      <span className="text-blue-600 ml-1">{infra.monthlyCost}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">年成本:</span>
                      <span className="text-green-600 ml-1">{infra.annualCost}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {infrastructureCosts.slice(3).map((infra, index) => (
              <motion.div
                key={infra.category}
                className="bg-white rounded-lg p-4 shadow-lg border border-gray-200"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <infra.icon className={`w-5 h-5 ${infra.color}`} />
                  <h3 className="text-lg text-gray-800">{infra.category}</h3>
                </div>
                
                <div className="space-y-2">
                  <ul className="text-sm text-gray-600 space-y-1">
                    {infra.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-2">
                    <div className="text-sm">
                      <span className="text-gray-500">月成本:</span>
                      <span className="text-blue-600 ml-1">{infra.monthlyCost}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">年成本:</span>
                      <span className="text-green-600 ml-1">{infra.annualCost}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 产品模块开发成本 */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h2 className="text-xl text-gray-800 flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-600" />
            主要产品模块开发成本评估
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            {productModules.map((product, index) => (
              <motion.div
                key={product.name}
                className="bg-white rounded-lg p-4 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <h3 className="text-lg text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.reference}</p>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">开发周期: {product.developmentTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">团队规模: {product.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">复杂度: {product.complexity}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">预估成本</div>
                    <div className="text-2xl text-purple-600">{product.estimatedCost}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 总成本汇总 */}
        <motion.div
          className="bg-gradient-to-r from-slate-600 to-blue-600 rounded-xl p-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            三年总投入预算汇总
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: "第一年", data: totalCostSummary.firstYear, color: "bg-red-500/20" },
              { year: "第二年", data: totalCostSummary.secondYear, color: "bg-yellow-500/20" },
              { year: "第三年", data: totalCostSummary.thirdYear, color: "bg-green-500/20" }
            ].map((yearData, index) => (
              <div key={yearData.year} className={`${yearData.color} rounded-lg p-4`}>
                <h3 className="text-lg mb-3">{yearData.year}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>研发成本:</span>
                    <span>{yearData.data.development}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>基础设施:</span>
                    <span>{yearData.data.infrastructure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>运营成本:</span>
                    <span>{yearData.data.operation}</span>
                  </div>
                  <div className="border-t border-white/30 pt-2 flex justify-between text-lg">
                    <span>总计:</span>
                    <span>{yearData.data.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-white/10 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-lg">风险提示</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="mb-1">技术风险:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• AI算法效果不达预期</li>
                  <li>• 技术架构选型错误</li>
                  <li>• 人才招聘困难</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-1">成本风险:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• 云服务费用超预期</li>
                  <li>• 开发周期延长</li>
                  <li>• 市场变化导致需求调整</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 页码指示 */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-600">
            <Calculator className="w-4 h-4" />
            <span>第 19 页 / 共 20 页</span>
          </div>
        </motion.div>
      </div>
    </PresentationSlide>
  );
}