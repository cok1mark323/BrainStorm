import { motion } from 'motion/react';
import { PresentationSlide } from '../PresentationSlide';
import { 
  Building2, 
  CreditCard, 
  Settings, 
  Users,
  DollarSign, 
  Zap,
  Cloud,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';

export function ToBBusinessModelSlide() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-emerald-50 to-cyan-50">
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
            <Building2 className="w-3 h-3" />
            To B 商业模式深度解析
          </motion.div>
          
          <motion.h1 
            className="text-3xl leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            To B 产品商业模式剖析与案例分析
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            深度剖析企业级产品的盈利逻辑，解读中国To B市场的成功密码
          </motion.p>
        </motion.div>

        {/* To B 商业模式核心特征 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-emerald-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-base text-gray-900 mb-2 flex items-center gap-2">
            <Target className="w-3 h-3 text-emerald-600" />
            To B 商业模式核心逻辑
          </h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="bg-emerald-50 p-1.5 rounded text-center">
              <strong>解决方案导向</strong><br/>
              提供完整业务解决方案
            </div>
            <div className="bg-blue-50 p-1.5 rounded text-center">
              <strong>高客单价</strong><br/>
              年费数万到数百万
            </div>
            <div className="bg-purple-50 p-1.5 rounded text-center">
              <strong>长期合作</strong><br/>
              注重客户成功和续约
            </div>
            <div className="bg-orange-50 p-1.5 rounded text-center">
              <strong>定制化服务</strong><br/>
              深度业务集成
            </div>
          </div>
        </motion.div>

        {/* 主要盈利模式分类 */}
        <motion.div 
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* SaaS订阅制 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-blue-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-blue-100 rounded">
                <Cloud className="w-3 h-3 text-blue-600" />
              </div>
              <h4 className="text-sm text-gray-900">SaaS订阅制</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-blue-50 p-1.5 rounded">
                <strong>核心：</strong>持续订阅，按月/年收费
              </div>
              <div>
                <p><strong>案例：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 钉钉（企业协作，免费+增值）</li>
                  <li>• 飞书（协作办公，按人头收费）</li>
                  <li>• 石墨文档（在线协作文档）</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>优势：</strong>现金流稳定+可预测收入
              </div>
            </div>
          </motion.div>

          {/* 软件许可证 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-green-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-green-100 rounded">
                <Settings className="w-3 h-3 text-green-600" />
              </div>
              <h4 className="text-sm text-gray-900">软件许可证</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-green-50 p-1.5 rounded">
                <strong>核心：</strong>一次性购买+维护费
              </div>
              <div>
                <p><strong>案例：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 用友（ERP，几十万到百万）</li>
                  <li>• 金蝶（财务软件，年费制）</li>
                  <li>• 东软（医疗信息化解决方案）</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>优势：</strong>前期收入高+长期维护收入
              </div>
            </div>
          </motion.div>

          {/* 平台交易抽成 */}
          <motion.div 
            className="bg-white rounded-lg p-3 shadow-lg border-t-4 border-purple-500"
            whileHover={{ y: -1, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-purple-100 rounded">
                <CreditCard className="w-3 h-3 text-purple-600" />
              </div>
              <h4 className="text-sm text-gray-900">平台交易抽成</h4>
            </div>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="bg-purple-50 p-1.5 rounded">
                <strong>核心：</strong>撮合交易，按成交额抽成
              </div>
              <div>
                <p><strong>案例：</strong></p>
                <ul className="space-y-0.5 pl-1 text-xs">
                  <li>• 有赞（电商SaaS，交易抽成）</li>
                  <li>• 汇联易（企业报销，金额抽成）</li>
                  <li>• 找钢网（钢铁B2B交易）</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-1.5 rounded">
                <strong>优势：</strong>与客户业务增长绑定
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 中国To B典型案例深度分析 */}
        <motion.div 
          className="bg-white rounded-lg p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-base text-gray-900 mb-2 text-center">中国To B典型案例收入模式对比</h3>
          <div className="grid grid-cols-6 gap-1 text-xs">
            {/* 表头 */}
            <div className="text-center p-1 bg-gray-100 rounded">
              <strong>产品</strong>
            </div>
            <div className="text-center p-1 bg-blue-50 rounded">
              <strong>主要收入模式</strong>
            </div>
            <div className="text-center p-1 bg-green-50 rounded">
              <strong>客单价</strong>
            </div>
            <div className="text-center p-1 bg-purple-50 rounded">
              <strong>核心价值</strong>
            </div>
            <div className="text-center p-1 bg-orange-50 rounded">
              <strong>获客方式</strong>
            </div>
            <div className="text-center p-1 bg-red-50 rounded">
              <strong>续约率</strong>
            </div>

            {/* 钉钉 */}
            <div className="p-1 bg-gray-50 rounded text-center">钉钉</div>
            <div className="p-1 bg-blue-50 rounded text-center">免费+专业版订阅</div>
            <div className="p-1 bg-green-50 rounded text-center">3000-5万/年</div>
            <div className="p-1 bg-purple-50 rounded text-center">企业协作效率</div>
            <div className="p-1 bg-orange-50 rounded text-center">免费获客+销售转化</div>
            <div className="p-1 bg-red-50 rounded text-center">85%+</div>

            {/* 用友 */}
            <div className="p-1 bg-gray-50 rounded text-center">用友</div>
            <div className="p-1 bg-blue-50 rounded text-center">软件许可+实施</div>
            <div className="p-1 bg-green-50 rounded text-center">10-100万</div>
            <div className="p-1 bg-purple-50 rounded text-center">企业管理数字化</div>
            <div className="p-1 bg-orange-50 rounded text-center">直销+渠道</div>
            <div className="p-1 bg-red-50 rounded text-center">90%+</div>

            {/* 有赞 */}
            <div className="p-1 bg-gray-50 rounded text-center">有赞</div>
            <div className="p-1 bg-blue-50 rounded text-center">SaaS订阅+交易抽成</div>
            <div className="p-1 bg-green-50 rounded text-center">5000-5万/年</div>
            <div className="p-1 bg-purple-50 rounded text-center">电商解决方案</div>
            <div className="p-1 bg-orange-50 rounded text-center">在线营销+代理商</div>
            <div className="p-1 bg-red-50 rounded text-center">75%</div>

            {/* 阿里云 */}
            <div className="p-1 bg-gray-50 rounded text-center">阿里云</div>
            <div className="p-1 bg-blue-50 rounded text-center">按使用量计费</div>
            <div className="p-1 bg-green-50 rounded text-center">1万-百万/年</div>
            <div className="p-1 bg-purple-50 rounded text-center">云计算基础设施</div>
            <div className="p-1 bg-orange-50 rounded text-center">在线+直销</div>
            <div className="p-1 bg-red-50 rounded text-center">95%+</div>
          </div>
        </motion.div>

        {/* To B成功要素分析 */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2 flex items-center gap-2">
              <Award className="w-3 h-3 text-blue-600" />
              成功关键因素
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1.5 bg-blue-50 rounded">
                <Zap className="w-3 h-3 text-blue-600" />
                <span><strong>产品力：</strong>真正解决企业核心痛点</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
                <Users className="w-3 h-3 text-green-600" />
                <span><strong>服务力：</strong>专业实施团队和售后支持</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-purple-50 rounded">
                <TrendingUp className="w-3 h-3 text-purple-600" />
                <span><strong>销售力：</strong>强大的直销和渠道体系</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-orange-50 rounded">
                <DollarSign className="w-3 h-3 text-orange-600" />
                <span><strong>商业模式：</strong>可持续的收入结构设计</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h4 className="text-base text-gray-900 mb-2">To B vs To C 收入特征对比</h4>
            <div className="space-y-1 text-xs">
              <div className="grid grid-cols-3 gap-1">
                <div className="text-center p-1 bg-gray-100 rounded">
                  <strong>维度</strong>
                </div>
                <div className="text-center p-1 bg-blue-50 rounded">
                  <strong>To B</strong>
                </div>
                <div className="text-center p-1 bg-green-50 rounded">
                  <strong>To C</strong>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded">客单价</div>
                <div className="p-1 bg-blue-50 rounded">数万-数百万</div>
                <div className="p-1 bg-green-50 rounded">几元-几百元</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded">付费周期</div>
                <div className="p-1 bg-blue-50 rounded">年度合同</div>
                <div className="p-1 bg-green-50 rounded">月度/一次性</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded">获客成本</div>
                <div className="p-1 bg-blue-50 rounded">数万元</div>
                <div className="p-1 bg-green-50 rounded">几十元</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-1 bg-gray-50 rounded">生命周期价值</div>
                <div className="p-1 bg-blue-50 rounded">极高（3-5年）</div>
                <div className="p-1 bg-green-50 rounded">较低（几个月）</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 投资服务行业To B化机遇 */}
        <motion.div 
          className="bg-gradient-to-r from-slate-600 to-emerald-600 rounded-lg p-3 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <h3 className="text-base mb-2 text-center flex items-center justify-center gap-2">
            <TrendingUp className="w-3 h-3" />
            投资服务行业To B化的战略机遇
          </h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">机构服务市场</h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 基金管理系统（年费10-50万）</li>
                <li>• 投资决策平台（按AUM收费）</li>
                <li>• 风控合规系统（定制化百万级）</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">专业工具服务</h4>
              <ul className="space-y-0.5 text-xs">
                <li>• 数据终端（年费5-20万）</li>
                <li>• 研究分析工具（按席位收费）</li>
                <li>• 客户关系管理（CRM系统）</li>
              </ul>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h4 className="mb-1 text-xs">技术服务输出</h4>
              <ul className="space-y-0.5 text-xs">
                <li>• AI投研助手（按调用量计费）</li>
                <li>• 量化策略平台（收益分成）</li>
                <li>• 白标解决方案（许可费）</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </PresentationSlide>
  );
}