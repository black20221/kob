import { createRouter, createWebHistory } from 'vue-router'
import PkIndexview from '../views/pk/PkIndexview'
import RecordIndexview from '../views/record/RecordIndexview'
import RanklistIndexview from '../views/ranklist/RanklistIndexview'
import UserbotsIndexview from '../views/user/bots/UserbotsIndexview'
import NotFound from '../views/error/NotFound'
const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexview,
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexview,
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexview,
  },
  {
    path: "/user/bots/",
    name: "user_bot_index",
    component: UserbotsIndexview,
  },
  {
    path: "/404/",
    name: "404",
    component: NotFound,
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

export default router
