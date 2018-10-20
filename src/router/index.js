import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  index: ()=>import('@/views/index'),
  login: ()=>import('@/views/login'),
  notice: ()=>import('@/views/notice'),
  user: ()=>import('@/views/user'),
  newsDetail: ()=>import('@/views/newsDetail'),
  newseye: ()=>import('@/views/newseye'),
  life: ()=>import('@/views/life'),
  // oneclick: ()=>import('@/views/oneclick'),
  // showidentity: ()=>import('@/views/showidentity'),
  // study: ()=>import('@/views/study'),
  // anytimestudy: ()=>import('@/views/anytimestudy'),
  anytimephoto: ()=>import('@/views/anytimephoto'),
  // System: ()=>import('@/views/System'),
  // activity: ()=>import('@/views/activity'),
  today: ()=>import('@/views/today'),
  interaction: ()=>import('@/views/interaction'),
  interactionDetail: ()=>import('@/views/interactionDetail'),
  auditStatus: ()=>import('@/views/auditStatus'),
  LifeChoice: ()=>import('@/views/LifeChoice'),
  personalsummary: ()=>import('@/views/personalsummary'),
  discuss: ()=>import('@/views/discuss'),
  Members: ()=>import('@/views/Members'),
  findorg: ()=>import('@/views/findorg'),
  info: ()=>import('@/views/info'),
  updateInfo: ()=>import('@/views/updateInfo'),
  score: ()=>import('@/views/score'),
  scoredetail: ()=>import('@/views/scoredetail'),
  uppass: ()=>import('@/views/uppass'),
  pay: ()=>import('@/views/pay'),
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: components.index
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: components.login
    },
    {
      path: '/notice',
      name: 'notice',
      meta: {
        title: '通知早知道'
      },
      component: components.notice
    },
    {
      path: '/user',
      name: 'user',
      meta: {
        title: '我的党建'
      },
      component: components.user
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      meta: {
        title: '随时随地学'
      },
      component: components.newsDetail
    },
    {
      path: '/newseye',
      name: 'newseye',
      meta: {
        title: '信工新闻眼'
      },
      component: components.newseye
    },
    {
      path: '/life',
      name: 'life',
      meta: {
        title: '掌上组织生活'
      },
      component: components.life
    },
    {
      path: '/oneclick',
      name: 'oneclick',
      meta: {
        title: '党建一点通'
      },
      component: components.newseye
    },
    {
      path: '/showidentity',
      name: 'showidentity',
      meta: {
        title: '党员亮身份'
      },
      component: components.newseye
    },
    {
      path: '/study',
      name: 'study',
      meta: {
        title: '政治学习'
      },
      component: components.newseye
    },
    {
      path: '/anytimestudy',
      name: 'anytimestudy',
      meta: {
        title: '随时随地学'
      },
      component: components.newseye
    },
    {
      path: '/anytimephoto',
      name: 'anytimephoto',
      meta: {
        title: '随时随地拍'
      },
      component: components.anytimephoto
    },
    {
      path: '/System',
      name: 'System',
      meta: {
        title: '制度建设'
      },
      component: components.newseye
    },
    {
      path: '/activity',
      name: 'activity',
      meta: {
        title: '特色活动'
      },
      component: components.newseye
    },
    {
      path: '/today',
      name: 'today',
      meta: {
        title: '党史上的今天'
      },
      component: components.today
    },
    {
      path: '/interaction',
      name: 'interaction',
      meta: {
        title: '党员云互动'
      },
      component: components.interaction
    },
    {
      path: '/interactionDetail/:id',
      name: 'interactionDetail',
      meta: {
        title: '党员云互动'
      },
      component: components.interactionDetail
    },
    {
      path: '/auditStatus/0/0',
      name: 'auditStatus/0/0',
      meta: {
        title: '思想汇报'
      },
      component: components.auditStatus
    },
    {
      path: '/auditStatus/0/1',
      name: 'auditStatus/0/1',
      meta: {
        title: '心得总结'
      },
      component: components.auditStatus
    },
    {
      path: '/LifeChoice',
      name: 'LifeChoice',
      meta: {
        title: '民主评议'
      },
      component: components.LifeChoice
    },
    {
      path: '/discuss',
      name: 'discuss',
      meta: {
        title: '民主评议'
      },
      component: components.discuss
    },
    {
      path: '/Members',
      name: 'Members',
      meta: {
        title: '参评党员'
      },
      component: components.Members
    },
    {
      path: '/findorg',
      name: 'findorg',
      meta: {
        title: '流动党员找组织'
      },
      component: components.findorg
    },
    {
      path: '/personalsummary',
      name: 'personalsummary',
      meta: {
        title: '个人总结'
      },
      component: components.personalsummary
    },
    {
      path: '/info',
      name: 'info',
      meta: {
        title: '个人信息',
        text: '编辑'
      },
      component: components.info
    },
    {
      path: '/updateInfo',
      name: 'updateInfo',
      meta: {
        title: '修改个人信息',
        text: '保存'        
      },
      component: components.updateInfo
    },
    {
      path: '/score',
      name: 'score',
      meta: {
        title: '个人量化积分'
      },
      component: components.score
    },
    {
      path: '/scoredetail',
      name: 'scoredetail',
      meta: {
        title: '积分明细'
      },
      component: components.scoredetail
    },
    {
      path: '/uppass',
      name: 'uppass',
      meta: {
        title: '修改密码'
      },
      component: components.uppass
    },
    {
      path: '/pay',
      name: 'pay',
      meta: {
        title: '缴纳党费'
      },
      component: components.pay
    },
  ]
})
