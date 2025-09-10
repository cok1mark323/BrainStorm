import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  MessageCircle, 
  Users, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Building2,
  Brain,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react';

export function QAInteractiveSlide() {
  const discussionTopics = [
    {
      icon: Building2,
      title: "公司现状诊断",
      questions: [
        "我们现有的服务模式有哪些痛点？",
        "客户最常反馈的问题是什么？",
        "我们的核心竞争优势在哪里？"
      ],
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Target,
      title: "商业模式探索",
      questions: [
        "哪种盈利模式最适合我们的业务？",
        "如何平衡免费服务与付费增值？",
        "我们的目标客户群体是谁？"
      ],
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Brain,
      title: "AI智能化升级",
      questions: [
        "AI可以在哪些环节提升效率？",
        "如何评估AI投入的投资回报率？",
        "智能化改造的优先级如何排序？"
      ],
      color: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "实施策略讨论",
      questions: [
        "应该从哪个业务模块开始试点？",
        "需要多长时间看到明显效果？",
        "如何衡量创新项目的成功？"
      ],
      color: "from-orange-50 to-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const interactionFormats = [
    {
      icon: MessageCircle,
      title: "开放式讨论",
      description: "分享具体业务场景和挑战"
    },
    {
      icon: Lightbulb,
      title: "创意头脑风暴",
      description: "探索创新商业模式可能性"
    },
    {
      icon: Users,
      title: "小组研讨",
      description: "按部门讨论适用的策略"
    },
    {
      icon: CheckCircle,
      title: "行动计划",
      description: "制定下一步具体实施方案"
    }
  ];

  return (
    <PresentationSlide className="bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl w-full space-y-8">
        
        {/* 标题区域 */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">Q&A 互动环节</span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            深入讨论 · 共同探索 · 制定行动
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            结合我们公司的实际情况，深入探讨商业模式创新的具体实施路径
          </motion.p>
        </motion.div>

        {/* 讨论话题 */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-xl text-gray-800 text-center mb-6">
            重点讨论方向
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {discussionTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                className={`bg-gradient-to-br ${topic.color} rounded-xl p-6 border border-gray-200`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <topic.icon className={`w-6 h-6 ${topic.iconColor}`} />
                  <h3 className="text-lg text-gray-800">{topic.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {topic.questions.map((question, qIndex) => (
                    <div key={qIndex} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{question}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 互动形式 */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-lg text-gray-800 text-center mb-6">
            互动讨论形式
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {interactionFormats.map((format, index) => (
              <motion.div
                key={format.title}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <format.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="text-sm text-gray-800 mb-1">{format.title}</h4>
                <p className="text-xs text-gray-600">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 行动指引 */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Zap className="w-6 h-6" />
            <h3 className="text-lg">讨论目标</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>明确实施时间表</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>评估投资预算需求</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>确定优先级和试点方案</span>
            </div>
          </div>
        </motion.div>

        {/* 页码指示 */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-600">
            <MessageCircle className="w-4 h-4" />
            <span>第 19 页 / 共 19 页</span>
          </div>
        </motion.div>
      </div>
    </PresentationSlide>
  );
}