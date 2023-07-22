<template>
    <div class="writeBox">
        <BoardBox :param="param"/>
        <!-- <form>
            <input type="text" class="tt" readonly v-model="user_id"><br>
            <input type="text" class="tt" placeholder="제목" readonly v-model="title"><br>
            <textarea placeholder="내용을 기입해주세요" class="content" readonly v-model="content"></textarea>
            <div class="btnn">
                <button @click="wrtieBtn">등록</button>
                <button @click="updateBtn">수정</button>
                <button @click="deleteBtn">삭제</button>
                <button @click="this.$router.back()">뒤로가기</button>
            </div>
        </form> -->
        {{ writeBtn }}
    </div>
</template>

<script>
import BoardBox from "@/components/board/BoardBox.vue"
// import axios from 'axios'
export default {
    components: {
    BoardBox, // BoardBox 컴포넌트 등록
  },

    props: ['writeBtn'],

    data: function(){
        return {
            param: this.$route.params.idx
        }
    },
    // mounted: function(){
    //     axios.get('board/detail/' + this.$route.params.idx)
    //         .then((res) => {
    //             this.user_id = res.data[0].user_id;
    //             this.title = res.data[0].title;
    //             this.content = res.data[0].content;
    //         })
    //         .catch((err) => {
    //             console.log(err);
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

    input[readonly]{
        background: #e2e2e2;
        padding: 15px;
    }
</style>