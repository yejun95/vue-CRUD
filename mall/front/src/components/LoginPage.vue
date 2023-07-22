<template>
    <div class="login-box">
        <form class="login-form" @submit.prevent="submitForm">
            <div class="head">LOGIN</div>
            <input type="text" placeholder="아이디" v-model="user.id"><br>
            <input type="password" placeholder="비밀번호" v-model="user.pw"><br>
            <button type="submit" @click="clickdd">로그인</button><br>
            <router-link to="/register"><button>회원가입</button></router-link>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
   data : function() {
      return {
         user: {
            id: '',
            pw: ''
         }
      }
   },
   methods: {
      submitForm: function(){
         if(!this.user.id && !this.user.pw){
            alert("아이디와 비밀번호를 입력해주세요.")
            return
         }
         if(!this.user.id) {
            alert("아이디를 입력해주세요.")
            return
         }
         if(!this.user.pw) {
            alert("비밀번호를 입력해주세요.")
            return
         }
         
         axios.post('/users/login', this.user)
            .then((res) => {
               if(res.data === 1){
                  alert("로그인 성공")
                  this.$router.push('/');
               }
               if(res.data === 0) {
                  alert('아이디와 비밀번호를 확인해주세요.')
               }
            })
            .catch((err) => {
               console.log(err);
               console.log("실패")
            })
      },
   }
}
</script>

<style>
/* 전역 설정 */
 * button {
    width: 100%;
    height: 45px;
    margin-bottom: 15px;
    background: rgb(71, 69, 69);
    color: #fff;
    font-weight: bold;
 }

 * input {
    width: 100%;
    height: 30px;
    margin-bottom: 30px;
    border: none;;
    border-bottom: 1px solid rgb(154, 154, 154);
 }

 * input:focus {
    outline: none;
 }
 

 .login-box {
    width: 300px;
    height: 300px;
    margin: 0 auto;
 }

 .login-form {
    width: 100%;
    height: 100%;
    padding: 18px;
    text-align: center;
 }

 .head {
    font-size: 32px;
    padding-bottom: 25px;
    letter-spacing: 3px;
 }

</style>