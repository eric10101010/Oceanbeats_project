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
            <div class="col-10 gx-0">
                <div class="d-flex justify-content-between align-items-center mt-5">
                    <h2 class="h3">商品列表管理</h2>
                    <button class="btn btn-primary text-white" @click="openModal('new')">建立新產品</button>
                </div>  
                <table class="table table-hover mt-4 border">
                <thead>
                    <tr>
                        <th class="col-2 bg-secondary text-white text-center">產品縮圖</th>
                        <th class="col-2 bg-secondary text-white text-center">產品名稱</th>
                        <th class="col-1 bg-secondary text-white text-center">原價</th>
                        <th class="col-1 bg-secondary text-white text-center">售價</th>
                        <th class="col-2 bg-secondary text-white text-center">是否啟用</th>
                        <th class="col-2 bg-secondary text-white text-center">編輯產品</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in productsList" :key="item.id">
                        <td class="text-center border">
                            <img :src="`${item.imageUrl}`" alt="productPhot" class="w-50 object-fit-cover" style="max-height:50px;">
                        </td>
                        <td class="text-center">{{ item.title }}</td>
                        <td class="text-center">{{ item.origin_price }}</td>
                        <td class="text-center">{{ item.price }}</td>
                        <td class="text-center">
                            <span v-if="item.is_enabled" class="text-success" >啟用</span>
                            <span v-else class="text-danger">未啟用</span>
                        </td>
                        <td class="text-center">
                            <button type="button" class="btn btn-outline-primary btn-sm"
                                    @click="openModal('edit', item)">編輯
                            </button>
                            <button type="button" class="btn btn-outline-danger btn-sm" 
                                @click="openModal('delete', item)">刪除
                            </button>
                        </td>
                    </tr>
                </tbody>
                </table>
                <p>目前有 <span class="text-success">{{ productsList?.length }}</span> 項產品</p>
                <Pagination :pages="pages" @emit-pages="getProducts"></Pagination>
            </div>
        </div>
    </div>
    <ProductModal :tempProduct="tempProduct" :isNew="isNew" @update-temp-product="changeTempProduct" ref="changeModal"></ProductModal>
    <DelProductModal :del-product="delProduct" :tempProduct="tempProduct" ref="delModal"></DelProductModal>
</template>
<script>

import { mapActions } from 'pinia';
import { useToastMessageStore } from "../../stores/toastMessage";
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import Pagination from '../../components/Pagination.vue';
import ProductModal from '../../components/ProductModal.vue';
import DelProductModal from '../../components/DelProductModal.vue';

const { VITE_API, VITE_PATH } = import.meta.env

export default {
    data() {
        return {
            productsList: [],
            tempProduct: {
                imagesUrl: [],
                imageUrl:'',
            },
            pages: {},
            isNew: false,
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
                    this.getProducts();
                })
                .catch(err => {
                    console.dir(err);
                })
        },
        //取得產品列表
        getProducts(page = 1) {
            const api =`${VITE_API}/api/${VITE_PATH}/admin/products?page=${page}`;
            let vm = this;
            vm.isLoading = true;
            axios.get(api)
            .then(res => {
                vm.currentPage = page;
                vm.productsList = res.data.products;
                vm.pages = res.data.pagination;
                vm.isLoading = false;
                vm.pushMessage({
                    style: 'success',
                    title: '成功取得產品資訊',
                    content: res.data.message,
                });
            })
            .catch(err => {
                vm.isLoading = false;
                vm.pushMessage({
                    style: 'danger',
                    title: '取得產品資訊失敗',
                    content: err.response.data.message,
                });
            })
        },
        //彈跳視窗
        openModal(status, item) {
            if(status === 'new') {
                this.tempProduct = {
                    imagesUrl: [],
                };
                this.isNew = true;
                this.$refs.changeModal.openModal();
            } else if (status === 'edit') {
                this.tempProduct = { ...item }; //顯示已有產品資訊
                if(!Array.isArray(this.tempProduct.imagesUrl)) {
                    this.tempProduct.imagesUrl = [];
                }
                this.isNew = false;
                this.$refs.changeModal.openModal();
            } else if (status === 'delete') {
                this.tempProduct = { ...item }; 
                this.isNew = false;
                this.$refs.delModal.openModal();
                console.log(this.tempProduct.title);
            } 
        },
        //更新產品
        updateProduct() {
            let api = `${VITE_API}/api/${VITE_PATH}/admin/product`; // 新增
            let method ='post'; //方便切換的方法，此為新增
            let name = this.tempProduct.title;
            let vm = this;
            vm.isLoading = true;
            if(!this.isNew) {
                api = `${VITE_API}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`;
                method = 'put';
            }
            axios[method](api, { data:this.tempProduct })
            .then(res => {
                // console.log(res.data);
                if(!this.isNew) {
                    vm.isLoading = false;
                    vm.getProducts();
                    vm.$refs.changeModal.closeModal();
                    vm.pushMessage({
                        style: 'success',
                        title: '更新商品成功',
                        content: res.data.data,
                    });
                } else {
                    vm.isLoading = false;
                    vm.getProducts();
                    vm.$refs.changeModal.closeModal();
                    vm.pushMessage({
                        style: 'success',
                        title: '新增商品成功',
                        content: res.data.data,
                    });
                }
            })
            .catch(err => {
                // console.dir(err);
                this.isLoading = false;
                if(!this.isNew) {
                    vm.pushMessage({
                    style: 'danger',
                    title: '更新商品失敗',
                    content: '商品資料未輸入，請重新確認商品資料',
                });
                } else {
                    vm.pushMessage({
                        style: 'danger',
                        title: '新增商品失敗',
                        content: '商品資料未輸入，請重新確認商品資料',
                    });
                }
            })
        },
        //存入已有資料
        changeTempProduct (updateTempProduct) {
            this.tempProduct = updateTempProduct;
            this.updateProduct();
        },
        //刪除產品
        delProduct() {
            const api = `${VITE_API}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`; 
            axios.delete(api)
            .then(res => {
                this.pushMessage({
                    style: 'success',
                    title: '刪除商品成功',
                    content: res.data.data,
                });
                this.$refs.delModal.closeModal();
                this.getProducts();
            })
            .catch(err => {
                console.dir(err);
            })
        }
    },
    mounted() {
        this.checkUser();
    },
    
    components: {
        ProductModal,
        DelProductModal,
        Pagination,
        Loading
    }
}
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