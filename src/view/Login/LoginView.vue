<template>
    <ToastMessages></ToastMessages>
    <div class="login vh-100 d-flex justify-content-center align-items-center">
        <div class="loginBox col-xl-6 col-md-6 col-10 text-white p-4 rounded-3">
            <h2 class="text-center">後台資料管理</h2>
            <VeeForm v-slot="{ errors }" @submit="userLogin">
                <div class="mb-4">
                    <label for="username" class="form-label fw-bold">帳號:</label>
                    <VeeField id="username" name="帳號" type="email" class="form-control" :class="{ 'is-invalid': errors['帳號'] }"
                            placeholder="請輸入帳號" rules="email|required" v-model="user.username" autocomplete="off">
                    </VeeField>
                    <Error-message name="帳號" class="invalid-feedback"></Error-message>
                </div>
                <div class="mb-4">
                    <label for="password" class="form-label fw-bold">密碼:</label>
                    <VeeField id="password" name="密碼" type="password" class="form-control" :class="{ 'is-invalid': errors['密碼'] }"
                            placeholder="請輸入密碼" rules="required" v-model="user.password" autocomplete="off">
                    </VeeField>
                    <Error-message name="密碼" class="invalid-feedback"></Error-message>
                </div>
                <div class="d-flex justify-content-between">
                    <router-link  :to="`/`"  class="btn btn-secondary text-white" >返回前台</router-link>
                    <button type="submit" class="btn btn-primary text-white">登入後台</button>
                </div>
            </VeeForm>
        </div>
    </div>
</template>



<script>
import axios from "axios";
import { mapActions } from 'pinia';
import { useToastMessageStore } from "../../stores/toastMessage";
import ToastMessages from '../../components/ToastMessages.vue';


const { VITE_API } = import.meta.env

export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
            }
        };
    },
    methods: {
        ...mapActions(useToastMessageStore, ['pushMessage']),
        userLogin() {
            axios.post(`${VITE_API}/admin/signin`, this.user)
                .then(res => {
                    const { token, expired } = res.data;
                    document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
                    this.$router.push('admin/products');
                    // alert('恭喜～成功登入');

                    this.$router.push('/admin/products')
                })
                .catch(err => {
                    this.pushMessage({
                        style: 'danger',
                        title: '登入失敗',
                        content: '請重新確認密碼再登入',
                    })
                    console.dir(err.response.data.message);
                })
        }
    },
    components: {
        ToastMessages,
    },
}
</script>



<style lang="scss">
.login{
    background:url('https://images.unsplash.com/photo-1626291594949-64c26e0317f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80') no-repeat;
    background-size: cover;
    background-position:center center;
    &Box {
        background-color: rgba(20, 123, 220, 0.7);
    }
    .login-form{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        opacity: 0.7;
    }
}
</style>