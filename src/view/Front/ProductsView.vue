<template>
    <loading v-model:active="isLoading">
        <div class="loadingio-spinner-spin-pqarappzpn"><div class="ldio-eviqoo58lam">
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
        </div></div>
    </loading>
    <BannerTop :subject-tilte="subjectTilte" :back-list="backList"></BannerTop>
    <div class="container">
        <div class="row products mt-lg-6 mt-md-4 mt-5 d-flex justify-content-center">
            <!-- 種類側欄 -->
            <div class="col-lg-3 col-md-3 col-10 mb-lg-0 mb-md-0 mb-5">
                <ul class="productsSide list-group list-unstyle">
                    <li class="productsSideItem list-group-item border border-third d-flex justify-content-center align-items-center" :class="{active: isActive === 1}"  @click="changeClick(1)">
                        <router-link :to="`/products`" class="text-decoration-none">
                            全部商品
                        </router-link>
                    </li>
                    <li class="productsSideItem list-group-item border border-third d-flex justify-content-center aalign-items-center" v-for="(item) in categories" :key="item" :class="{active: isActive === item}" @click="changeClick(item)">
                        <router-link :to="`/products?category=${item}`" class="text-decoration-none">
                            {{ item }} 
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="col-lg-9 col-md-9 col-12">
                <div class="row list-unstyledx">
                    <div class="col-lg-4 col-md-6 col-12" v-for="(product, index) in productsList" :key="product.id">
                        <!-- 商品容器 -->
                        <div class="productsList mx-auto rounded-2 mb-4" v-if="index <= 5">
                            <!-- 1.商品圖片 -->
                            <div class="productsPhoto position-relative d-flex justify-content-center align-items-center">
                                <router-link :to="`/product/${product.id}`">
                                    <img :src="product.imageUrl" alt="productsPhoto" class="rounded-top">
                                </router-link>
                                <!-- 2.分類tag -->
                                <span class="px-2 py-2 badge bg-secondary text-white position-absolute top-0 start-0">
                                    {{ product.category }}
                                </span>
                                <!-- <div style="height: 100px; background-size: cover; background-position: center;" 
                                    :style="{ backgroundImage : `url(${product.imageUrl})`}">
                                </div> -->
                            </div>
                            <ul class="productsText list-unstyled mb-0">
                                <!-- 3.商品名稱 -->
                                <li class="productsTitle">
                                    <h5 class="text-center my-lg-2 my-md-1 fw-bolder" style="font-size:22px">
                                        {{ product.title }}
                                    </h5>
                                </li>
                                <!-- 4.價錢+購物車 -->
                                <li class="productsCart">
                                    <ul class="d-flex justify-content-center align-items-center list-unstyled">
                                        <li class="text-third text-decoration-line-through " style="font-size:14px">
                                            NT$ {{ product.origin_price }}
                                        </li>
                                        <li class="text-dark fw-bolder px-3" style="font-size:20px">
                                            NT$ {{ product.price }}
                                        </li>
                                    </ul>
                                    <hr>
                                    <div class="d-flex justify-content-around pb-3">
                                        <button type="button" class="productsSeeMore btn btn-outline-primary ">
                                            <routerLink :to="`/product/${product.id}`" class="text-decoration-none">
                                                查看更多
                                            </routerLink>
                                        </button>
                                        <button type="button" class="btn btn-outline-danger" 
                                                :disabled="product.id === status.addCartLoading"
                                                @click.prevent="addCart(product.id)">
                                            <span class="spinner-border spinner-border-sm text-danger" role="status" v-if="product.id === status.addCartLoading"></span>
                                                加入購物車
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <Pagination :pages="pages" @emit-pages="getProducts"></Pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios';
import Loading from 'vue-loading-overlay';
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cartStore';
import Pagination from '../../components/Pagination.vue';
import BannerTop from '../../components/BannerTop.vue';
import BreadCrumb from '../../components/BreadCrumb.vue';
import Swal from 'sweetalert2';

const { VITE_API, VITE_PATH } = import.meta.env

