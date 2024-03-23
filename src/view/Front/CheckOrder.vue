<template>
    <BannerTop :subject-tilte="subjectTilte" :back-list="backList"></BannerTop>
    <section class="checkOrder">
        <div class="container">
            <!-- 進度條 -->
            <div class="row d-flex flex-column align-items-center position-relative my-8">
                <div class="progressList col-lg-7 col-md-9 col-10">
                    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <ul class="col-lg-8 col-md-10 col-12 list-unstyled d-flex justify-content-between position-absolute top-50 start-50 translate-middle">
                    <li class="progressStep bg-secondary rounded-circle d-flex justify-content-center align-items-center">
                        <span class="h3 text-white pt-2 ">1</span>
                    </li>
                    <li class="progressStep bg-info rounded-circle d-flex justify-content-center align-items-center">
                        <span class="h3 text-white pt-2">2</span>
                    </li>
                    <li class="progressStep bg-info rounded-circle d-flex justify-content-center align-items-center">
                        <span class="h3 text-white pt-2">3</span>
                    </li>
                </ul>
            </div>
            <!--訂單資訊-->
            <div class="checkOrderInfor row mt-6 d-flex justify-content-center mb-lg-8 mb-md-8 mb-6">
                <div class="col-lg-6 col-md-10 col-12 mb-lg-0 mb-md-4 mb-4">
                    <h3 class="bg-secondary text-white text-center mb-0 py-lg-3 py-md-2 py-2">訂單資訊</h3>
                    <div class="bg-table border py-lg-3 py-md-2 py-2">
                        <ul class="row d-flex align-items-center text-center list-unstyled fw-bold mx-0 border-bottom">
                            <li class="col-3">
                                <p>商品圖片</p>
                            </li>
                            <li class="col-3">
                                <p>商品名稱</p>
                            </li>
                            <li class="col-3">
                                <p>數量</p>
                            </li>
                            <li class="col-3 text-center">
                                <p>小計</p>
                            </li>
                        </ul>
                        <ul class="row list-unstyled d-flex align-items-end h6 mx-0" v-for="item in carts" :key="item.id">
                            <li class="col-3 d-flex justify-content-center align-items-center">
                                <img :src="item.product.imageUrl" alt="cartPhoto" style="max-width:70px" class="object-fit-cover">
                            </li>
                            <li class="col-3 text-center">
                                <p>{{ item.product.title }}</p>
                            </li>
                            <li class="col-3 text-center">
                                <p>{{ item.qty }} {{ item.product.unit }}</p>
                            </li>
                            <li class="col-3 text-center">
                                <p>{{ item.final_total }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-table border border-top-0">
                        <div class="d-flex justify-content-between align-items-center py-3 mx-6">
                            <span class="fw-bold text-lg">總金額:</span>
                            <span class="text-danger fw-bolder me-lg-3 me-md-4 me-0">NT${{ Final_total }}</span>
                        </div>
                    </div>
                </div>
                <!--顧客資訊-->
                <div class="col-lg-6 col-md-10 col-12 mb-0">
                    <h3 class="bg-secondary text-light text-center mb-0 py-lg-3 py-md-2 py-2">顧客資訊</h3>
                    <div class="bg-table border justify-content-start p-3">
                        <VeeForm ref="form" class="col-12" v-slot="{ errors }" @submit="createOrder">
                            <div class="mb-4">
                                <label for="email" class="form-label fw-bold">Email:</label>
                                <VeeField id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
                                        placeholder="請輸入Email" rules="email|required" v-model="form.user.email" autocomplete="off">
                                </VeeField>
                                <Error-message name="email" class="invalid-feedback"></Error-message>
                            </div>
                            <div class="mb-4">
                                <label for="name" class="form-label fw-bold">收件人姓名:</label>
                                <VeeField id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                                        placeholder="請輸入姓名" rules="required" v-model="form.user.name" autocomplete="off">
                                </VeeField>
                                <Error-message name="姓名" class="invalid-feedback"></Error-message>
                            </div>
                            <div class="mb-4">
                                <label for="tel" class="form-label fw-bold">收件人電話:</label>
                                <VeeField id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                                        placeholder="請輸入電話" :rules="isPhone"  v-model="form.user.tel" autocomplete="off">
                                </VeeField>
                                <Error-message name="電話" class="invalid-feedback"></Error-message>
                            </div>
                            <div class="mb-4">
                                <label for="address" class="form-label fw-bold">收件人地址:</label>
                                <VeeField id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                                        placeholder="請輸入地址" rules="required" v-model="form.user.address" autocomplete="off">
                                </VeeField>
                                <Error-message name="地址" class="invalid-feedback"></Error-message>
                            </div>
                            <div>
                                <label for="message" class="form-label fw-bold">留言:</label>
                                <textarea id="message" class="form-control" cols="30" rows="4" v-model="form.message" autocomplete="off"></textarea>
                            </div>
                            <div class="d-flex justify-content-between w-100 mt-3">
                                <button type="submit" class="btn btn-info">
                                    <routerLink to="/cart" class="text-white text-decoration-none">回購物車</routerLink>
                                </button>
                                <button type="submit" class="btn btn-danger">
                                    送出訂單
                                </button>
                            </div>
                        </VeeForm>
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
    data() {
        return {
            products: [],
            tempProduct: {},
            carts: {},
            Final_total: 0,
            isLoading: false,
            subjectTilte: '填寫訂單資料',
            backList:  'https://images.unsplash.com/photo-1708649290066-5f617003b93f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
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
                        console.log(res.data);
                        console.log(this.Final_total);
                    })
                    .catch(err => {
                        console.log(err.response.data);
                    })
        },
        getCart() {
            const api =`${VITE_API}/api/${VITE_PATH}/cart`;
                axios.get(api)
                    .then(res => {
                        this.carts= res.data.data.carts;
                        this.Final_total = res.data.data.final_total;
                        console.log(this.carts);
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
                    this.$router.push(`/paidorder/${res.data.orderId}`);
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
.checkOrder {
    font-family: 'GenSenRounded';
    &Infor {
        @media (max-width: 992px) {
            h3 {
                font-size: 24px;
            }
        }
        @media (max-width: 767px) {
            h3 {
                font-size: 20px;
            }
            p {
                font-size: 14px;
            }
        }
    }
}
.progress {
    &Step {
        width: 50px;
    }
}
</style>
