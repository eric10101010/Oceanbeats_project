<template>
    <ToastMessages></ToastMessages>
    <nav class="bg-primary p-3 d-flex justify-content-between">
        <ul class="list-unstyled d-flex h3">
            <li class="me-3">
                <RouterLink to="/admin/products" class="text-white text-decoration-none">Products</RouterLink>
            </li>
            <li class="me-3">
                <RouterLink to="/admin/order" class="text-white text-decoration-none">Order</RouterLink>
            </li>
            <li class="me-3">
                <RouterLink to="/admin/coupon" class="text-white text-decoration-none">Coupon</RouterLink>
            </li>
        </ul>
        <ul class="list-unstyled d-flex h3">
            <li class="me-3">
                <RouterLink to="/" class="text-white text-decoration-none">回到前台</RouterLink>
            </li>
            <li class="me-4">
                <routerLink to="/login" class="text-white text-decoration-none" @click="userLogout">
                    登出
                </routerLink>
            </li>
        </ul>
    
    </nav>
    <RouterView></RouterView>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'pinia';
import { useToastMessageStore } from "../../stores/toastMessage";
import ToastMessages from '../../components/ToastMessages.vue';


const { VITE_API, VITE_PATH } = import.meta.env

export default {
    data() {
        return {
            productsList: [],
            tempProduct: {}
        }
    },
    methods: {
        ...mapActions(useToastMessageStore, ['pushMessage']),
        checkUser() {
            const token = document.cookie
                .split("; ")
                .find((row) => row.startsWith("hexToken="))
                ?.split("=")[1];
            axios.defaults.headers.common['Authorization'] = token;
            
            axios.post(`${VITE_API}/api/user/check`, null)
                .then(() => {
                    this.pushMessage({
                        style: 'success',
                        title: '成功登入',
                        content: '成功進入後台管理頁'
                    })
                })
                .catch(err => {
                    console.dir(err);
                    this.$router.push('/login');
                })
        },
        userLogout() {
            const api = `${VITE_API}/logout`;
            axios.post(api)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.dir(err);
                })
        }
    },
    components: {
        ToastMessages
    },
    mounted() {
        this.checkUser();
    }
}
</script>
