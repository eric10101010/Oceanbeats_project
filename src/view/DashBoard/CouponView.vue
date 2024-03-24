<template>
    <loading v-model:active="isLoading">
        <div class="loadingio-spinner-spin-pqarappzpn">
            <div class="ldio-eviqoo58lam">
            <div><div></div></div><div><div></div>
            </div><div><div></div></div><div><div></div></div>
            <div><div></div></div><div><div></div></div><div><div>
            </div></div><div><div></div></div></div></div>
    </loading>
    <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-10 gx-0">
                <div class="d-flex justify-content-between">
                    <h2 class="h3">優惠券列表管理</h2>
                    <button class="btn btn-primary text-white" type="button"
                        @click="openModal('new')">
                        建立新的優惠券
                    </button>
                </div>
                <table class="table mt-4 border">
                <thead>
                    <tr>
                        <th class="col-2 bg-secondary text-white">名稱</th>
                        <th class="col-2 bg-secondary text-white">折扣百分比</th>
                        <th class="col-2 bg-secondary text-white">到期日</th>
                        <th class="col-3 bg-secondary text-white text-center">是否啟用</th>
                        <th class="col-3 bg-secondary text-white text-center">編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, key) in couponsList" :key="key">
                        <th> {{ item.title }}</th>
                        <th>{{ item.percent }}%</th>
                        <th>{{ $filters.date(item.due_date) }}</th>
                        <th class="text-center">
                            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
                            <span v-else class="text-danger">未啟用</span>
                        </th>
                        <th class="text-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-primary btn-sm"
                                    @click="openModal('edit', item)">編輯</button>
                                <button type="button" class="btn btn-outline-danger btn-sm" 
                                    @click="openModal('delete', item)">刪除</button>
                            </div>
                        </th>
                    </tr>
                </tbody>
                </table>
                <p>目前有 <span class="text-success">{{ couponsList.length }}</span> 張優惠券</p>
                <Pagination :pages="pages" @emit-pages="getCoupons"></Pagination>
            </div>
        </div>
    </div>
    <CouponModal :tempCoupon="tempCoupon" :is-new="isNew"  @update-temp-coupon="changeTempCoupon" ref="changeModal"/>
    <DelCouponModal :del-coupon="delCoupon" :tempCoupon="tempCoupon" ref="delModal"></DelCouponModal>
</template>

<script>

import { mapActions } from 'pinia';
import { useToastMessageStore } from "../../stores/toastMessage";
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import CouponModal from '../../components/CouponModal.vue';
import DelCouponModal from '../../components/DelCouponModal.vue';
import Pagination from '../../components/Pagination.vue';

const { VITE_API, VITE_PATH } = import.meta.env

export default {
    data() {
        return {
            couponsList: {},
            tempCoupon: {
                title: '',
                is_enabled: 0,
                percent: 100,
                code: '',
            },
            pages: {},
            isNew: false,
            isLoading: false,
        };
    },
    methods: {
        ...mapActions(useToastMessageStore, ['pushMessage']),
        //確認登入
        checkUser() {
            const token = document.cookie
                .split("; ").find((row) => row.startsWith("hexToken="))?.split("=")[1];

            axios.defaults.headers.common['Authorization'] = token;
            axios.post(`${VITE_API}/api/user/check`, null)
                .then(() => {
                    this.getCoupons();
                })
                .catch(err => {
                    console.dir(err);
                })
        },
        getCoupons(page = 1) {
            const api =`${VITE_API}/api/${VITE_PATH}/admin/coupons?page=${page}`;
            let vm = this;
            vm.isLoading = true;
            axios.get(api)
            .then(res => {
                vm.couponsList = res.data.coupons;
                vm.pages = res.data.pagination;
                vm.isLoading = false;
            })
            .catch(err => {
                console.dir(err);
            })
        },
        //彈跳視窗
        openModal(status, item) {
            if(status === 'new') {
                this.tempCoupon = {
                    due_date: new Date().getTime() / 1000,
                };
                this.isNew = true;
                this.$refs.changeModal.openModal();
            } else if (status === 'edit') {
                this.tempCoupon = { ...item };
                this.isNew = false;
                this.$refs.changeModal.openModal();
            } else if (status === 'delete') {
                this.tempCoupon = { ...item }; 
                this.isNew = false;
                this.$refs.delModal.openModal();
            } 
        },
        updateCoupon() {
            let api = `${VITE_API}/api/${VITE_PATH}/admin/coupon`;
            let method ='post';
            let vm = this;
            vm.isLoading = true;
            if(!this.isNew) {
                api = `${VITE_API}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`;
                method = 'put';
            }
            axios[method](api, { data:this.tempCoupon })
            .then(res => {
                // console.log(res.data);
                if(!this.isNew) { 
                    this.pushMessage({
                        style: 'success',
                        title: '成功更新優惠券',
                        content: res.data.message,
                    });
                    this.getCoupons();
                    this.$refs.changeModal.closeModal();
                    vm.isLoading = false;
                } else {
                    this.pushMessage({
                        style: 'success',
                        title: '成功新增優惠券',
                        content: res.data.message,
                    });
                    this.getCoupons();
                    this.$refs.changeModal.closeModal();
                }

            })
            .catch(err => {
                console.dir(err);
                if(!this.isNew) {
                    this.pushMessage({
                        style: 'danger',
                        title: '更新優惠券失敗',
                        content: '優惠券資料未輸入，請重新確認優惠券資料',
                    });
                } else {
                    this.pushMessage({
                        style: 'danger',
                        title: '新增優惠券失敗',
                        content: '優惠券資料未輸入，請重新確認優惠券資料',
                    });
                }
            })
        },
        //存入已有資料
        changeTempCoupon (updateTempCoupon) {
            this.tempCoupon = updateTempCoupon;
            this.updateCoupon();
        },
        delCoupon() {
            const api = `${VITE_API}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`; 
            axios.delete(api)
            .then(res => {
                this.pushMessage({
                    style: 'success',
                    title: '刪除優惠券成功',
                    content: res.data.data,
                });
                this.$refs.delModal.closeModal();
                this.getCoupons();
            })
            .catch(err => {
                this.pushMessage({
                    style: 'danger',
                    title: '刪除商品失敗',
                    content: err.data.message,
                });
                console.dir(err);
            })
        }
    },
    created() {
        this.checkUser();
    },
    components: { 
        CouponModal,
        DelCouponModal,
        Pagination,
        Loading
    }
};
</script>
<style lang="scss" scoped>
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