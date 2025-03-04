import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
    path: '/:pathMatch(.*)*', // Bắt mọi đường dẫn không khớp
    name: 'notfound',
    component: () => import('@/views/NotFound.vue') // Load trang NotFound.vue khi không tìm thấy trang
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
