<template>
        <!-- detail 상세정보보기 -->
        <form v-if="username == 'infoForm'">
            <label for="inputId">ID : </label>
            <input type="text" class="tt" id="inputID" readonly v-model="user_id"><br>
            <label for="inputTitle">제목 : </label>
            <input type="text" class="tt" id="inputTitle" v-model="title"><br>
            <textarea class="content" readonly v-model="content"></textarea>
            <div class="btnn">
                <router-link :to="'/edit/' + param"><button>수정</button></router-link>
                <button @click="deleteBtn">삭제</button>
                <button @click="this.$router.push('/board')">뒤로가기</button>
            </div>
        </form>
        <!-- insert -->
        <form v-if="username == 'write'">
            <label for="inputId">제목 : </label>
            <input type="text" class="tt" id="inputID" placeholder="제목" v-model="boardContents.boardTitle"><br>
            <textarea placeholder="내용을 기입해주세요" class="content" v-model="boardContents.boardContent"></textarea>
            <div class="btnn">  
                <button @click="writeBtn">등록</button>
                <button @click="this.$router.push('/board')">뒤로가기</button>
            </div>
        </form>
        <!-- update -->
        <form v-if="username == 'update'">
            <label for="inputID">ID : </label>
            <input type="text" class="tt" id="inputID" readonly v-model="user_id"><br>
            <label for="inputTItle">제목 : </label>
            <input type="text" class="tt" id="inputTitle" v-model="title"><br>
            <textarea  class="content" v-model="content"></textarea>
            <div class="btnn">
                <button @click="updateBtn">수정완료</button>
                <button @click="this.$router.go(-1)">뒤로가기</button>
            </div>
        </form>
</template>

<script>
import axios from 'axios';

export default {
    // detail 요청일 때는 username을 "infoForm"으로 조건 실행
    // write 요청일 때는 username을 "write"로 조건 실행
    props: {
        username: {
        type: String,
        default: 'infoForm', // props가 들어오지 않았을 때, default값 설정 가능
        },
        param: {
            type: String,
        }
    },
    data: function(){
        return {
            // get요청으로 들어온 detail 내용을 담음
            user_id: '',
            title: '',
            content: '',

            // write의 파라미터를 post로 보냄
            boardContents: {
                boardTitle: '',
                boardContent: '',
                boardId: 'rjsdml' // ID를 고정값으로 등록하는중, 세션 등록 필요
            },
        }
    },
    created: function(){
            // datail 상세정보 가져오기
            if(this.username == "infoForm") {
                axios.get('board/detail/' + this.param)
                .then((res) => {
                    console.log(res.data);
                    this.user_id = res.data[0].user_id;
                    this.title = res.data[0].title;
                    this.content = res.data[0].content;
                })
                .catch((err) => {
                    console.log(err);
                })
            }
            if(this.username == "update") {
                axios.get('board/edit/' + this.param)
                .then((res) => {
                    console.log(res.data);
                    this.user_id = res.data[0].user_id;
                    this.title = res.data[0].title;
                    this.content = res.data[0].content;
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        },
    methods: {
        // 게시판 글쓰기 insert
        writeBtn: function() {
            if(this.username == "write") {
                axios.post('board/boardWrite', this.boardContents)
                .then(() => {
                    alert("글작성이 완료되었습니다.");
                    this.$router.push('/board')
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        
        },
        // 게시판 글 지우기
        deleteBtn: function(){
            axios.delete(`/board/delete/${this.param}`)
                .then(() => {
                    alert("삭제가 완료되었습니다.");
                    this.$router.push("/board");
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        // 게시판 글 수정
        updateBtn: function(){
            axios.put(`/board/edit/${this.param}`, {
                title: this.title,
                content: this.content,
            })
                .then(() => {
                    alert('수정이 완료되었습니다.');
                    this.$router.push('/board');
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
}
</script>

<style>
    /* .tt {
        width: 40%;
    }

    .writeBox {
        width: 1000px;
        height: 450px;
        border: 1px solid black;
        padding: 40px;
    }

    .title {
        display: flex;
    }
    
    .content {
        width: 917px;
        height: 220px;
        padding: 20px;
        resize: none;
        margin-bottom: 10px;
    }

    .btnn {
        display: flex;
        justify-content: flex-end;
    }

    .btnn > button {
        width: 70px;
        margin-left: 5px;
    } */
</style>