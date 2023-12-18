// 引入路由组件
import Main from '@/views/Main'
import Login from '@/views/Login'


export default [
    {
        path: '/',
        redirect: '/home',  //  重定向
        name: 'Main',
        component: Main,
        children: []
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]