<template>
    <loading v-model:active="isLoading">
        <div class="loadingio-spinner-spin-pqarappzpn"><div class="ldio-eviqoo58lam">
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
        </div></div>
    </loading>
    <BannerTop :subject-tilte="subjectTilte" :back-list="backList"></BannerTop>
    <!-- 產品細節資訊 -->
    <section class="productInfor">
        <div class="container">
            <ul class="row list-unstyled mt-lg-6 mt-md-6 mt-5">
                <!--商品左側圖片-->
                <li class="col-lg-7 col-md-7 col-12">
                    <div class="px-lg-5 px-md-3 px-0">
                        <img :src="product.imageUrl" alt="product-item" class="object-fit-cover" style="max-width:100%">
                    </div>
                </li>
                <!--商品右側文字資訊-->
                <li class="col-lg-5 col-md-5 col-12">
                    <div class="text-lg-start text-md-start text-center">
                        <h2 class="fw-bolder pb-lg-3 pb-md-2">{{ product.title }}</h2>
                        <h3 class="h5 pe-4 pb-2">{{ product.description }}</h3>
                        <h3 class="h5 pe-4">{{ product.content }}</h3>
                        <div class="d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-center pt-lg-4 ">
                            <p class="h3 text-danger fw-bolder me-2">
                                NT${{ product.price }}
                            </p>
                            <p class="h6 text-third text-decoration-line-through" v-if="product.price !== product.origin_price">
                                NT${{ product.origin_price }}
                            </p>
                        </div>
                    </div>
                    <hr>
                    <ul class="d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-center list-unstyled">
                        <li class="input-group w-50 me-lg-4 me-md-4 me-2">
                                <button type="button" class="btn text-white btn-secondary border rounded-0" @click.prevent="adjustNum('minus')">
                                    -
                                </button>
                                <input type="number" id="Number" class="form-control text-center pe-lg-0 rounded-0" v-model="cartNum" readonly/>
                                <button type="button" class="btn text-white btn-secondary rounded-0" @click.prevent="adjustNum('plus')">
                                    +
                                </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-outline-danger" 
                                :disabled="product.id === status.addCartLoading"
                                @click.prevent="addCart(product.id, qty)">
                            <span class="spinner-border spinner-border-sm text-danger" role="status" v-if="product.id === status.addCartLoading"></span>
                                加入購物車
                            </button>
                        </li>
                    </ul>

                </li>
            </ul>
        </div>
    </section>
    <!-- tab切換 -->
    <section class="productTab pt-4">
        <div class="container">
            <div class="row mb-4 d-flex justify-content-start">
                <div class="col-lg-8">
                    <ul class="nav nav-tabs" ref="tab" id="myTab" role="tablist">
                        <li class="nav-item w-30 w-md-auto " role="presentation">
                            <button class="nav-link link w-30 active py-3"
                                    id="introduction-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#introduction"
                                    type="button"
                                    role="tab"
                                    aria-controls="introduction"
                                    aria-selected="true"
                                    data-cursor="cursor"
                            >
                                商品規格
                            </button>
                        </li>
                        <li class="nav-item w-30 w-md-auto" role="presentation">
                            <button class="nav-link link w-30 py-3"
                                    id="notice-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#notice"
                                    type="button"
                                    role="tab"
                                    aria-controls="notice"
                                    aria-selected="false"
                                    data-cursor="cursor"
                            >
                                注意事項
                            </button>
                        </li>
                        <li class="nav-item w-30 w-md-auto" role="presentation">
                            <button class="nav-link link w-30 py-3"
                                    id="shipping-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#shipping"
                                    type="button"
                                    role="tab"
                                    aria-controls="shipping"
                                    aria-selected="false"
                                    data-cursor="cursor"
                            >
                                運送問題
                            </button>
                        </li>
                
                    </ul>
                    <div class="tab-content px-2 py-4 p-lg-7" id="myTabContent">
                        <div class="tab-pane fade show active bg-white"
                            id="introduction"
                            role="tabpanel"
                            aria-labelledby="introduction-tab"
                        >
                            <ul class="productTabTitle list-unstyled w-100">
                                <li class="mb-2">產品型號：{{ product.title }}</li>
                                <li class="mb-2">防水係數：IPX4</li>
                                <li class="mb-2">驅動單元：{{ product.drivers }}</li>
                                <li class="mb-2">通訊使用頻段：{{ product.infor }}</li>
                                <li class="mb-2">響應範圍：{{ product.fequency }}KHz</li>
                                <li class="mb-2">耳機重量：{{ product.weight }}</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade text-dark bg-white"
                            id="notice"
                            role="tabpanel"
                            aria-labelledby="notice-tab"
                        >
                            <ul class="w-100 list-unstyled">
                                <li class="pb-2">實際的尺寸與重量會因配備的不同而有所差異。</li>
                                <li class="pb-2">產品顏色會因網頁呈現而有些許差異，以收到實品為準。</li>
                                <li class="pb-2">規格可能依機型配置而有所改變，產品規格若敘述有誤，請以實物為主。</li>
                                <li>使用前請確實遵從產品說明書內之操作指示及注意事項。</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade text-dark bg-white"
                            id="shipping"
                            role="tabpanel"
                            aria-labelledby="shipping-tab"
                        >
                            <ul class="w-100 list-unstyled">
                                <li class="pb-4">運送及其他說明:</li>
                                <li class="pb-2">送貨方式：透過宅配送達。</li>
                                <li class="pb-2">規消費者訂購之商品若經配送兩次無法送達，</li>
                                <li class="pb-2">再經本公司以電話與Email均無法聯繫逾三天者，將取消該筆訂單，並且全額退款。</li>
                                <li>送貨範圍：本島各地各縣市、澎湖部分地區、<br/>
                                    金門部分地區（大金門、小金門）、小琉球、馬祖全部地區、綠島。
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cartStore';
import Loading from 'vue-loading-overlay';
import Swal from 'sweetalert2';
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import BannerTop from '../../components/BannerTop.vue';

