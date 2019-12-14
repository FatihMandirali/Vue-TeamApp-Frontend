import Vue from "vue"
import UserList from "./user/UserList";
import SubjectList from "./subject/SubjectList";
import WordList from "./word/WordList";
import VueRouter from "vue-router";

Vue.use(VueRouter);


 const routes = [
    {
        path: '/', name: 'kullanicilar',component:UserList
    },
    {
        path: '/konular', name: 'konular',component:SubjectList
    },
    {
        path: '/sozler', name: 'sozler',component:WordList
    },
    // {
    //     path: '/', name: 'kullanicilar',
    //     children: [
    //         { path: '', component: UserList }, // /userList
    //         // {path: ':id', component: UserDetail},  /user/12
    //         // {path: ":id/edit", component: UserEdit, name: "userEdit"}  user/12/edit
    //     ]
    // },
    // {
    //     path: '/konular', name: 'konular',
    //     children: [
    //         { path: '', component: SubjectList }, // /userList
    //         // {path: ':id', component: UserDetail},  /user/12
    //         // {path: ":id/edit", component: UserEdit, name: "userEdit"}  user/12/edit
    //     ]
    // },
    // {
    //     path: '/sozler', name: 'sozler',
    //     children: [
    //         { path: '', component: WordList }, // /userList
    //         // {path: ':id', component: UserDetail},  /user/12
    //         // {path: ":id/edit", component: UserEdit, name: "userEdit"}  user/12/edit
    //     ]
    // }
];

export const router = new VueRouter({
    mode : "history",
    routes
});