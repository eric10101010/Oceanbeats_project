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
        <div class="row d-flex justify-content-center">
            <div class="col-md-10 gx-0">
                <div class="mt-5">
                    <h2 class="h3">訂單列表管理</h2>
                </div>  
            <table class="table table-hover mt-4 border">
                <thead>
                    <tr>
                        <th class="bg-secondary text-white border">購買時間</th>
                        <th class="bg-secondary text-white">Email</th>
                        <th class="bg-secondary text-white">訂單編號</th>
                        <th class="bg-secondary text-white">應付金額</th>
                        <th class="bg-secondary text-white text-center">付款狀態</th>
                        <th class="bg-secondary text-white text-center">編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in ordersList" :key="item.id">
                        <th class="col-2">{{ $filters.date(item.create_at) }}</th>
                        <th class="col-2" v-if="item.user">{{ item.user.email }}</th>
                        <th class="col-3">{{ item.id }}</th>
                        <th class="col-1">{{ item.total }}</th>
                        <th class="col-2">
                            <div class="form-check form-switch d-flex justify-content-center align-items-center">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    :id="`paidSwitch${item.id}`"
                                    v-model="item.is_paid"
                                    @change="updateOrder(item)"
                                />
                                <label class="form-check-label ms-8" :for="`paidSwitch${item.id}`">
                                    <span v-if="item.is_paid" class="text-success">已付款</span>
                                    <span v-else class="text-danger">未付款</span>
                                </label>
                            </div>
                        </th>
                        <th class="col-2">
                            <div class="d-flex justify-content-center">
                                <button type="button" class="btn btn-outline-primary btn-sm"
                                @click="openModal('edit', item)">編輯</button>
                                <button type="button" class="btn btn-outline-danger btn-sm" 
                                @click="openModal('delete', item)">刪除</button>
                            </div>

                        </th>
                    </tr>
                </tbody>
            </table>
            <p>目前已有 <span class="text-success">{{ ordersList.length }}</span> 個訂單</p>
            <Pagination :pages="pages" @emit-pages="getOrders"></Pagination>
            </div>
        </div>
    </div>
    <OrderModal :tempOrder="tempOrder" :isSwitch="isSwitch" @update-temp-order="changeTempOrder" ref="changeModal"></OrderModal>
    <DelOrderModal :del-order="delOrder" :tempOrder="tempOrder" ref="delModal"></DelOrderModal>
</template>
<script>

import { mapActions } from 'pinia';
import { useToastMessageStore } from "../../stores/toastMessage";
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import OrderModal from '../../components/OrderModal.vue';
import DelOrderModal from '../../components/DelOrderModal.vue';
import Pagination from '../../components/Pagination.vue';

const { VITE_API, VITE_PATH } = import.meta.env

export default {
    data() {
        return {
            ordersList: [],
            tempOrder: {},
            pages: {},
            isSwitch: false,
            is_paid: 0,
            isLoading: false,
        }
    },
    methods: {
        ...mapActions(useToastMessageStore, ['pushMessage']),
        //確認登入
        checkUser() {
            const token = document.cookie
                .split("; ")
                .find((row) => row.startsWith("hexToken="))
                ?.split("=")[1];
            axios.defaults.headers.common['Authorization'] = token;
            axios.post(`${VITE_API}/api/user/check`, null)
                .then(() => {
                    this.getOrders();
                })
                .catch(err => {
                    console.dir(err);
                })
        },
        //取得訂單列表
        getOrders(page = 1) {
            const api =`${VITE_API}/api/${VITE_PATH}/admin/orders?page=${page}`;
            let vm = this;
            vm.isLoading = true;
            axios.get(api)
            .then(res => {
                vm.ordersList = res.data.orders;
                vm.pages = res.data.pagination;
                vm.isLoading = false;
                // console.dir(res.data.orders[0]);
            })
            .catch(err => {
                console.dir(err);
            })
        },
        //彈跳視窗
        openModal(status, item) {
            if(status === 'edit') {
                this.tempOrder = { ...item }; //顯示已有產品資訊
                this.isSwitch = true;
                this.$refs.changeModal.openModal();
            } else if (status === 'delete') {
                this.tempOrder = { ...item }; 
                this.isSwitch = false;
                this.$refs.delModal.openModal();
                // console.log(this.tempOrder.title);
            }
        },
        //編輯訂單
        updateOrder() {
            let api =  `${VITE_API}/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`;
            let vm = this;
            vm.isLoading = true;
            let method = 'put';
            this.isLoading = false;
            axios[method](api, { data:this.tempOrder })
            .then(res => {
                // console.log(res.data);
                if(!this.isSwitch) {
                    this.isLoading = false;
                    this.pushMessage({
                        style: 'success',
                        title: '刪除訂單成功',
                        content: res.data.data,
                    });
                } else {
                    this.pushMessage({
                        style: 'success',
                        title: '修改訂單成功',
                        content: res.data.data,
                    });
                }
                this.getOrders();
                this.$refs.changeModal.closeModal();
            })
            .catch(err => {
                console.dir(err);
                this.pushMessage({
                    style: 'danger',
                    title: '修改訂單失敗',
                    content: '訂單資料未輸入，請重新確認訂單資料',
                });
            })
        },
        //存入已有資料
        changeTempOrder (updateTempOrder) {
            this.tempOrder = updateTempOrder;
            this.updateOrder();
        },
        //刪除訂單
        delOrder() {
            const api = `${VITE_API}/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`; 
            axios.delete(api)
            .then(res => {
                this.pushMessage({
                    style: 'success',
                    title: '刪除訂單成功',
                    content: res.data.data,
                });
                this.$refs.delModal.closeModal();
                this.getOrders();
            })
            .catch(err => {
                this.pushMessage({
                    style: 'danger',
                    title: '刪除訂單失敗',
                    content: err.data.data,
                });
                console.dir(err);
            })
        }
    },
    mounted() {
        this.checkUser();
    },
    
    components: {
        OrderModal,
        DelOrderModal,
        Pagination,
        Loading
    }
}
</script>



<style lang="scss" scoped>
.form-check-input:checked {
    background-color: #198754 !important;
    border-color: #198754 !important; 
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
