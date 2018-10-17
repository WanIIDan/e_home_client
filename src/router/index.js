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
  oneclick: ()=>import('@/views/oneclick'),
  showidentity: ()=>import('@/views/showidentity'),
  study: ()=>import('@/views/study'),
  anytimestudy: ()=>import('@/views/anytimestudy'),
  anytimephoto: ()=>import('@/views/anytimephoto'),
  System: ()=>import('@/views/System'),
  activity: ()=>import('@/views/activity'),
  interaction: ()=>import('@/views/interaction'),
  interactionDetail: ()=>import('@/views/interactionDetail'),
  auditStatus: ()=>import('@/views/auditStatus'),
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
      path: '/newsDetail',
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
      component: components.oneclick
    },
    {
      path: '/showidentity',
      name: 'showidentity',
      meta: {
        title: '党员亮身份'
      },
      component: components.showidentity
    },
    {
      path: '/study',
      name: 'study',
      meta: {
        title: '政治生活'
      },
      component: components.study
    },
    {
      path: '/anytimestudy',
      name: 'anytimestudy',
      meta: {
        title: '随时随地学'
      },
      component: components.anytimestudy
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
      component: components.System
    },
    {
      path: '/activity',
      name: 'activity',
      meta: {
        title: '特色活动'
      },
      component: components.activity
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
      path: '/interactionDetail',
      name: 'interactionDetail',
      meta: {
        title: '党员云互动'
      },
      component: components.interactionDetail
    },
    {
      path: '/auditStatus/0/0',
      name: 'auditStatus',
      meta: {
        title: '思想汇报'
      },
      component: components.auditStatus
    },
    {
      path: '/auditStatus/0/1',
      name: 'auditStatus',
      meta: {
        title: '心得总结'
      },
      component: components.auditStatus
    },
  ]
})
