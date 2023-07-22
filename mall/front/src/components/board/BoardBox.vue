<template>
        <form v-if="username == 'infoForm'">
            <input type="text" class="tt" readonly v-model="user_id"><br>
            <input type="text" class="tt" placeholder="제목" v-model="title"><br>
            <textarea placeholder="내용을 기입해주세요" class="content" v-model="content"></textarea>
            <div class="btnn">
                <button @click="wrtieBtn">등록</button>
                <button @click="updateBtn">수정</button>
                <button @click="deleteBtn">삭제</button>
                <button @click="this.$router.go(-1)">뒤로가기</button>
            </div>
        </form>
        <form v-if="username == 'write'">
            <input type="text" class="tt" placeholder="제목" v-model="boardContents.boardTitle"><br>
            <textarea placeholder="내용을 기입해주세요" class="content" v-model="boardContents.boardContent"></textarea>
            <div class="btnn">  
                <button @click="writeBtn">등록</button>
                <button @click="this.$router.go(-1)">뒤로가기</button>
            </div>
        </form>
        {{param}}
        {{ username }}
</template>

<script>
import axios from 'axios';

export default {
    props: {
        username: {
        type: String,
        default: 'infoForm',
        },
        param: {
            type: String,
        }
    },
    data: function(){
        return {
            user_id: '',
            title: '',
            content: '',
            boardContents: {
                boardTitle: '',
                boardContent: '',
                boardId: 'rjsdml'
            }
        }
    },
    mounted: function(){
            if(this.username == "infoForm") {
                axios.get('board/detail/' + this.param)
                .then((res) => {
                    console.log(res.data)
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
        writeBtn: function() {
            if(this.username == "write") {
                axios.post('board/boardWrite', this.boardContents)
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        
        }
    }
}
</script>

<style>
    .tt {
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
    }
</style>