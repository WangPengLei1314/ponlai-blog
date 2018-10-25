<template>
  <div class="container">
    <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(img,index) in imgList" :key="index">
      <img class="banner" v-bind:src="img.url">
    </el-carousel-item>
    </el-carousel>
    <h2>Welcome to Modern Business</h2>
    <el-row>
  <el-col :span="6" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 0 : 0">
    <el-card :body-style="{ padding: '0px' }" class="photo-card">
      <img src="../assets/2.png" class="image" >
      <div style="padding: 14px;">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</span>
        <div class="bottom clearfix">
          <el-button type="primary" class="button">learn more</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
<h2>Portfolio Heading</h2>
<el-row>
<el-col :span="6" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 0 : 0">
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <div style="margin:-18px -20px; padding:10px 20px; background: #999999;">Card Title</div>
  </div>
  <div v-for="o in 1" :key="o" class="text item">
    {{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga. ' + o }}
  </div>
  <div class="bottom clearfix">
          <el-button type="primary" class="button">learn more</el-button>
  </div>
</el-card>
</el-col>
</el-row>
<h2>Portfolio Heading</h2>
<div class="container">
  <div class="left">
   <h1>Modern Business Features</h1>
   <span>The Modern Business template by Start Bootstrap includes:</span>
   <ul>
     <li><b>Bootstrap v4</b></li>
     <li>jQuery</li>
     <li>Font Awesome</li>
     <li>Working contact form with validation</li>
     <li>Unstyled page elements for easy customization</li>
   </ul>
   <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</span>
  </div>
  <div class="right">
    <img src="../assets/2.png" class="rightimage" >
  </div>
</div>
<hr>
<div class="containerOne">
  <div class="leftOne">
   <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</span>
  </div>
  <div class="rightOne">
    <el-button type="info" class="buttonOne" href="#">Call to Action</el-button>
  </div>
</div>
 <el-footer>Copyright © Ponlai Website 2018</el-footer>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
  export default {
    name: 'home',
    data () {
      return {
        imgList:[
        {url:require('../assets/1.jpg')},
        {url:require('../assets/2.png')},
        {url:require('../assets/3.jpeg')},
      ],
      value1: '8:30',
      }
    },
    components: {}
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
