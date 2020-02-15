import Vue from "vue"
import UserList from "./user/UserList";
import UserDetail from "./user/UserDetail";
import UserCreate from "./user/UserCreate";
import SubjectList from "./subject/SubjectList";
import SubjectDetail from "./subject/SubjectDetail";
import SubjectCreate from "./subject/SubjectCreate";
import SubjectComment from "./subject/SubjectComment";
import WordList from "./word/WordList";
import WordCreate from "./word/WordCreate";
import WordDetail from "./word/WordDetail";
import Login from "./login/Login";
import VueRouter from "vue-router";

Vue.use(VueRouter);


  const routes = [
    {
        path: '/kullanicilar', name: 'kullanicilar',component:UserList
    },
    {
        path: '/kullanicidetay/:id', name: 'kullanicidetay',component:UserDetail
    },
    {
        path: '/kullanici/olustur', name: 'kullaniciolustur',component:UserCreate
    },
    {
        path: '/konular', name: 'konular',component:SubjectList
    },
    {
        path: '/konudetay/:id', name: 'konuDetay',component:SubjectDetail
    },
    {
        path: '/konu/olustur', name: 'konuolustur',component:SubjectCreate
    },
    {
        path: '/konuyorum', name: 'konuyorum',component:SubjectComment
    },
    {
        path: '/sozler', name: 'sozler',component:WordList
    },
    {
        path: '/soz/olustur', name: 'sozolustur',component:WordCreate
    },
    {
        path: '/sozdetay/:id', name: 'sozDetay',component:WordDetail
    },
    {
        path: '/', name: 'login',component:Login
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