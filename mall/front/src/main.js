// vue3 셋팅
import { createApp } from 'vue'
import App from './App.vue'
import  router  from './router/index'
import Directives from '../plugin/directives'
import io from 'socket.io-client' // 서버와 소켓 연결을 위해 사용한 모듈을 import
const socket = io('http://localhost:8001',{ // 연결하고자 하는 서버의 url 입력
    withCredentials: true,
    extraHeaders: {
      "extra-custrom-headeres": "localhost"
    }
}); 


const app = createApp(App)
app.use(router) //라우터 사용
app.mount('#app') // vue의 $el과 동일 뜻
app.config.globalProperties.$socket = socket; // socket을 Vue의 인스턴스 변수로 등록 -> vue3 방식
// app.prototype.$socket = socket; -> vue2 방식
app.use(Directives);



// vue2 셋팅법
// import Vue from 'vue' // Vue 인스턴스 사용
// import App from './App.vue' // App.vue를 불러옴

//Vue.config.productionTop = false // Vue 앱이 처음 실행될 때 경고문을 출력할 것인가? ture or false

// new Vue({
//     render: h => h(App) // App.vue를 렌더링
//   }).$mount('#app'); // $el과 동일한 말로 렌더링할 인스턴스를 지정