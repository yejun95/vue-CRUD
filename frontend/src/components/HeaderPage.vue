<template>
  <header class="header">
    <div class="header-in">
      <router-link to="/"><img src="@/assets/bj.jpg" alt=""></router-link>
      <div class="header-right" v-if="login">
        <router-link to="/board" class="board">게시판</router-link>
        <div @click="logoutId" class="logout">로그아웃</div>
      </div>
      <div class="header-right" v-else>
        <router-link to="/board" class="board">게시판</router-link>
        <router-link to="/login" class="login">로그인</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HeaderPage',

  data: function(){
    return {
      login: ''
    }
  },
  mounted: function(){
    axios.post('/users/check-login')
      .then((res) => {
        console.log(res.data)
        if(res.data == "good"){
          this.login = true;
        }
      })
      .catch((err) => {
        console.log(err)
      });
  },
  methods: {
    logoutId: function() {
      axios.post('/users/logout')
        .then((res) => {
          console.log(res)
          alert('로그아웃 완료')
          this.$router.go(0);
        })
    },
  },
}
</script>

<style>
 .header {
  width: 100%;
  height: 70px;
  margin-bottom: 40px;
 }

 .header-in {
  height: 70px;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  align-items: center;
 }

 .board, .login, .logout {
  padding: 10px;
 }

 .header-right {
  margin-right: 140px;
  display: flex;
 }

 .logout {
  cursor: pointer;
 }

</style>