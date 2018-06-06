/**
 * Created by RanLI on 6/5/2018.
 */
/**定义各页面组件**/
/*首页*/
var home={
  template:'#home'

}
/*列表页*/
var list={
  template:'#list'
}

/*详情页*/
var detail={
  template:'#detail'
}



/***定义路由规则****/
var routes=[
//homepage
  {
    path:'/home',
    component:home//注意是组件变量名
  },
//list page
  {
   path:'/list',
   component:list
  },
//detail page
  {
    path:'/detail',
    component:detail
  },
//默认进入首页
  {
    path:'*',
    redirect:'home'//注意是字符串
  }
]


/*实例化路由*/
var router= new VueRouter({
  routes:routes
});

/*实例化VUE*/

var vm=new Vue({
  el:'#app',
  data:{

  },
  //注册路由
  router:router
})