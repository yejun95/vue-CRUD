<template>
    <div class="writeBox">
        <BoardBox :username="write"/>
    </div>
</template>

<script>
import BoardBox from "@/components/board/BoardBox.vue"

export default {
    components: {
    BoardBox, // BoardBox 컴포넌트 등록
  },
    data: function(){
        return {
            write: "write"
        }
    }
   
}
</script>
<style>
    .tt {
        width: 40%;
    }

    .writeBox {
        width: 920px;
        height: 450px;
        border: 1px solid black;
        padding: 40px;
    }

    .title {
        display: flex;
    }
    
    .content {
        width: 838px;
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