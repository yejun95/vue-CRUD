<template>
    <div class="chat">
        <div class="chatContent">
            <textarea v-model="textarea" class="chatTextarea" disabled v-auto-scroll-bottom></textarea>
        </div>
        <div class="sendContent">
            <input type="text" placeholder="메시지를 입력하세요." class="chatMessage" v-model="message">
            <button class="chatBtn" @click="sendMessage">보내기</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            textarea: '',
            message: '',
        };
    },
    created() {
        console.log(this.$socket)
        this.$socket.on('chat', (data)=> {
            this.textarea += data.message + "\n"
        })
    },
    methods: {
        sendMessage () {
            this.$socket.emit('chat',{
                message: this.message
            });
            this.textarea += this.message + "\n"
            this.message = ''
        }
    }
}
</script>

<style>
    .chat {
        height: 100%;
        border: 1px solid black;
        padding: 30px;
        background: #def9c3
    }

    .chatContent {
        width: 100%;
        height: 350px;
        border: 1px solid black;
        padding: 10px;
        background: #fff;
    }

    .chatTextarea {
        width: 285px;
        height: 330px;
        resize: none;
        border: none;
        outline: none;
        background: #fff;
    }

    .sendContent {
        width: 100%;
        height: 100px;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background: #fff;
    }
    
    .chatMessage {
        height: 45px;
    }

    #app > content > div.right-content > div > div.sendContent > button {
        width: 70px;
    }
</style>