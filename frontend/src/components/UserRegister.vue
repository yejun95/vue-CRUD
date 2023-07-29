<template>
    <div class="login-box">
        <form class="login-form" @submit.prevent=submitForm>
            <div class="head">회원가입을<br>환영합니다.</div>
            <input type="text" placeholder="아이디" v-model="form.id"><br>
            <input type="password" placeholder="비밀번호" v-model="form.pw"><br>
            <button type="submit">회원가입</button><br>
            <router-link to="/login"><button>뒤로가기</button></router-link>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function(){
        return {
            form: {
                id: '',
                pw: ''
            }
        }
    },
    methods: {
        submitForm: function(){
            if(!this.form.id && !this.form.pw) {
                alert("아이디와 비밀번호를 입력해주세요.")
                return
            }
            if(!this.form.id) {
                alert("아이디를 입력해주세요")
                return
            }
            if(!this.form.pw) {
                alert("비밀번호를 입력해주세요.")
                return
            }
            axios.post('/users/register', this.form)
                .then((res) => {
                    console.log((res.data))
                    alert("회원가입이 완료되었습니다.")
                    this.$router.push('/login')
                })
                .catch((err) => {
                    console.log(err)
            })
        }
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
    cursor: pointer;
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

/*  */

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