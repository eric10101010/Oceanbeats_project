<template>
    <BannerTop :subject-tilte="subjectTilte" :back-list="backList"></BannerTop>
    <section class="paidOrder">
        <div class="container">
            <!-- 進度條 -->
            <div class="row d-flex flex-column align-items-center position-relative my-8">
                <div class="progress col-lg-7 col-md-9 col-10">
                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" v-if="!order.is_paid">
                    </div>
                    <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" v-else>
                    </div>
                </div>
                <ul class="col-lg-8 col-md-10 col-12  list-unstyled d-flex justify-content-between position-absolute top-50 start-50 translate-middle">
                    <li class="progressStep bg-primary rounded-circle d-flex justify-content-center align-items-center ms-2">
                        <span class="h3 text-white pt-2">1</span>
                    </li>
                    <li class="progressStep bg-secondary rounded-circle d-flex justify-content-center align-items-center" v-if="!order.is_paid">
                        <span class="h3 text-white pt-2">2</span>
                    </li>
                    <li class="progressStep bg-primary rounded-circle d-flex justify-content-center align-items-center" v-else>
                        <span class="h3 text-white pt-2">2</span>
                    </li>
                    <li class="progressStep bg-info rounded-circle d-flex justify-content-center align-items-center" v-if="!order.is_paid">
                        <span class="h3 text-white pt-2">3</span>
                    </li>
                    <li class="progressStep bg-primary rounded-circle d-flex justify-content-center align-items-center" v-else>
                        <span class="h3 text-white pt-2">3</span>
                    </li>
                </ul>
            </div>
            <div class="row d-flex my-lg-8 my-md-8 my-6">
                <!--訂單明細-->
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="d-flex flex-column border pb-lg-8 pb-md-6 pb-6">
                        <h3 class="text-center py-lg-3 py-md-2 py-2 mb-0 bg-secondary text-white h5">
                            訂單明細
                        </h3>
                        <table class="mb-0">
                            <thead class="border borer-bottom">
                                <tr class="text-center">
                                    <th class="col-lg-6 col-md-4 col-4 py-lg-4 py-md-2 py-2">
                                        商品資訊
                                    </th>
                                    <th class="col-lg-3 col-md-4 col-4 py-lg-4 py-md-2 py-2">
                                        數量
                                    </th>
                                    <th class="col-lg-3 col-md-4 col-4 py-lg-34 py-md-2 py-2">
                                        小記
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product of products" :key="product.id" >
                                    <th scope="row" class="col-lg-3 col-md-4 col-4 pt-4">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <img :src="product[1].product.imageUrl" alt="cartPhoto" style="max-height:80px" class=" object-fit-cover">
                                            <span>{{ product[1].product.title }}</span>
                                        </div>
                                    </th>
                                    <td class="col-lg-3 col-md-4 col-4 text-center">{{ product[1].qty }}</td>
                                    <td class="col-lg-3 col-md-4 col-4 text-center">NT${{ product[1].total }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!--訂單資訊-->
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="col-12  mb-4 d-flex flex-column justify-content-between px-0">
                        <div class="orderInfor text-white border">
                            <h3 class="text-center py-lg-3 py-md-2 py-2 bg-secondary h5 mb-0" v-if="!order.is_paid">確認訂單資料</h3>
                            <h3 class="text-center py-lg-3 py-md-2 py-2 bg-secondary h5 mb-0" v-else>訂購者資訊</h3>
                            <div class="col-12 px-0">
                                <div class="d-flex justify-content-center align-items-center flex-column">
                                    <table class="table mb-0 " v-if="order.user">
                                        <tbody>
                                            <tr>
                                                <th scope="col" class="text-left ps-3">收件人姓名:</th>
                                                <td>{{ order.user.name }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col" class="text-left ps-3">收件人電話:</th>
                                                <td>{{ order.user.tel }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col" class="text-left ps-3">收件人地址:</th>
                                                <td>{{ order.user.address }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col" class="text-left ps-3">電子郵件:</th>
                                                <td>{{ order.user.email }}</td>
                                            </tr>
                                            <!-- <tr>
                                                <th scope="col" width="110" class="text-left">付款方式:</th>
                                                <td>{{ order.user.payWay }}</td>
                                            </tr> -->
                                            <tr v-if="order.message">
                                                <th scope="col" width="110" class="text-left ps-3">備註:</th>
                                                <td>{{ order.message }}</td>
                                            </tr>
                                            <tr v-else>
                                                <th scope="col" width="110" class="text-left ps-3">備註:</th>
                                                <td class="text-danger">無</td>
                                            </tr>
                                            <!-- 訂單時間編號金額 -->
                                            <tr>
                                                <th scope="col" width="110" class="text-left ps-3">訂單時間:</th>
                                                <td>{{ timestampToDate(order.create_at) }}</td>
                                            </tr>
                                            <tr >
                                                <th scope="col" width="110" class="text-left ps-3">訂單編號:</th>
                                                <td>{{ order.id }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="col" width="110" class="text-left ps-3">訂單金額:</th>
                                                <td class="fw-bolder"
                                                    :class="{ 'text-success' : order.is_paid,
                                                            'text-danger' : !order.is_paid}"
                                                >
                                                NT${{order.total}}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table" v-if="order.user">
                                        <h3 class="text-center py-lg-3 py-md-2 py-2 bg-secondary text-white h5">付款狀態</h3>
                                        <div class="text-center py-lg-3 py-md-2">
                                            <span class="text-danger pt-3 fw-bold" v-if="!order.is_paid">目前尚未付款</span>
                                            <span class="text-success pt-3" v-else>已成功付款，感謝您的訂單!</span>
                                        </div>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--按鈕列表-->
                    <div class="d-flex justify-content-between my-lg-4 mx-3" v-if="order.is_paid === false">
                        <router-link to="/products" class="btn btn-info text-light d-flex align-items-center">
                            返回購物
                        </router-link>
                        <button class="btn btn btn-danger d-flex align-items-center" @click="payOrder">
                            付款結帳
                        </button>
                    </div>
                    <div class="d-flex justify-content-center" v-if="order.is_paid === true">
                        <router-link to="/products" class="btn btn-primary text-light d-flex align-items-center">
                            繼續購物
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios';
import Loading from 'vue-loading-overlay';
import Swal from 'sweetalert2';
import BannerTop from '../../components/BannerTop.vue';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
    data () {
        return {
            order: {},
            orderID: '',
            products: [],
            productId: [],
            message: '',
            subjectTilte: '訂單結帳',
            breadcrumbName:'訂單結帳',
            backList:  'https://i.imgur.com/fyyWfNw.jpeg',
            date: new Date()
        }
    },
    methods: {
        getOrder () {
        const api =`${VITE_API}/api/${VITE_PATH}/order/${this.$route.params.id}`;
        this.$http.get(api)
            .then(res => {
            if (res.data.success) {
                this.order.total = parseInt(this.order.total)
                this.productId = []
                this.products = [];
                this.order = res.data.order
                this.user = res.data.order.user
                this.order.paid_date = this.DateToTimestamp(this.order.paid_date)
                Object.entries(this.order.products).forEach(item => {
                this.products.push(item)
                })
                this.productId.forEach(item => {
                this.products.push(this.order.products[item])
                })
            } else {
                alert(res.data.message)
                console.log('error')
            }
            })
            .catch((err) => {
            console.log(err)
            })
        },
        sumData (arr) {
            let sum = 0
            for (var i = 0; i < arr.length; i++) {
                sum += arr[i]
            };
            return sum
        },
        payOrder () {
            const api =`${VITE_API}/api/${VITE_PATH}/pay/${this.order.id}`;
            axios.post(api)
                .then(res => {
                console.log(res)
                    this.getOrder();
                })
                .catch(err => {
                console.log(err)
                })
        },
        DateToTimestamp (date) {
            return (Date.parse(date) / 1000)
        },
        timestampToDate (timestamp) {
            if (timestamp) {
                const dd = new Date(timestamp * 1000)
                return `${dd.getFullYear()}-${this.adjustZero(dd.getMonth() + 1)}-${this.adjustZero(dd.getDate())}`
            }
        },
        adjustZero (num) {
            return num < 10 ? `0${num}` : `${num}`
        }
    },
    components: {
        BannerTop,
    },
    mounted () {
        this.getOrder()
    }
}
</script>

<style lang="scss" scoped>
.progress {
    font-family: 'GenSenRounded';
    &Step {
        width: 50px;
    }
}
.paidOrder {
    font-family: 'GenSenRounded';
}
</style>