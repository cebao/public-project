/**
 * @author:liulifu
 * @date:2019-04-19
 * @des:please see ./readme.md
 */
import Vue from 'vue'
import Router from 'vue-router'
// import page404 from '@/views/page404.vue'
// import Request from '../util/request'
import {base_url, router_mode} from "@/util/const";

Vue.use(Router)

let configRoutes = []

const routerFiles = require.context('.', true, /\.js$/)


import homePage from '@/views/HomePage/index.vue'

routerFiles.keys().forEach(route => {
    if (route === './index.js') {
        return
    }

    const routerModule = routerFiles[route]

    configRoutes = [...configRoutes, ...(routerModule.default || routerModule)]
})


const commonRoutes = [

    {
        path: '/',
        name: 'homePage',
        component: () => import(/* webpackChunkName: "" */ '@/views/HomePage/index.vue'),
    },
    {
        path: '/beautifulCountry',
        name: 'beautifulCountry',
        component: () => import(/* webpackChunkName: "" */ '@/views/BeautifulCountry/index.vue'),
    },
    {
        path: '/baseList',
        name: 'baseList',
        component: () => import(/* webpackChunkName: "" */ '@/views/BaseList/index.vue'),
    },
    {
        path: '/aboutUs',
        name: 'aboutUs',
        component: () => import(/* webpackChunkName: "" */ '@/views/AboutUs/index.vue'),
    }
    // {
    //     path: '*',
    //     name: '404',
    //     component: page404
    // }

];

const router = new Router({
    // mode: router_mode,
    //mode:'hash',
    base: process.env.BASE_URL,
    routes: [
        ...configRoutes,
        ...commonRoutes
    ]
})


router.beforeEach(async (to, from, next) => {
    console.log('router-----------',router)

    //设置标题
    document.title = to.meta.title || '华新'
    next();
    //
    //
    // //判断权限
    // if (to.name != 'contentDataGrigBuild' && to.query.content_id) {
    //     let payload = {
    //         ...to.query,
    //         ...to.params
    //     };
    //     let dashId = 1;
    //     let dashList = await Request.get(base_url + '/dashboard/config');
    //     if (dashList.success) {
    //         dashId = dashList.data.length ? dashList.data[0].id : 1;
    //     }
    //
    //     let fetchPermission = await Request.get(base_url + '/menu/access/', {params: payload, useCache: false, ttl: 0});
    //     // console.log(fetchPermission)
    //     if (!fetchPermission.success) {
    //         router.replace('/dashDisplay/' + dashId)
    //     }
    // }


});


export default router
