<template>
    <loading v-model:active="isLoading">
        <div class="loadingio-spinner-spin-pqarappzpn"><div class="ldio-eviqoo58lam">
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
        </div></div>
    </loading>
    <BannerTop :subject-tilte="subjectTilte" :back-list="backList"></BannerTop>
    <div class="container cart">
        <ul class="row list-unstyled d-md-flex justify-content-md-center my-lg-8 my-md-6 my-4">
            <!-- 購物車列表 -->
            <li class="col-lg-7 col-md-10 col-12" v-if="carts.carts?.length !== 0">
                <table class="table align-middle" >
                    <thead>
                        <tr class="border text-center">
                            <th class="col-lg-4 col-md-3 col-2 bg-secondary text-white py-lg-3 py-md-2 py-2">商品資訊</th>
                            <th class="col-lg-3 col-md-2 col-2 bg-secondary text-white py-lg-3 py-md-2 py-2">單價</th>
                            <th class="col-lg-3 col-md-3 col-4 bg-secondary text-white py-lg-3 py-md-2 py-2">數量</th>
                            <th class="col-lg-2 col-md-2 col-2 bg-secondary text-white py-lg-3 py-md-2 py-2">小計</th>
                        </tr>
                    </thead>
                    <tbody class="border-left border-right text-center">
                        <tr v-for="cart in carts.carts" :key="cart.id">
                            <td>
                                <div class="d-flex align-items-center justify-content-center">
                                    <img :src="cart.product.imageUrl" alt="cartPhoto" style="max-width:80px;min-height:60px;"/>
                                    <span class="fw-bold ms-2 d-lg-block d-md-block d-none">{{ cart.product.title}}</span>
                                </div>  
                            </td>
                            <td class="pt-4">
                                {{ cart.product.price }}
                            </td>
                            <td class="pt-4">
                                <div class="input-group input-group-sm">
                                    <div class="input-group d-flex justify-content-center">
                                        <button type="button" class="border" @click="cart.qty--; editCart(cart, cart.qty)"
                                                :disabled="cart.qty === 1" v-if="cart.qty > 1">
                                            -
                                        </button>
                                        <button type="button" class="border" v-else @click="delCartItem(cart.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash text-danger" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                            </svg>
                                        </button>
                                        <!-- <input type="number" id="cartNumber" class="form-control text-center" v-model="cart.qty" 
                                        :disabled="cart.id === status.cartQtyLoading" readonly/> -->
                                        <span type="number"
                                                class="px-3 border"
                                                min="1"
                                                :disabled="cart.id === status.cartQtyLoading"
                                        >
                                                {{cart.qty}}
                                        </span>
                                        <button type="button" class="border"  @click="cart.qty++; editCart(cart, cart.qty)">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td class="pt-4">
                                {{ cart.total }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <button class="btn btn-outline-danger" type="button" @click="delCartAll()"
                        :disabled="carts.carts?.length === 0">
                        清空購物車</button>
                    </div>
                    <span>購物車有 <span class="text-danger fw-bold">{{ carts.carts?.length }}</span> 件商品 </span> 
                </div>
            </li>
            <li class="col-12 my-6" v-else>
                <div class="cartEmpty d-flex flex-column justify-content-center align-items-center">
                    <div class="cartEmptyBox text-center p-4">
                        <h3 class="text-white">目前購物車是空的</h3>
                        <router-link to="/products" class="text-decoration-none text-info">返回選購商品</router-link>
                    </div>
                </div>
            </li>
            <li class="col-lg-5 col-md-10 col-12 mt-lg-0 mt-md-4 mt-5" v-if="carts.final_total">
                <h3 class="h5 bg-secondary text-white text-center py-lg-3 py-md-2 py-2 mb-0">購物車結算</h3>
                <ul class="d-flex justify-content-between border list-unstyled d-flex flex-column">
                    <li v-if="carts.final_total">
                        <div class="d-flex justify-content-center my-4">
                            <div class="me-2">
                                <input type="text" class="form-control ms-2" placeholder="請輸入優惠券" v-model="couponCode" id="coupon">
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-outline-primary" type="button" @click="couponApply" :disabled="couponCode == ''">
                                    使用優惠券
                                </button>
                            </div>
                        </div>
                    </li>
                    <li class="d-flex justify-content-between justify-content-md-around justify-content-lg-around pb-4 px-lg-0 px-md-4 px-2" v-if="carts.final_total == carts.total" >
                        <span class="ms-2">總金額:</span>
                        <span class="fw-bolder text-danger me-2">NT${{ this.carts.total }}</span>
                    </li>
                    <li v-else>
                        <div class="d-flex justify-content-between ms-2 me-2">
                            <p>商品原價:</p>
                            <span class="text-dark">NT${{ this.carts.total  }}</span>
                        </div>
                        <div class="d-flex justify-content-between ms-2 me-2">
                            <p>優惠折抵:</p>
                            <span class="text-success">NT${{ this.carts.total - carts.final_total  }}</span>
                        </div>
                        <div class="d-flex justify-content-between ms-2 me-2">
                            <p class="fw-bolder">優惠總價:</p>
                            <span class="text-danger fw-bolder">NT${{ this.carts.final_total }}</span>
                        </div>

                    </li>
                </ul>
                <div class="d-flex justify-content-between mt-lg-4 mt-md-3 mt-3">
                    <router-link to="/products" class="border px-3 text-decoration-none btn btn-outline-info">
                        繼續逛逛
                    </router-link>
                    <router-link to="/checkorder" class="border px-3 text-decoration-none btn btn-outline-danger">
                        前往結帳
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template> 

<script>

import axios from 'axios';
import Loading from 'vue-loading-overlay';
import Swal from 'sweetalert2';
import BannerTop from '../../components/BannerTop.vue';

const { VITE_API, VITE_PATH } = import.meta.env;


export default {
    data() {
        return {
            products: [],
            tempProduct: {},
            carts: [],
            couponCode: '',
            isLoading: false,
            subjectTilte: '購物車',
            backList:  'https://i.imgur.com/fyyWfNw.jpeg'
            ,
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
            status: {
                addCartLoading: '',
                cartQtyLoading: ''
            }
        }
    },
    methods: {
        getProducts() {
            const api =`${VITE_API}/api/${VITE_PATH}/products/all`;
            const vm = this;
            vm.isLoading = true;
                axios.get(api)
                    .then(res => {
                        this.products = res.data.products;
                        vm.isLoading = false;
                        // console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err.response.data);
                    })
        },
        getCart() {
            const api =`${VITE_API}/api/${VITE_PATH}/cart`;
                axios.get(api)
                    .then(res => {
                        this.carts = res.data.data;
                    })
                    .catch(err => {
                        console.log(err.response.data);
                    });
        },
        addCart(product_id, qty = 1) {
            const order = {
                product_id,
                qty,
            };
            this.status.addCartLoading = product_id;
            const api =`${VITE_API}/api/${VITE_PATH}/cart`;
                axios.post(api, {data: order})
                    .then(res => {
                        const name = res.data.data.product.title;
                        this.status.addCartLoading = '';
                        Swal.fire({
                                title: `成功加入 ${name} 到購物車`,
                                icon: 'success',
                                confirmButtonText: '確認'
                        })
                        this.getCart();
                        this.$refs.ProductModal.hideModal();
                    })
                    .catch(err => {
                        console.log(err.res.data);
                        Swal.fire({
                                title: `加入購物車失敗`,
                                icon: 'error',
                                confirmButtonText: '確認'
                        })
                    });
        },
        editCart(item, qty = 1) {
            const order = {
                product_id: item.product.id,
                qty,
            };
            this.status.cartQtyLoading = item.id;
            const api =`${VITE_API}/api/${VITE_PATH}/cart/${item.id}`;
                axios.put(api, {data: order})
                    .then(res => {
                        // console.log(res);
                        this.status.cartQtyLoading = '';
                        this.getCart();
                    })
                    .catch(err => {
                        console.log(err.response.data);
                    });
        },
        delCartItem(id) {
            this.status.cartQtyLoading = id;
            const api =`${VITE_API}/api/${VITE_PATH}/cart/${id}`;
                axios.delete(api)
                    .then(res => {
                        let message = res.data.message;
                        this.status.cartQtyLoading = '';
                        Swal.fire({
                                title: `商品${message}`,
                                icon: 'success',
                                confirmButtonText: '確認'
                        })
                        this.getCart();
                    })
                    .catch(err => {
                        console.log(err.response.data);
                        Swal.fire({
                                title: `刪除失敗`,
                                icon: 'error',
                                confirmButtonText: '確認'
                        })
                    });
        },
        delCartAll() {
            const api =`${VITE_API}/api/${VITE_PATH}/carts`;
                axios.delete(api)
                    .then(res => {
                        // console.log(res);
                        Swal.fire({
                                title: `成功清空購物車`,
                                icon: 'success',
                                confirmButtonText: '確認'
                        })
                        this.getCart();
                    })
                    .catch(err => {
                        console.log(err.response.data);
                    });
        },
        createOrder() {
            // this.isLoading = true;
            const api =`${VITE_API}/api/${VITE_PATH}/order`;
            const order = this.form;
                axios.post(api, { data: order }).then((res) => {
                    // this.$router.push(`/user/checkout/${response.data.orderId}`);
                    this.$refs.form.resetForm();
                    this.getCart();
                    // this.isLoading = false;
            }).catch((err) => {
                console.dir(err);
            });
        },
        couponApply() {
            const api =`${VITE_API}/api/${VITE_PATH}/coupon`;
            const code = {
                code: this.couponCode
            }
                axios.post(api, { data: code })
                    .then(res => {
                        if(res.data.success) {
                            this.couponCode = res.data.code;
                            Swal.fire({
                                title: `使用優惠劵成功`,
                                icon: 'success',
                                confirmButtonText: '確認'
                            })
                            this.getCart();
                            this.couponCode = '';
                            console.log(res.data);
                        }else {
                            Swal.fire({
                                    title: `找不到該優惠劵`,
                                    icon: 'error',
                                    confirmButtonText: '確認'
                            })
                        }
                    })
                    .catch(err => {
                        console.dir(err);
                        Swal.fire({
                            title: `找不到該優惠劵`,
                            icon: 'error',
                            confirmButtonText: '確認'
                        })
                    })
        },
        isPhone(value) {
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '需要正確的電話號碼'
        }
    },
    components: {
        Loading,
        Swal,
        BannerTop
    },
    computed: {
        checkData() {
            const attrs = ['name', 'email', 'tel', 'address'];
            return attrs.every((item) => this.form.user[item] !== '');
        },
    },
    mounted() {
        this.getProducts();
        this.getCart();
    }
}
</script>


<style lang="scss" scoped>
.cart {
    font-family: 'GenSenRounded';
    &Empty {
        background: url(https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat;
        background-size: cover;
        min-height: 500px;
        &Box {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }
}
</style>