SwiperCore.use([Autoplay]);

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
    data () {
        return {
            status: {
                addCartLoading: '',
                cartQtyLoading: ''
            },
            product: {},
            products: [],
            isLoading: false,
            subjectTilte: '商品細節',
            backList:  'https://plus.unsplash.com/premium_photo-1709311438052-9c3f5f867b9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D',
            breadcrumbName:'商品細節'
        }
    },
    computed: {
            ...mapState(cartStore, ['carts']),
            ...mapState(cartStore, ['cartNum']),
            ...mapState(cartStore, ['status.addCartLoading']),
            ...mapState(cartStore, ['status.cartQtyLoading']),
        },
    methods: {
        ...mapActions(cartStore, ['getCart']),
        ...mapActions(cartStore, ['addCart']),
        ...mapActions(cartStore, ['adjustNum']),
        getProducts() {
            const api =`${VITE_API}/api/${VITE_PATH}/products/all`;
            const vm = this;
            vm.isLoading = true;
            axios.get(api)
                .then(res => {
                    vm.isLoading = false;
                    this.products = res.data.products;
                    console.log(this.products);
                })
                .catch(err => {
                    console.dir(err);
                })
        },
        getProduct () {
            const ID = this.$route.params.id
            const api =`${VITE_API}/api/${VITE_PATH}/product/${ID}`;
                axios.get(api)
                    .then(res => {
                        // console.log(res)
                        this.product = res.data.product
                    })
                    .catch(err => console.log(err))
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
    },
    components: {
        BannerTop,
        Swiper,
        SwiperSlide,
        Loading,
        Swal
    },
    watch: {
        $route () {
            this.getProduct();
        }
    },
    mounted () {
        this.getProduct();
        this.getProducts();
        this.getCart();
    }
}
</script>


<style lang="scss" scoped>
.product{
    &Infor {
        @media (max-width:992px) {
            h2 {
                font-size: 24px;
            }
            h3 {
                font-size: 16px;
            }
        }
        @media (max-width:767px) {
            h3 {
                font-size: 14px;
            }
        }
    }
    &Tab {
        &Title {
            width: 50%;
            @media (max-width:767px) {
                width: 100%;
            }
        }
    }
}
</style>
