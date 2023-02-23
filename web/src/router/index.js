import { createRouter, createWebHistory } from 'vue-router'
import PkIndexview from '../views/pk/PkIndexview'
import RecordIndexview from '../views/record/RecordIndexview'
import RanklistIndexview from '../views/ranklist/RanklistIndexview'
import UserbotsIndexview from '../views/user/bots/UserbotsIndexview'
import NotFound from '../views/error/NotFound'
import UserAccountLoginView from '../views/user/account/UserAccountLoginView'
import UserAccountRegisterView from '../views/user/account/UserAccountRegisterView'
import store from '../store/index'
const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
    meta: {
      requertAuth: true,
    }
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexview,
    meta: {
      requertAuth: true,
    }
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexview,
    meta: {
      requertAuth: true,
    }
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexview,
    meta: {
      requertAuth: true,
    }
  },
  {
    path: "/user/bots/",
    name: "user_bot_index",
    component: UserbotsIndexview,
    meta: {
      requertAuth: true,
    }
  },
  {
    path: "/user/account/login/",
    name: "user_account_login",
    component: UserAccountLoginView,
    meta: {
      requertAuth: false,
    }
  },
  {
    path: "/user/account/register/",
    name: "user_account_register",
    component: UserAccountRegisterView,
    meta: {
      requertAuth: false,
    }
  },
  {
    path: "/404/",
    name: "404",
    component: NotFound,
    meta: {
      requertAuth: true,
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, form, next) => {
  if (to.meta.requertAuth && !store.state.user.is_login) {
    next({ name: "user_account_login" });
  } else {
    next();
  }
})
export default router
