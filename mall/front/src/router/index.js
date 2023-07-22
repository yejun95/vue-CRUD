import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from "../components/LoginPage"
import BoardList from "../components/board/BoardList"
import UserRegister from "../components/UserRegister"
import BoardDetail from "../components/board/BoardDetail"
import BoardWrite from "../components/board/BoardWrite"
import BoardEdit from "../components/board/BoardEdit"

const routes = [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: UserRegister
    },
    {
        path: '/board',
        component: BoardList
    },
    {
        path: '/write',
        component: BoardWrite
    },
    {
        path: '/detail/:idx',
        name: 'detail', // name 확인하기
        component: BoardDetail
    },
    {
        path: '/edit/:idx',
        component: BoardEdit
    },
]

const router = createRouter({
    moad: "history",
    history: createWebHashHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export default router;
 