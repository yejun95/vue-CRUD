<template>
  <div id="app">
  <HeaderPage/>
    <content class="content-in">
      <div class="left-content">
        <router-view/>
      </div>
      <!-- 채팅 sticky -->
      <div class="right-content">
        <ChattingRoom/>
      </div>
    </content>
    <FooterPage/>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import ChattingRoom from './components/ChattingRoom.vue'


export default {
  components: {
    HeaderPage,
    FooterPage,
    ChattingRoom

  },
  data: function(){
    return {
    }
  },
}
</script>

<style>
  /* reset css */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: 10px 100px;
  }

  img {
    border: none;
    vertical-align: middle;
  }

  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #111;
  }

  .clearfix::before,
  .clearfix::after {
    clear: both;
    display: block;
    content: "";
  }

  /* .inner { */
    /* width: */
    /* margin:0 auto */
  /* } */

  /* content */
  .left-content {
  width: 70%;
  height: 500px;
 }

 .right-content {
  width: 28%;
  height: 500px;
  /* background: black; */
 }

 .content-in {
  display: flex;
  justify-content: space-around;
 }

  .board-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
  }

  .writeBtn {
    width: 70px;
    height: 25px;
    font-size: 15px;
    font-weight: bold;
  }

 .free {
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
 }

 .hr {
  border: 1.5px solid black;
 }

 .board-header {
  display: flex;
  justify-content: space-between;
  padding: 5px 11px 0;
  font-size: 16px;
 }

 .borad-content {
  display: flex;
  justify-content: space-between;
  padding: 5px 11px 0;
  font-size: 16px;
 }

 .board-header > li:nth-child(1) {width: 8%; text-align: center;}
 .board-header > li:nth-child(2) {width: 40%; text-align: center;}
 .board-header > li:nth-child(3) {width: 15%; text-align: center;}
 .board-header > li:nth-child(4) {width: 18%; text-align: center;}
 .borad-content > li:nth-child(1) {width: 8%; text-align: center;}
 .borad-content > li:nth-child(2) {width: 40%; text-align: center;}
 .borad-content > li:nth-child(3) {width: 15%; text-align: center;}
 .borad-content > li:nth-child(4) {width: 18%; text-align: center;}
</style>
