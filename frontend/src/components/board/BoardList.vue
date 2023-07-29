<template>
    <div class="board-top">
    <p class="free">자유게시판</p>
    <router-link to="/write"><button class="writeBtn" :writeBtn="writeBtn">글쓰기</button></router-link>
    </div>
    <hr class="hr">
    <div>
    <ul class="board-header">
        <li>No</li>
        <li>제목</li>
        <li>글쓴이</li>
        <li>작성시간</li>
    </ul>
    <ul class="borad-content" v-for="board in list" :key="board.idx">
        <li>{{ board.idx }}</li>
        <li><router-link :to="'/detail/' + board.idx ">{{ board.title }}</router-link></li>
        <li>{{ board.user_id }}</li>
        <li>{{ board.date.split('T')[0] }}</li>
    </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function(){
        return {
            list: [],
            writeBtn: "유건의"
        }
    }, 
    mounted(){
        axios.get('/board/list')
            .then((res) => {
                this.list = res.data
            })
            .catch((err) => {
                console.log(err)
            });
    },
}
</script>

<style>
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