export default {
    data() {
        return {
            productsList: [],
            tempProduct: {},
            categories: ['有線耳機','藍芽耳機','有線耳罩','藍芽耳罩'],
            isLoading: false,
            isActive: 1,
            pages: {},
            status: {
                addCartLoading: '',
                cartQtyLoading: ''
            },
            subjectTilte: '商品列表',
            breadcrumbName:'商品列表',
            backList:  'https://i.imgur.com/fyyWfNw.jpeg',
        }
    },
    computed:{
        ...mapState(cartStore, ['carts']),
        ...mapState(cartStore, ['status.addCartLoading']),
        ...mapState(cartStore, ['status.cartQtyLoading']),
    },
    methods: {
        ...mapActions(cartStore, ['getCart']),
        ...mapActions(cartStore, ['addCart']),
        changeClick(i) {
            this.isActive =i;
        },
        getProducts(page = 1) {
            const { category= '' } = this.$route.query;
            const api =`${VITE_API}/api/${VITE_PATH}/products?category=${category}&page=${page}`;
            let vm = this;
            vm.isLoading = true;
            axios.get(api)
            .then(res => {
                vm.isLoading = false;
                vm.productsList = res.data.products;
                vm.currentPage = page;
                vm.pages = res.data.pagination;
            })
            .catch(err => {
                console.dir(err);
            })
        },
        getProduct () {
            const ID = this.$route.params.id
            const api =`${VITE_API}/api/${VITE_PATH}/product/${ID}`;
                axios.get(api).then(res => {
                        console.log(res)
                        this.product = res.data.product
                    })
                    .catch(err => console.log(err))
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
        isPhone(value) {
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '需要正確的電話號碼'
        }
    },
    components: {
        Pagination,
        BannerTop,
        BreadCrumb,
        Loading,
        Swal
    },
    watch: { 
        '$route.query' : {
            handler() {
                this.getProducts();
            },
            deep: true,
        }
    },
    mounted() {
        this.getProducts();
        this.getCart();
    }
}
</script>

<style lang="scss">
.active {
    background-color: green;
    a {
        color: #FFF;
    }
}
.products {
    font-family: 'GenSenRounded';
    &SeeMore {
        &:hover {
                a {
                    color: #FFF;
                }
            }

        &:hover {
            opacity: .8;
            transition: .3s;
        }
    }
    &List {
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        @media (max-width: 992px) {
            max-width: 240px;
        }
    }
    &Photo {
        cursor: pointer;
        overflow: hidden;
        :hover {
                transform: scale(1.1);
                transition: all .8s ease;
            }
        img {
            max-width: 100%;
            height: 180px;
            object-fit: cover;
            @media (max-width: 992px) {
                max-height: 160px;
            }
        }
    }
    &Text {
        @media (max-width: 992px) {
            max-width: 240px;
        }
    }
    &Cart {
        button {
            font-size: 14px;
        }
        a {
            font-size: 14px;
        }
    }
}
    @keyframes ldio-eviqoo58lam {
        0% {
            opacity: 1;
            backface-visibility: hidden;
            transform: translateZ(0) scale(1.5,1.5);
        } 100% {
            opacity: 0;
            backface-visibility: hidden;
            transform: translateZ(0) scale(1,1);
        }
    }
    .ldio-eviqoo58lam div > div {
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #3e6d8d;
        animation: ldio-eviqoo58lam 1s linear infinite;
    }.ldio-eviqoo58lam div:nth-child(1) > div {
        left: 148px;
        top: 88px;
        animation-delay: -0.875s;
    }
    .ldio-eviqoo58lam > div:nth-child(1) {
        transform: rotate(0deg);
        transform-origin: 160px 100px;
    }.ldio-eviqoo58lam div:nth-child(2) > div {
        left: 130px;
        top: 130px;
        animation-delay: -0.75s;
    }
    .ldio-eviqoo58lam > div:nth-child(2) {
        transform: rotate(45deg);
        transform-origin: 142px 142px;
    }.ldio-eviqoo58lam div:nth-child(3) > div {
        left: 88px;
        top: 148px;
        animation-delay: -0.625s;
    }
    .ldio-eviqoo58lam > div:nth-child(3) {
        transform: rotate(90deg);
        transform-origin: 100px 160px;
    }.ldio-eviqoo58lam div:nth-child(4) > div {
        left: 46px;
        top: 130px;
        animation-delay: -0.5s;
    }
    .ldio-eviqoo58lam > div:nth-child(4) {
        transform: rotate(135deg);
        transform-origin: 58px 142px;
    }.ldio-eviqoo58lam div:nth-child(5) > div {
        left: 28px;
        top: 88px;
        animation-delay: -0.375s;
    }
    .ldio-eviqoo58lam > div:nth-child(5) {
        transform: rotate(180deg);
        transform-origin: 40px 100px;
    }.ldio-eviqoo58lam div:nth-child(6) > div {
        left: 46px;
        top: 46px;
        animation-delay: -0.25s;
    }
    .ldio-eviqoo58lam > div:nth-child(6) {
        transform: rotate(225deg);
        transform-origin: 58px 58px;
    }.ldio-eviqoo58lam div:nth-child(7) > div {
        left: 88px;
        top: 28px;
        animation-delay: -0.125s;
    }
    .ldio-eviqoo58lam > div:nth-child(7) {
        transform: rotate(270deg);
        transform-origin: 100px 40px;
    }.ldio-eviqoo58lam div:nth-child(8) > div {
        left: 130px;
        top: 46px;
        animation-delay: 0s;
    }
    .ldio-eviqoo58lam > div:nth-child(8) {
        transform: rotate(315deg);
        transform-origin: 142px 58px;
    }
    .loadingio-spinner-spin-pqarappzpn {
        width: 200px;
        height: 200px;
        display: inline-block;
        overflow: hidden;
        background: transparent;
    }
    .ldio-eviqoo58lam {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
      transform-origin: 0 0; /* see note above */
    }
    .ldio-eviqoo58lam div { box-sizing: content-box; }
</style>