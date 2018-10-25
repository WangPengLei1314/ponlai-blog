<template>
  <div id="app">
  <el-menu  class="el-menu-demo" mode="horizontal" >
  <el-menu-item index="1" v-for="item in links" :key="item.links">
    <a @click="$goRoute(item.route)">{{item.text}}</a>
  </el-menu-item>
<el-menu-item index="3">About</el-menu-item>
  <el-menu-item index="4">Contact</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Portfolio</template>
    <el-menu-item index="2-1">1Column Portfolio</el-menu-item>
    <el-menu-item index="2-1">2Column Portfolio</el-menu-item>
    <el-menu-item index="2-1">Single Portfolio Item</el-menu-item>
  </el-submenu>
  <el-menu-item index="5">Blog</el-menu-item>
  <el-menu-item index="6" ><a href="#" target="_blank" style=" text-decoration: none;" >other pages</a></el-menu-item>
</el-menu>
<router-view></router-view>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
export default {
  name: 'App',
  data(){
    return{
      links: [
          {
            text: '注册',
            route: '/register'
          },
          {
            text: '登陆',
            route: '/login'
          },
          {
            text: '详情',
            route: '/page02'
          },
          {
            text: '列表',
            route: '/page01'
          }
        ]
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .banner{
    width:1400px;
    height:300px;
  }
  body{
   background-color: #d3dce6;
  }
  .el-menu-demo{
    background-color:#0c0c0c;
  }
  img.image{
    height: 200px;
    width: 300px;

  }
  .photo-card{
    height: 400px;
    width: 300px;
  }
  .el-button--primary{
    margin-top: 20px;
  }
  .box-card{
    height: 260px;
    width: 300px;
  }
  div.container{
    width: 97%;
    height: 300px;
    margin: 0 auto;
  }
  div.left{
    width: 45%;
    height: 300px;
    margin: 0%;
    float: left;
  }
  .rightimage{
    width: 600px;
    height: 300px;
    float: right;
  }
  .containerOne{
    height: 50px;
    width: 97%;
  }
  .leftOne{
    width: 65%;
    float: left;
  }
  .rightOne{
    float: right;
  }
  .buttonOne{
    width: 400px;
  }
 .el-header, .el-footer {
    background-color: #343a40;
    color: rgb(241, 235, 235);
    text-align: center;
    padding: 75px;
  }
  /* h2,.el-row,.containerOne{
    padding-left: 20px;
  } */
</style>