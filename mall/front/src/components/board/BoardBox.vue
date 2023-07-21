<template>
    <div class="writeBox">
        <form v-for="item in list" :key="item.idx">
            <input type="text" class="tt" value="아이디" readonly><br>
            <input type="text" class="tt" placeholder="제목"><br>
            <textarea placeholder="내용을 기입해주세요" class="content"></textarea>
            <div class="btnn">
                <button @click="wrtieBtn">등록</button>
                <button @click="updateBtn">수정</button>
                <button @click="deleteBtn">삭제</button>
                <button @click="this.$router.back()">뒤로가기</button>
            </div>
        </form>
    </div>
</template>

<script>
// import axios from 'axios'

export default {
    data: function(){
        return {
            list: []
        }
    },
    // mounted: function(){
    //     axios.get('/users/findOne', this.form)
    //         .then((res) => {
    //             console.log(res.data)
    //             this.form = res.data
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }
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