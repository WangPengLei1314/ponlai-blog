<template>
  <div class="pageOne">
    <h1>Blog Home One Subheading</h1>
    <el-container>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }" class="wpl">home</el-breadcrumb-item>
  <el-breadcrumb-item class="wpl">page02</el-breadcrumb-item>
</el-breadcrumb>
</div>
</el-container>
<div class="leftTwo">
  <el-row >
    <el-card :body-style="{ padding: '0px' }">
      <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(img,index) in imgList" :key="index">
      <img class="banner" v-bind:src="img.url">
    </el-carousel-item>
    </el-carousel>
      <div style="padding: 14px;">
        <h3>Post Title</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.

Someone famous in Source Title
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</span>
      </div>
    </el-card>
</el-row>
<el-row class="leftCard">
    <el-card :body-style="{ padding: '0px' }">
      <div style="padding: 14px;">
        <h3>Leave a Comment:</h3>
        <textarea name="#" id="" cols="100" rows="5"></textarea>
        <div class="bottom clearfix">
          <el-button type="primary" class="button">Submit</el-button>
        </div>
      </div>
    </el-card>
</el-row>
</div>
<div class="rightTwo">
<el-card class="box-cardOne">
  <div slot="header" class="clearfix">
    <div  class="ziti" >Search</div>
  </div>
  <el-input  placeholder="请输入名称" suffix-icon="el-icon-search"></el-input>
</el-card>
<el-card class="box-cardTwo">
  <div slot="header" class="clearfix">
    <div class="ziti" >Categories</div>
  </div>
  <div class="CardContainer">
  <div class="leftCat">
    <ul>
      <li><a href="#">Web Design</a></li>
      <li><a href="#">HTML</a></li>
      <li><a href="#">Freebies</a></li>
    </ul>
  </div>
  <div class="rightCat">
    <ul>
      <li><a href="#">JavaScript</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">Tutorials</a></li>
    </ul>
  </div>
  </div>
</el-card>
<el-card class="box-cardThree">
  <div slot="header" class="clearfix">
    <div class="ziti" >Side Widget</div>
  </div>
  <span>
    You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
  </span>
</el-card>
  </div>
</div>
</template>
<script>
export default {
  name: 'page01',
  data () {
    return {
      currentDate: new Date(),
      imgList:[
        {url:require('../assets/1.jpg')},
        {url:require('../assets/2.png')},
        {url:require('../assets/3.jpeg')},
      ],
      imgList2:[
        {url:require('../assets/4.jpeg')},
        {url:require('../assets/5.png')},
        {url:require('../assets/6.jpeg')},
      ],
      cur_page:1,//默认在第一页
 
    pageNum:1,//默认每页显示1条数据
 
    totalCount:1//默认总条数为一条

    }
  }
}
</script>
<style>
.pageOne{
    width: 90%;
    margin: 0 auto;
  }
  .breadcrumb{
    width: 100%;
    height: 35px;
    padding-left: 10px;
    border-radius: 2%;
    background-color: #e9ecef;
  }
  .el-icon-arrow-right{
    font-size: 30px;
  }
  .wpl{
    font-size: 30px;
  }
  .leftTwo{
    width: 67%;
    float: left;
  }
  .rightTwo{
    width: 30%;
    height: 600px;
    float: right;
  }
  .leftTwo,.rightTwo,.leftCard{
    margin-top: 20px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .imageLeft{
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .button{
    width: 90px;
    height: 40px;
    float: left;
  }
  .box-cardOne{
    height: 130px;
    margin-bottom: 20px;
   
  }
  .box-cardTwo,.box-cardThree{
    height: 200px;
    margin-bottom: 20px;
  }
  .ziti{
    margin:-18px -20px; 
    padding:15px 20px; 
    background: rgba(204, 204, 204, 0.68);
    font-size: 25px;
  }
  .CardContainer{
    width: 300px;
    height: 100px;
  }
  .leftCat{
    float: left;
  }
  .rightCat{
    width: 150px;
    height: 100px;
    display: inline-block;
  }
  .CardContainer ul li{
    list-style: none;
    line-height: 25px;
  }
   .el-footer {
    background-color: #343a40;
    color: rgb(241, 235, 235);
    text-align: center;
    padding: 75px;
  }

</style>
