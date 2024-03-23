<template>
    <div id="orderModal" ref="orderModal" class="modal fade" tabindex="-1" aria-labelledby="orderModalLabel"
            aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content border-0">
            <div class="modal-header bg-primary text-white">
                <h5 id="orderModalLabel" class="modal-title">
                <span>訂單細節</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-5">
                        <h3>客戶資料</h3>
                        <table class="table">
                            <tbody v-if="tempOrder.user">
                                <tr>
                                    <td>
                                        <label for="name">姓名:</label>
                                        <input v-model="tempOrder.user.name" class="form-control" type="text">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="email">信箱:</label>
                                        <input v-model="tempOrder.user.email" class="form-control" type="text">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="tel">電話:</label>
                                        <input v-model="tempOrder.user.tel" class="form-control" type="tel">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="address">地址:</label>
                                        <input v-model="tempOrder.user.address" class="form-control" type="text">
                                    </td>
                                </tr>
                                <tr>
                                    <td v-if="tempOrder.message">
                                        <label for="message">備註:</label>
                                        <input v-model="tempOrder.message" class="form-control" type="text">
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div class="col-7">
                        <h3>訂單資料</h3>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th>訂單編號:</th>
                                    <td>{{ newTempOrder.id }}</td>
                                </tr>
                                <tr>
                                    <th>下單時間:</th>
                                    <td>{{ $filters.date(newTempOrder.create_at) }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="col-4">
                            <label for="is_paid">選擇狀態:</label>
                            <select class="form-select mt-2" id="is_paid" v-model="newTempOrder.is_paid">
                                    <option value="true">已付款</option>
                                    <option value="false">未付款</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h3>訂單明細</h3>
                        <table class="table">
                            <thead class="bg-primary text-light border">
                                <tr class="text-center">
                                    <th scope="col" width="17%">商品圖片</th>
                                    <th scope="col" width="17%">商品名稱</th>
                                    <th scope="col" width="22%" class="border">售價</th>
                                    <th scope="col" width="22%">數量</th>
                                    <th scope="col" width="22%" class="border">小計</th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr v-for="item in tempOrder.products" :key="item.id" class="border-bottom">
                                    <td>
                                        <img :src="item.product.imageUrl" alt="item-photo" style="max-width:60px" class="object-fit-cover">
                                    </td>
                                    <td>
                                        <span class="mx-3">{{item.product.title}}</span>
                                    </td>
                                    <td>{{ item.product.price }}</td>
                                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                                    <td>{{ item.final_total }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="text-end mt-3 ms-4">
                            <span class="me-2 h6">總金額:</span>
                            <span class="text-danger me-4 h4">NT{{tempOrder.total}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
                </button>
                <button type="button" class="btn btn-primary" @click="updateTempOrder()">
                確認
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useToastMessageStore } from "../stores/toastMessage";
    export default {
        emits: ['update-temp-order'],
        props: ['tempOrder', 'isSwitch'],
        data() {
            return {
                orderModal: null,
                newTempOrder: {},
                is_paid: false,
            }
        },
        methods: {
            ...mapActions(useToastMessageStore, ['pushMessage']),
            openModal() {
                this.orderModal.show();
            },
            closeModal() {
                this.orderModal.hide();
            },
            updateTempOrder() {
                this.tempOrder.is_paid === 'true' ? this.tempOrder.is_paid = true : this.tempOrder.is_paid = false;
                this.$emit('update-temp-order', this.newTempOrder);
            }
        },
        watch: {
            // 在 tempOrder 屬性變化時執行
            tempOrder: function (newVal, oldVal) {
                this.newTempOrder = newVal;
            }
        },
        mounted() {
            this.orderModal = new bootstrap.Modal(this.$refs.orderModal);
        }
    }
</script>

